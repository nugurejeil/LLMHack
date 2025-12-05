-- TOEFL 80 Database Schema
-- Initial Migration

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. User Profiles Table
-- =====================================================
-- Extends Supabase auth.users with additional profile info
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  target_score INTEGER DEFAULT 80,
  current_level TEXT CHECK (current_level IN ('beginner', 'intermediate', 'advanced')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- =====================================================
-- 2. Learning Contents Table
-- =====================================================
-- Stores all learning materials (vocab, reading, listening, etc.)
CREATE TABLE public.contents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL CHECK (type IN ('vocabulary', 'reading', 'listening', 'speaking', 'writing')),
  title TEXT NOT NULL,
  content JSONB NOT NULL, -- Flexible storage for different content types
  difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard')),
  tags TEXT[],
  audio_url TEXT, -- For listening content
  estimated_time_minutes INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for efficient queries
CREATE INDEX idx_contents_type ON public.contents(type);
CREATE INDEX idx_contents_difficulty ON public.contents(difficulty);
CREATE INDEX idx_contents_tags ON public.contents USING GIN(tags);

-- RLS Policies for contents (public read)
ALTER TABLE public.contents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Contents are viewable by authenticated users"
  ON public.contents FOR SELECT
  TO authenticated
  USING (true);

-- =====================================================
-- 3. Learning Sessions Table
-- =====================================================
-- Tracks user learning sessions
CREATE TABLE public.learning_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_type TEXT NOT NULL CHECK (session_type IN ('quick', 'standard', 'deep')),
  content_type TEXT NOT NULL CHECK (content_type IN ('vocabulary', 'reading', 'listening', 'speaking', 'writing')),
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  duration_seconds INTEGER,
  is_completed BOOLEAN DEFAULT false
);

-- Indexes
CREATE INDEX idx_sessions_user_id ON public.learning_sessions(user_id);
CREATE INDEX idx_sessions_completed_at ON public.learning_sessions(completed_at);

-- RLS Policies
ALTER TABLE public.learning_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON public.learning_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON public.learning_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON public.learning_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- =====================================================
-- 4. Learning Records Table
-- =====================================================
-- Detailed records of each learning activity
CREATE TABLE public.learning_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_id UUID REFERENCES public.learning_sessions(id) ON DELETE SET NULL,
  content_id UUID REFERENCES public.contents(id) ON DELETE CASCADE,

  -- Performance metrics
  is_correct BOOLEAN,
  time_spent_seconds INTEGER,
  user_answer JSONB, -- Flexible storage for different answer types
  feedback JSONB, -- AI-generated feedback for speaking/writing

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_records_user_id ON public.learning_records(user_id);
CREATE INDEX idx_records_session_id ON public.learning_records(session_id);
CREATE INDEX idx_records_content_id ON public.learning_records(content_id);
CREATE INDEX idx_records_created_at ON public.learning_records(created_at);

-- RLS Policies
ALTER TABLE public.learning_records ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own records"
  ON public.learning_records FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own records"
  ON public.learning_records FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- 5. Streaks Table
-- =====================================================
-- Track daily learning streaks
CREATE TABLE public.streaks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE UNIQUE,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own streaks"
  ON public.streaks FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own streaks"
  ON public.streaks FOR UPDATE
  USING (auth.uid() = user_id);

-- =====================================================
-- 6. User Progress Table
-- =====================================================
-- Weekly/monthly progress tracking
CREATE TABLE public.user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,

  -- Time period
  year INTEGER NOT NULL,
  week INTEGER NOT NULL,

  -- Progress metrics
  total_study_time_minutes INTEGER DEFAULT 0,
  sessions_completed INTEGER DEFAULT 0,
  vocabulary_mastered INTEGER DEFAULT 0,
  reading_completed INTEGER DEFAULT 0,
  listening_completed INTEGER DEFAULT 0,
  speaking_practiced INTEGER DEFAULT 0,
  writing_practiced INTEGER DEFAULT 0,

  -- Estimated score based on performance
  estimated_score INTEGER,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  UNIQUE(user_id, year, week)
);

-- Indexes
CREATE INDEX idx_progress_user_id ON public.user_progress(user_id);
CREATE INDEX idx_progress_year_week ON public.user_progress(year, week);

-- RLS Policies
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress"
  ON public.user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress"
  ON public.user_progress FOR UPDATE
  USING (auth.uid() = user_id);

-- =====================================================
-- 7. Functions & Triggers
-- =====================================================

-- Function to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'User')
  );

  -- Initialize streak record
  INSERT INTO public.streaks (user_id, current_streak, longest_streak)
  VALUES (NEW.id, 0, 0);

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to auto-create profile
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contents_updated_at
  BEFORE UPDATE ON public.contents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_streaks_updated_at
  BEFORE UPDATE ON public.streaks
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at
  BEFORE UPDATE ON public.user_progress
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

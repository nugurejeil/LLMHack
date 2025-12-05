# TOEFL 80 Database Schema

## Overview

이 문서는 TOEFL 80 앱의 데이터베이스 스키마를 설명합니다.

## Tables

### 1. profiles
사용자 프로필 정보를 저장합니다. Supabase의 `auth.users` 테이블을 확장합니다.

**컬럼:**
- `id` (UUID, PK): auth.users.id와 연결
- `full_name` (TEXT): 사용자 이름
- `avatar_url` (TEXT, nullable): 프로필 이미지 URL
- `target_score` (INTEGER): 목표 점수 (기본값: 80)
- `current_level` (TEXT): 현재 수준 ('beginner', 'intermediate', 'advanced')
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### 2. contents
모든 학습 콘텐츠를 저장합니다.

**컬럼:**
- `id` (UUID, PK)
- `type` (TEXT): 콘텐츠 유형 ('vocabulary', 'reading', 'listening', 'speaking', 'writing')
- `title` (TEXT): 콘텐츠 제목
- `content` (JSONB): 유연한 콘텐츠 저장
- `difficulty` (TEXT): 난이도 ('easy', 'medium', 'hard')
- `tags` (TEXT[]): 태그 배열
- `audio_url` (TEXT, nullable): 오디오 파일 URL (리스닝용)
- `estimated_time_minutes` (INTEGER): 예상 소요 시간
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**Content JSONB 구조 예시:**

```json
// Vocabulary
{
  "word": "gregarious",
  "definition": "fond of company; sociable",
  "examples": ["She is a gregarious person."],
  "synonyms": ["sociable", "outgoing"],
  "pronunciation": "/ɡrɪˈɡɛəriəs/"
}

// Reading
{
  "passage": "The text passage...",
  "questions": [
    {
      "question": "What is the main idea?",
      "options": ["A", "B", "C", "D"],
      "correct_answer": "B",
      "explanation": "..."
    }
  ]
}

// Listening
{
  "transcript": "The audio transcript...",
  "questions": [...]
}
```

### 3. learning_sessions
사용자의 학습 세션을 추적합니다.

**컬럼:**
- `id` (UUID, PK)
- `user_id` (UUID, FK → profiles)
- `session_type` (TEXT): 세션 유형 ('quick', 'standard', 'deep')
- `content_type` (TEXT): 학습 콘텐츠 유형
- `started_at` (TIMESTAMP)
- `completed_at` (TIMESTAMP, nullable)
- `duration_seconds` (INTEGER)
- `is_completed` (BOOLEAN)

### 4. learning_records
각 학습 활동의 상세 기록을 저장합니다.

**컬럼:**
- `id` (UUID, PK)
- `user_id` (UUID, FK → profiles)
- `session_id` (UUID, FK → learning_sessions, nullable)
- `content_id` (UUID, FK → contents)
- `is_correct` (BOOLEAN, nullable): 정답 여부
- `time_spent_seconds` (INTEGER): 소요 시간
- `user_answer` (JSONB): 사용자 답변
- `feedback` (JSONB, nullable): AI 생성 피드백
- `created_at` (TIMESTAMP)

### 5. streaks
일일 학습 스트릭을 추적합니다.

**컬럼:**
- `id` (UUID, PK)
- `user_id` (UUID, FK → profiles, UNIQUE)
- `current_streak` (INTEGER): 현재 연속 일수
- `longest_streak` (INTEGER): 최장 연속 일수
- `last_activity_date` (DATE): 마지막 활동 날짜
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### 6. user_progress
주간/월간 진도를 추적합니다.

**컬럼:**
- `id` (UUID, PK)
- `user_id` (UUID, FK → profiles)
- `year` (INTEGER)
- `week` (INTEGER)
- `total_study_time_minutes` (INTEGER): 총 학습 시간
- `sessions_completed` (INTEGER): 완료한 세션 수
- `vocabulary_mastered` (INTEGER): 암기한 단어 수
- `reading_completed` (INTEGER): 완료한 리딩 수
- `listening_completed` (INTEGER): 완료한 리스닝 수
- `speaking_practiced` (INTEGER): 스피킹 연습 횟수
- `writing_practiced` (INTEGER): 라이팅 연습 횟수
- `estimated_score` (INTEGER, nullable): 예상 점수
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Functions & Triggers

### handle_new_user()
새 사용자가 가입하면 자동으로 profile과 streak 레코드를 생성합니다.

### update_updated_at_column()
레코드 업데이트 시 `updated_at` 컬럼을 자동으로 갱신합니다.

## Row Level Security (RLS)

모든 테이블에 RLS가 활성화되어 있습니다:
- 사용자는 자신의 데이터만 조회/수정 가능
- `contents` 테이블은 인증된 모든 사용자가 조회 가능

## Migration 적용 방법

### Supabase Dashboard 사용:
1. Supabase 프로젝트 대시보드 접속
2. SQL Editor로 이동
3. `supabase/migrations/20241202_initial_schema.sql` 파일 내용을 복사하여 실행

### Supabase CLI 사용:
```bash
supabase db reset
# 또는
supabase migration up
```

## 인덱스

효율적인 쿼리를 위해 다음 인덱스가 생성됩니다:
- `contents`: type, difficulty, tags (GIN)
- `learning_sessions`: user_id, completed_at
- `learning_records`: user_id, session_id, content_id, created_at
- `user_progress`: user_id, (year, week)

## 주의사항

1. **JSONB 필드**: `content`, `user_answer`, `feedback` 필드는 유연성을 위해 JSONB로 저장됩니다.
2. **Cascade 삭제**: 사용자 삭제 시 관련된 모든 데이터가 함께 삭제됩니다.
3. **RLS 정책**: 프로덕션 환경에서는 추가적인 보안 정책이 필요할 수 있습니다.

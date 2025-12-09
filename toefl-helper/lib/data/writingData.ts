import { WritingPrompt } from '@/lib/types/writing';

export const writingPrompts: WritingPrompt[] = [
  {
    id: 'independent-1',
    type: 'independent',
    topic: 'Technology and Education',
    prompt:
      'Do you agree or disagree with the following statement? Technology has made students less creative than they were in the past. Use specific reasons and examples to support your answer.',
    wordLimit: {
      min: 300,
      max: 400,
    },
    timeLimit: 1800, // 30 minutes
    rubric: {
      organization:
        'Clear introduction, body paragraphs with topic sentences, conclusion',
      development:
        'Well-developed ideas with specific examples and details',
      languageUse:
        'Varied vocabulary and sentence structures, appropriate word choice',
      grammar: 'Minimal grammatical errors, proper punctuation',
    },
  },
  {
    id: 'independent-2',
    type: 'independent',
    topic: 'Work and Success',
    prompt:
      'Some people believe that success comes from taking risks or chances. Others believe that success is the result of careful planning. In your opinion, what is the relationship between careful planning and taking risks? Which is more important for success?',
    wordLimit: {
      min: 300,
      max: 400,
    },
    timeLimit: 1800,
    rubric: {
      organization: 'Logical flow of ideas with clear transitions',
      development: 'Comprehensive examples supporting your position',
      languageUse: 'Academic vocabulary and precise language',
      grammar: 'Consistent verb tenses and subject-verb agreement',
    },
  },
  {
    id: 'integrated-1',
    type: 'integrated',
    topic: 'Environmental Science',
    readingPassage: `Solar energy has become increasingly popular as a renewable energy source. Proponents argue that solar power offers three main advantages over traditional fossil fuels.

First, solar energy is environmentally friendly. Unlike coal or natural gas, solar panels produce electricity without releasing harmful greenhouse gases or pollutants into the atmosphere. This makes solar power a crucial tool in combating climate change.

Second, solar energy is economically beneficial in the long term. While the initial installation costs may be high, solar panels require minimal maintenance and can generate free electricity for 25-30 years. Many homeowners find that their solar panels pay for themselves within 10-15 years through energy savings.

Third, solar energy promotes energy independence. Countries that invest in solar power reduce their reliance on imported fossil fuels, which can be subject to price fluctuations and political instability. By generating their own power, nations can achieve greater energy security.`,
    prompt:
      'Summarize the points made in the lecture, being sure to explain how they challenge the specific points made in the reading passage.',
    wordLimit: {
      min: 150,
      max: 225,
    },
    timeLimit: 1200, // 20 minutes
    rubric: {
      organization: 'Clear summary of lecture points responding to reading',
      development: 'Accurate representation of both sources',
      languageUse: 'Appropriate paraphrasing and summarization',
      grammar: 'Clear and accurate sentence construction',
    },
  },
];

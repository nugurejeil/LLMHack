import { SpeakingPrompt } from '@/lib/types/speaking';

export const speakingPrompts: SpeakingPrompt[] = [
  {
    id: 'sp-1',
    type: 'independent',
    topic: 'Personal Preference',
    question:
      'Some people prefer to work independently, while others prefer to work as part of a team. Which do you prefer? Use specific reasons and examples to support your answer.',
    preparationTime: 15,
    responseTime: 45,
    rubric: {
      delivery:
        'Clear speech, good pacing, and natural flow with minimal hesitations',
      languageUse:
        'Effective use of grammar and vocabulary to express ideas clearly',
      topicDevelopment:
        'Well-organized response with relevant reasons and examples',
    },
  },
  {
    id: 'sp-2',
    type: 'independent',
    topic: 'Education',
    question:
      'Do you agree or disagree with the following statement? Students should take a year off before starting university to work or travel. Use specific reasons and examples to support your opinion.',
    preparationTime: 15,
    responseTime: 45,
    rubric: {
      delivery:
        'Clear speech, good pacing, and natural flow with minimal hesitations',
      languageUse:
        'Effective use of grammar and vocabulary to express ideas clearly',
      topicDevelopment:
        'Clear position with logical reasoning and supporting examples',
    },
  },
  {
    id: 'sp-3',
    type: 'independent',
    topic: 'Technology',
    question:
      'Some people believe that technology has made our lives more complicated. Others think it has made our lives easier. What is your opinion? Use specific reasons and examples to support your answer.',
    preparationTime: 15,
    responseTime: 45,
    rubric: {
      delivery:
        'Clear speech, good pacing, and natural flow with minimal hesitations',
      languageUse:
        'Effective use of grammar and vocabulary to express ideas clearly',
      topicDevelopment:
        'Well-developed argument with relevant examples from personal experience',
    },
  },
];

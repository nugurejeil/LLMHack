import { ListeningPassage, ListeningQuestion } from '../types/listening'

export const listeningPassages: ListeningPassage[] = [
  {
    id: 'listening-passage-1',
    title: 'Art History Lecture',
    topic: 'Academic Lecture - Art',
    difficulty: 'intermediate',
    audioUrl: '/audio/ArtHistory.mp3',
    duration: 120,
    transcript: `Professor: When we think of Impressionism, we often picture Claude Monet's water lilies or his famous sunrise painting. But today, I want to talk about a lesser-known aspect of the movement. Many people don't realize that Impressionist painters were heavily influenced by Japanese woodblock prints, a style called ukiyo-e.

In the mid-1800s, after Japan opened its ports to Western trade, these prints flooded European markets. Artists like Monet, Degas, and Van Gogh became fascinated by their bold compositions, flat areas of color, and unusual perspectives. Unlike traditional Western art, which emphasized realistic depth and proportion, Japanese prints often featured asymmetrical layouts and cropped figures.

You can see this influence clearly in Monet's later works. His bridge paintings, for example, show a flattened perspective and decorative quality that's very different from traditional European landscape painting. This cross-cultural exchange fundamentally changed Western art, showing how global connections can spark creative innovation.`
  },
  {
    id: 'listening-passage-2',
    title: 'Biology Lecture',
    topic: 'Academic Lecture - Science',
    difficulty: 'intermediate',
    audioUrl: '/audio/Biology.mp3',
    duration: 110,
    transcript: `Professor: Alright, let's dive into the fascinating world of bioluminescence. This is the ability of living organisms to produce light through chemical reactions. You've probably seen fireflies glowing on a summer evening, but did you know that about 90% of deep-sea creatures are bioluminescent?

The chemical process is actually quite elegant. It involves a light-emitting molecule called luciferin and an enzyme called luciferase. When luciferin reacts with oxygen in the presence of luciferase, it produces light with very little heat - we call this "cold light."

Different organisms use bioluminescence for different purposes. Some fish use it to attract prey, essentially creating a built-in fishing lure. Others use it for camouflage - believe it or not, some squid emit light from their undersides to match the sunlight filtering down from above, making them invisible to predators looking up. And of course, fireflies use it for communication, particularly for attracting mates. Each species has its own unique flash pattern, like a coded message.`
  },
  {
    id: 'listening-passage-3',
    title: 'Office Hours Conversation',
    topic: 'Campus Conversation',
    difficulty: 'beginner',
    audioUrl: '/audio/office_hours.mp3',
    duration: 90,
    transcript: `Student: Hi Professor Chen, do you have a moment? I wanted to ask about the research paper assignment.

Professor: Of course, come in. What questions do you have?

Student: Well, I'm really interested in writing about climate change, but I'm not sure how to narrow down such a broad topic.

Professor: That's a great starting point. Climate change is indeed too broad for a 10-page paper. What specific aspect interests you most?

Student: I've been reading about how it affects ocean ecosystems, particularly coral reefs.

Professor: Excellent! That's much more focused. You could even narrow it further - maybe look at coral bleaching in a specific region, or the relationship between ocean temperature and coral health. Have you started looking at academic sources?

Student: A little bit. I found some articles online, but I'm not sure if they're scholarly enough.

Professor: Make sure you're using the library's academic databases. Wikipedia and news articles are fine for background, but your main sources should be peer-reviewed journal articles. The librarians can help you search effectively if you need assistance.

Student: That makes sense. One more question - when is the topic proposal due?

Professor: Next Friday. Just submit a one-page outline with your research question and at least three potential sources. Don't worry about making it perfect - I'll give you feedback before you start the full draft.`
  }
]

export const listeningQuestions: ListeningQuestion[] = [
  // Art History questions
  {
    id: 'art-q1',
    passageId: 'listening-passage-1',
    questionType: 'main-idea',
    question: 'What is the main topic of the lecture?',
    options: [
      'The life and works of Claude Monet',
      'The influence of Japanese art on Impressionist painters',
      'The history of Japanese woodblock printing',
      'Techniques for creating realistic landscape paintings'
    ],
    correctAnswer: 1,
    explanation: 'The professor focuses on how Japanese ukiyo-e prints influenced Impressionist painters like Monet, Degas, and Van Gogh, making this the main topic of the lecture.'
  },
  {
    id: 'art-q2',
    passageId: 'listening-passage-1',
    questionType: 'detail',
    question: 'According to the professor, what characteristic of Japanese prints differed from traditional Western art?',
    options: [
      'They used more expensive materials',
      'They featured asymmetrical layouts and cropped figures',
      'They were always printed in black and white',
      'They focused exclusively on portrait painting'
    ],
    correctAnswer: 1,
    explanation: 'The professor explicitly states that Japanese prints "featured asymmetrical layouts and cropped figures," unlike traditional Western art which emphasized realistic depth and proportion.'
  },
  {
    id: 'art-q3',
    passageId: 'listening-passage-1',
    questionType: 'inference',
    question: 'What can be inferred about the impact of Japan opening its ports in the mid-1800s?',
    options: [
      'It led to a decline in European art',
      'It had no effect on Western culture',
      'It facilitated cultural exchange that influenced Western art',
      'It only affected Japanese artists'
    ],
    correctAnswer: 2,
    explanation: 'The professor mentions that after Japan opened its ports, prints "flooded European markets" and influenced Western artists, showing that this political event facilitated important cultural exchange.'
  },

  // Biology questions
  {
    id: 'bio-q1',
    passageId: 'listening-passage-2',
    questionType: 'main-idea',
    question: 'What is the lecture mainly about?',
    options: [
      'How fireflies communicate',
      'The chemical process and purposes of bioluminescence',
      'Deep-sea exploration techniques',
      'The evolution of marine animals'
    ],
    correctAnswer: 1,
    explanation: 'The professor discusses both how bioluminescence works chemically (luciferin and luciferase) and the various purposes different organisms use it for, making this the main focus.'
  },
  {
    id: 'bio-q2',
    passageId: 'listening-passage-2',
    questionType: 'detail',
    question: 'What percentage of deep-sea creatures does the professor say are bioluminescent?',
    options: [
      'About 50%',
      'About 70%',
      'About 90%',
      'Nearly 100%'
    ],
    correctAnswer: 2,
    explanation: 'The professor specifically states that "about 90% of deep-sea creatures are bioluminescent."'
  },
  {
    id: 'bio-q3',
    passageId: 'listening-passage-2',
    questionType: 'function',
    question: 'Why does the professor mention squid emitting light from their undersides?',
    options: [
      'To illustrate how bioluminescence is used for camouflage',
      'To show that all sea creatures glow',
      'To explain how squid hunt for food',
      'To demonstrate the brightest form of bioluminescence'
    ],
    correctAnswer: 0,
    explanation: 'The professor uses this example to demonstrate camouflage - the squid match sunlight from above to become invisible to predators below.'
  },

  // Office Hours questions
  {
    id: 'office-q1',
    passageId: 'listening-passage-3',
    questionType: 'main-idea',
    question: 'What is the main purpose of this conversation?',
    options: [
      'To discuss the student\'s grades',
      'To get advice on narrowing a research topic',
      'To complain about the assignment difficulty',
      'To request an extension on the deadline'
    ],
    correctAnswer: 1,
    explanation: 'The student asks how to narrow down the broad topic of climate change, and the professor provides guidance on making it more focused.'
  },
  {
    id: 'office-q2',
    passageId: 'listening-passage-3',
    questionType: 'detail',
    question: 'What specific topic does the student want to write about?',
    options: [
      'Climate change in general',
      'Ocean ecosystems and coral reefs',
      'Air pollution in cities',
      'Renewable energy sources'
    ],
    correctAnswer: 1,
    explanation: 'The student specifically mentions being interested in "how it affects ocean ecosystems, particularly coral reefs."'
  },
  {
    id: 'office-q3',
    passageId: 'listening-passage-3',
    questionType: 'attitude',
    question: 'What is the professor\'s attitude toward the student\'s topic choice?',
    options: [
      'Disapproving and critical',
      'Indifferent and uninterested',
      'Supportive and encouraging',
      'Confused and uncertain'
    ],
    correctAnswer: 2,
    explanation: 'The professor responds with "Excellent!" and provides helpful suggestions for narrowing the topic, showing a supportive and encouraging attitude.'
  }
]

// Get a random passage with its questions
export function getRandomListeningSession(): { passage: ListeningPassage; questions: ListeningQuestion[] } {
  const randomPassage = listeningPassages[Math.floor(Math.random() * listeningPassages.length)]
  const passageQuestions = listeningQuestions.filter(q => q.passageId === randomPassage.id)

  return {
    passage: randomPassage,
    questions: passageQuestions
  }
}

// Get specific passage with questions
export function getListeningSessionById(passageId: string): { passage: ListeningPassage; questions: ListeningQuestion[] } | null {
  const passage = listeningPassages.find(p => p.id === passageId)
  if (!passage) return null

  const questions = listeningQuestions.filter(q => q.passageId === passageId)
  return { passage, questions }
}

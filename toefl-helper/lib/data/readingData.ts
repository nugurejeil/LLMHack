import { ReadingPassage, ReadingQuestion } from '../types/reading'

export const readingPassages: ReadingPassage[] = [
  {
    id: 'reading-passage-1',
    title: 'The History of Coffee',
    topic: 'Culture & History',
    difficulty: 'intermediate',
    wordCount: 320,
    passage: `Coffee is one of the most popular beverages in the world, consumed by millions of people every day. However, its journey from an obscure plant in Ethiopia to a global commodity is a fascinating story that spans centuries and continents.

According to legend, coffee was discovered in Ethiopia around the 9th century by a goat herder named Kaldi. He noticed that his goats became unusually energetic after eating berries from a certain tree. Curious about this effect, Kaldi tried the berries himself and experienced a similar boost in energy. He shared his discovery with local monks, who began using the berries to stay awake during long prayer sessions.

From Ethiopia, coffee cultivation spread to the Arabian Peninsula. By the 15th century, coffee was being grown in Yemen, and coffee houses began appearing in cities across the Middle East. These establishments became important centers of social activity and intellectual exchange, where people gathered to discuss news, politics, and culture.

Coffee reached Europe in the 17th century, initially meeting with suspicion and even opposition from some religious groups who called it the "bitter invention of Satan." However, Pope Clement VIII reportedly tasted coffee and enjoyed it so much that he gave it his blessing, helping to popularize the drink across Europe.

European colonial powers then established coffee plantations in their tropical colonies, particularly in the Americas and Asia. Today, Brazil is the world's largest coffee producer, followed by Vietnam and Colombia. The global coffee industry employs millions of people and generates billions of dollars in revenue annually, making it one of the most valuable traded commodities in the world.`
  },
  {
    id: 'reading-passage-2',
    title: 'The Importance of Sleep',
    topic: 'Health & Science',
    difficulty: 'intermediate',
    wordCount: 310,
    passage: `Sleep is a fundamental biological need, yet many people underestimate its importance for physical and mental health. Recent scientific research has revealed that adequate sleep is essential for numerous bodily functions, and chronic sleep deprivation can have serious consequences.

During sleep, the brain performs several critical tasks. It consolidates memories, moving information from short-term to long-term storage. This process is crucial for learning and retaining new information. Studies have shown that students who get sufficient sleep after studying perform significantly better on tests than those who stay up late cramming.

Sleep also plays a vital role in physical health. While we sleep, the body repairs damaged tissues, synthesizes proteins, and releases growth hormones. The immune system produces cytokines, proteins that help fight infection and inflammation. People who consistently sleep less than seven hours per night are more susceptible to common illnesses like colds and flu.

Mental health is equally dependent on quality sleep. Sleep deprivation affects mood regulation and emotional processing. Individuals who don't get enough sleep are more likely to experience anxiety, depression, and irritability. Long-term sleep problems have been linked to an increased risk of developing serious mental health disorders.

Despite these known benefits, modern lifestyles often interfere with healthy sleep patterns. Artificial lighting, especially the blue light emitted by electronic devices, can disrupt our natural circadian rhythms. Stress, caffeine consumption, and irregular work schedules also contribute to poor sleep quality. Health experts recommend establishing a consistent sleep schedule, creating a relaxing bedtime routine, and limiting screen time before bed to improve sleep quality.`
  },
  {
    id: 'reading-passage-3',
    title: 'Urban Green Spaces',
    topic: 'Environment & Urban Planning',
    difficulty: 'advanced',
    wordCount: 330,
    passage: `Urban green spaces—parks, gardens, street trees, and other vegetated areas within cities—provide numerous benefits that extend far beyond their aesthetic appeal. As cities continue to expand and populations grow, the preservation and creation of these spaces has become increasingly important for sustainable urban development.

One of the most significant benefits of urban green spaces is their positive impact on public health. Parks and gardens encourage physical activity by providing safe, accessible locations for exercise and recreation. Studies have consistently shown that people living near green spaces are more physically active and have lower rates of obesity and cardiovascular disease. Additionally, exposure to nature has been linked to reduced stress levels, improved mental health, and faster recovery from illness.

Green spaces also provide crucial environmental services in urban areas. Trees and vegetation help regulate temperature through shade and evapotranspiration, potentially reducing the urban heat island effect by several degrees. This cooling effect can significantly decrease energy consumption for air conditioning during summer months. Plants also improve air quality by absorbing pollutants and producing oxygen, while soil and vegetation help manage stormwater runoff, reducing the risk of flooding.

Beyond health and environmental benefits, urban green spaces serve important social functions. They provide neutral ground where people from diverse backgrounds can interact, fostering social cohesion and community bonds. Parks often host community events, farmers markets, and cultural activities that strengthen neighborhood identity and civic engagement.

However, access to green spaces is not equally distributed across cities. Lower-income neighborhoods often have fewer and smaller parks compared to affluent areas, creating what researchers call "park poverty." This disparity has important implications for environmental justice, as disadvantaged communities miss out on the health and social benefits that green spaces provide. Urban planners and policymakers are increasingly recognizing the need to ensure equitable access to quality green spaces for all residents.`
  }
]

export const readingQuestions: ReadingQuestion[] = [
  // Coffee passage questions
  {
    id: 'coffee-q1',
    passageId: 'reading-passage-1',
    questionType: 'main-idea',
    question: 'What is the main purpose of this passage?',
    options: [
      'To explain how to make the perfect cup of coffee',
      'To describe the historical journey of coffee from Ethiopia to worldwide popularity',
      'To argue that coffee is healthier than other beverages',
      'To discuss the economic impact of coffee production in Brazil'
    ],
    correctAnswer: 1,
    explanation: 'The passage traces coffee\'s history from its discovery in Ethiopia through its spread to the Middle East, Europe, and eventually worldwide. While it mentions economics and Brazil, the main focus is the historical journey of coffee.'
  },
  {
    id: 'coffee-q2',
    passageId: 'reading-passage-1',
    questionType: 'detail',
    question: 'According to the passage, who is credited with discovering coffee?',
    options: [
      'Pope Clement VIII',
      'Ethiopian monks',
      'A goat herder named Kaldi',
      'Yemeni farmers'
    ],
    correctAnswer: 2,
    explanation: 'The passage explicitly states that "According to legend, coffee was discovered in Ethiopia around the 9th century by a goat herder named Kaldi."'
  },
  {
    id: 'coffee-q3',
    passageId: 'reading-passage-1',
    questionType: 'inference',
    question: 'What can be inferred about early European attitudes toward coffee?',
    options: [
      'Europeans immediately embraced coffee when it arrived',
      'Coffee was initially viewed with suspicion by some groups',
      'Europeans preferred tea over coffee',
      'Coffee was only consumed by the wealthy'
    ],
    correctAnswer: 1,
    explanation: 'The passage mentions that coffee "initially met with suspicion and even opposition from some religious groups" and was called the "bitter invention of Satan," indicating initial resistance.'
  },

  // Sleep passage questions
  {
    id: 'sleep-q1',
    passageId: 'reading-passage-2',
    questionType: 'main-idea',
    question: 'What is the primary focus of this passage?',
    options: [
      'How to cure insomnia',
      'The importance of sleep for health and well-being',
      'Why people should avoid electronic devices',
      'The history of sleep research'
    ],
    correctAnswer: 1,
    explanation: 'The passage discusses various ways sleep is essential for physical and mental health, making this the central theme throughout the text.'
  },
  {
    id: 'sleep-q2',
    passageId: 'reading-passage-2',
    questionType: 'detail',
    question: 'According to the passage, what happens to memories during sleep?',
    options: [
      'They are permanently deleted',
      'They are consolidated and moved to long-term storage',
      'They become more difficult to recall',
      'They are mixed with dreams'
    ],
    correctAnswer: 1,
    explanation: 'The passage clearly states that during sleep, "the brain...consolidates memories, moving information from short-term to long-term storage."'
  },
  {
    id: 'sleep-q3',
    passageId: 'reading-passage-2',
    questionType: 'vocabulary',
    question: 'In the context of the passage, what does "susceptible" mean?',
    options: [
      'Resistant',
      'Vulnerable or likely to be affected',
      'Immune',
      'Allergic'
    ],
    correctAnswer: 1,
    explanation: 'The passage uses "susceptible" to describe people who are more likely to get sick, meaning they are vulnerable or easily affected by illnesses.'
  },

  // Urban Green Spaces questions
  {
    id: 'urban-q1',
    passageId: 'reading-passage-3',
    questionType: 'main-idea',
    question: 'What is the main argument of this passage?',
    options: [
      'Cities should eliminate all buildings to create more parks',
      'Urban green spaces provide multiple important benefits and should be equitably distributed',
      'Green spaces are only valuable for their beauty',
      'Wealthy neighborhoods deserve more parks than poor ones'
    ],
    correctAnswer: 1,
    explanation: 'The passage discusses the multiple benefits of urban green spaces (health, environmental, social) and concludes by emphasizing the need for equitable access, making this the main argument.'
  },
  {
    id: 'urban-q2',
    passageId: 'reading-passage-3',
    questionType: 'detail',
    question: 'According to the passage, how do green spaces help manage urban temperatures?',
    options: [
      'By reflecting sunlight away from buildings',
      'Through shade and evapotranspiration',
      'By generating wind currents',
      'Through artificial cooling systems'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly states that "Trees and vegetation help regulate temperature through shade and evapotranspiration."'
  },
  {
    id: 'urban-q3',
    passageId: 'reading-passage-3',
    questionType: 'inference',
    question: 'What does the term "park poverty" most likely refer to?',
    options: [
      'Parks that are poorly maintained',
      'The lack of funding for park maintenance',
      'Unequal access to green spaces in lower-income areas',
      'Parks that charge admission fees'
    ],
    correctAnswer: 2,
    explanation: 'The passage introduces "park poverty" in the context of discussing how "lower-income neighborhoods often have fewer and smaller parks," indicating it refers to unequal distribution of green spaces.'
  }
]

// Get a random passage with its questions
export function getRandomReadingSession(): { passage: ReadingPassage; questions: ReadingQuestion[] } {
  const randomPassage = readingPassages[Math.floor(Math.random() * readingPassages.length)]
  const passageQuestions = readingQuestions.filter(q => q.passageId === randomPassage.id)

  return {
    passage: randomPassage,
    questions: passageQuestions
  }
}

// Get specific passage with questions
export function getReadingSessionById(passageId: string): { passage: ReadingPassage; questions: ReadingQuestion[] } | null {
  const passage = readingPassages.find(p => p.id === passageId)
  if (!passage) return null

  const questions = readingQuestions.filter(q => q.passageId === passageId)
  return { passage, questions }
}

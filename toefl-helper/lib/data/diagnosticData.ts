import { DiagnosticTest } from '../types/diagnostic'

export const diagnosticTestData: DiagnosticTest = {
  readingQuestions: [
    {
      id: 'reading-1',
      type: 'reading',
      passage: `The Industrial Revolution, which began in Britain in the late 18th century, marked a major turning point in human history. It transformed agrarian societies into industrial powerhouses through the introduction of new manufacturing processes and technologies. The steam engine, invented by James Watt in 1769, became the driving force behind this transformation, powering factories, trains, and ships.

The revolution had profound social impacts. As factories grew, people migrated from rural areas to cities in search of work, leading to rapid urbanization. Working conditions were often harsh, with long hours and dangerous environments. Children as young as five worked in factories and mines. These conditions eventually led to labor movements and reforms that improved workers' rights.

The Industrial Revolution also changed family structures. Previously, families worked together in fields or small workshops. Factory work separated family members, with different shifts and locations. Women and children joined the workforce in unprecedented numbers, though they were paid significantly less than men for similar work.`,
      question: 'According to the passage, what was the primary cause of urbanization during the Industrial Revolution?',
      options: [
        'Government policies encouraging city development',
        'People seeking employment in factories',
        'Agricultural failures in rural areas',
        'Better living conditions in cities'
      ],
      correctAnswer: 1
    },
    {
      id: 'reading-2',
      type: 'reading',
      passage: `The Industrial Revolution, which began in Britain in the late 18th century, marked a major turning point in human history. It transformed agrarian societies into industrial powerhouses through the introduction of new manufacturing processes and technologies. The steam engine, invented by James Watt in 1769, became the driving force behind this transformation, powering factories, trains, and ships.

The revolution had profound social impacts. As factories grew, people migrated from rural areas to cities in search of work, leading to rapid urbanization. Working conditions were often harsh, with long hours and dangerous environments. Children as young as five worked in factories and mines. These conditions eventually led to labor movements and reforms that improved workers' rights.

The Industrial Revolution also changed family structures. Previously, families worked together in fields or small workshops. Factory work separated family members, with different shifts and locations. Women and children joined the workforce in unprecedented numbers, though they were paid significantly less than men for similar work.`,
      question: 'The word "harsh" in paragraph 2 is closest in meaning to',
      options: [
        'Difficult',
        'Unusual',
        'Temporary',
        'Competitive'
      ],
      correctAnswer: 0
    },
    {
      id: 'reading-3',
      type: 'reading',
      passage: `The Industrial Revolution, which began in Britain in the late 18th century, marked a major turning point in human history. It transformed agrarian societies into industrial powerhouses through the introduction of new manufacturing processes and technologies. The steam engine, invented by James Watt in 1769, became the driving force behind this transformation, powering factories, trains, and ships.

The revolution had profound social impacts. As factories grew, people migrated from rural areas to cities in search of work, leading to rapid urbanization. Working conditions were often harsh, with long hours and dangerous environments. Children as young as five worked in factories and mines. These conditions eventually led to labor movements and reforms that improved workers' rights.

The Industrial Revolution also changed family structures. Previously, families worked together in fields or small workshops. Factory work separated family members, with different shifts and locations. Women and children joined the workforce in unprecedented numbers, though they were paid significantly less than men for similar work.`,
      question: 'Which of the following can be inferred from paragraph 3 about family life before the Industrial Revolution?',
      options: [
        'Families rarely worked together',
        'Family members typically worked in the same location',
        'Women did not participate in economic activities',
        'Children were not allowed to work'
      ],
      correctAnswer: 1
    }
  ],
  listeningQuestions: [
    {
      id: 'listening-1',
      type: 'listening',
      audioUrl: '/audio/ArtHistory.mp3',
      transcript: `Professor: When we think of Impressionism—think Monet, Renoir—we usually talk about their style: the loose brushstrokes, the focus on light, the vibrant colors. But today, I want to talk about technology. Specifically, a tiny invention that made the entire movement possible: the paint tube.

Before the mid-19th century, painters had to grind their own pigments and mix them with oil. They stored these paints in pig bladders. Yes, animal bladders. They were messy, hard to seal, and prone to bursting. Because of this, painting was almost exclusively a studio activity. You couldn't easily travel with your supplies.

Then, in 1841, an American painter named John Goffe Rand invented the collapsible tin paint tube.

This changed everything. Suddenly, paint was portable and preserved for longer. Artists could leave their studios and go outside. This practice is called "En plein air"—painting in the open air.

Because they were outside, they could observe natural light directly. They saw how light changed quickly—how a haystack looked different at sunrise compared to sunset. They needed to paint fast to capture that fleeting moment. This necessity for speed led to the characteristic "messy" or "rapid" brushstrokes of Impressionism.

So, without that simple tin tube, Monet might never have painted his water lilies by the pond. The technology literally shaped the art.`,
      question: 'What is the main topic of the lecture?',
      options: [
        'Famous Impressionist painters',
        'How the paint tube invention enabled Impressionism',
        'Different painting techniques in the 19th century',
        'The history of oil painting'
      ],
      correctAnswer: 1
    },
    {
      id: 'listening-2',
      type: 'listening',
      audioUrl: '/audio/Biology.mp3',
      transcript: `Professor: Okay, let's settle down. Last week, we discussed how animals adapt to desert environments. Today, we are going to the opposite extreme—the deep ocean. Specifically, the "Midnight Zone," or the bathypelagic zone, where no sunlight penetrates.

Now, how do creatures survive in total darkness? One of the most fascinating adaptations is bioluminescence. This is the ability of living organisms to produce light. And the classic example here is the Anglerfish.

(Sound of slide clicking)

Look at this image. The female Anglerfish has a specialized organ called the esca. It's this glowing bulb dangling from her forehead. This light is actually produced by symbiotic bacteria living inside the organ. It's a partnership. The fish provides protection and nutrients for the bacteria, and in return, the bacteria provide light.

Why is this light so crucial? Two reasons. First, predation. In the pitch black, this little light acts like a lure. Smaller fish get curious, swim close to the light, and—snap—the Anglerfish eats them. It saves energy because the Anglerfish doesn't have to chase its prey. Second, finding a mate. In the vast, dark ocean, finding a partner is incredibly difficult. The specific pattern of light helps males find the females of their own species.

So, this biological light isn't just for show; it is a critical survival mechanism for feeding and reproduction in an environment with zero solar energy.`,
      question: 'According to the professor, what are the TWO main purposes of the Anglerfish\'s bioluminescence?',
      options: [
        'Attracting prey and finding mates',
        'Escaping predators and seeing in the dark',
        'Communication and navigation',
        'Photosynthesis and warmth'
      ],
      correctAnswer: 0
    },
    {
      id: 'listening-3',
      type: 'listening',
      audioUrl: '/audio/office_hours.mp3',
      transcript: `Professor: Come in. Ah, Sarah. Good to see you. How can I help you today?
Student: Hi, Professor Miller. I wanted to ask about the final term paper. I was looking over the syllabus, and I'm a bit torn between two topics.
Professor: Sure, strictly speaking, the deadline for topic submission is next week, so you're asking at the right time. What are you considering?
Student: Well, I'm really interested in the Urban Planning section we covered last week. Specifically, I want to write about the impact of Green Spaces on mental health in cities. But... I'm worried there might not be enough quantitative data for a 10-page paper.
Professor: I see. That's a valid concern. While it is a fascinating topic, finding hard statistics specifically for mental health can be tricky compared to, say, air quality data. However, there have been some recent studies published in the Journal of Urban Design. Have you checked the library database yet?
Student: Not the specific journals, just general articles.
Professor: I suggest you start there. If you can find at least three major case studies, the topic is viable. If not, you might want to pivot to your second option. What was the other one?
Student: It was about the Heat Island Effect in downtown areas.
Professor: Ah, that one is much more straightforward. Plenty of data. But stick with the Green Spaces idea for a day or two. Do some deep digging. I think you might be surprised by what you find.
Student: Okay, I'll give it a try. Thanks, Professor!`,
      question: 'What does the professor suggest the student do?',
      options: [
        'Change her topic to the Heat Island Effect immediately',
        'Research the Green Spaces topic in the Journal of Urban Design before deciding',
        'Write about both topics in the same paper',
        'Ask other students for their opinions'
      ],
      correctAnswer: 1
    }
  ]
}

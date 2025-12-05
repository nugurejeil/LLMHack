import { UserAnswer, DiagnosticResult } from '../types/diagnostic'

export function calculateDiagnosticScore(
  readingAnswers: UserAnswer[],
  listeningAnswers: UserAnswer[]
): DiagnosticResult {
  // Calculate raw scores
  const readingCorrect = readingAnswers.filter(a => a.isCorrect).length
  const listeningCorrect = listeningAnswers.filter(a => a.isCorrect).length

  const readingTotal = readingAnswers.length
  const listeningTotal = listeningAnswers.length

  // Calculate percentage scores
  const readingScore = readingTotal > 0 ? (readingCorrect / readingTotal) * 100 : 0
  const listeningScore = listeningTotal > 0 ? (listeningCorrect / listeningTotal) * 100 : 0

  // Calculate average score
  const totalScore = (readingScore + listeningScore) / 2

  // Estimate TOEFL score (scaled to 0-30 per section, then combined)
  // This is a simplified estimation
  const readingTOEFL = Math.round((readingScore / 100) * 30)
  const listeningTOEFL = Math.round((listeningScore / 100) * 30)
  const estimatedTOEFLScore = readingTOEFL + listeningTOEFL

  // Analyze weaknesses and strengths
  const weaknesses: string[] = []
  const strengths: string[] = []

  if (readingScore < 60) {
    weaknesses.push('독해력 향상 필요')
    weaknesses.push('어휘력 강화 필요')
  } else if (readingScore >= 80) {
    strengths.push('우수한 독해 능력')
  }

  if (listeningScore < 60) {
    weaknesses.push('청취력 향상 필요')
    weaknesses.push('발음 인식 연습 필요')
  } else if (listeningScore >= 80) {
    strengths.push('우수한 청취 능력')
  }

  // General recommendations based on overall performance
  if (totalScore < 50) {
    weaknesses.push('기초 문법 복습 권장')
  }

  if (strengths.length === 0) {
    strengths.push('성실한 학습 태도')
  }

  return {
    readingScore: Math.round(readingScore),
    listeningScore: Math.round(listeningScore),
    totalScore: Math.round(totalScore),
    readingCorrect,
    listeningCorrect,
    readingTotal,
    listeningTotal,
    estimatedTOEFLScore,
    weaknesses,
    strengths
  }
}

export function getScoreLevel(score: number): {
  level: string
  color: string
  message: string
} {
  if (score >= 80) {
    return {
      level: '우수',
      color: 'mint-green',
      message: '훌륭합니다! 현재 수준을 유지하며 약점을 보완하세요.'
    }
  } else if (score >= 60) {
    return {
      level: '양호',
      color: 'butter-yellow',
      message: '좋은 출발입니다! 꾸준한 학습으로 목표를 달성할 수 있습니다.'
    }
  } else {
    return {
      level: '노력 필요',
      color: 'strawberry-pink',
      message: '걱정하지 마세요! 맞춤 학습 계획으로 빠르게 향상될 수 있습니다.'
    }
  }
}

export function getRecommendedStudyPlan(result: DiagnosticResult): {
  dailyGoal: string
  focusAreas: string[]
  weeklyPlan: string[]
} {
  const focusAreas: string[] = []
  const weeklyPlan: string[] = []

  // Determine focus areas based on scores
  if (result.readingScore < result.listeningScore) {
    focusAreas.push('리딩 집중 학습')
    focusAreas.push('어휘 강화')
    weeklyPlan.push('월-수-금: 리딩 지문 2개씩')
    weeklyPlan.push('화-목: 리스닝 연습 1시간')
  } else if (result.listeningScore < result.readingScore) {
    focusAreas.push('리스닝 집중 학습')
    focusAreas.push('발음 인식 훈련')
    weeklyPlan.push('월-수-금: 리스닝 연습 1시간')
    weeklyPlan.push('화-목: 리딩 지문 2개씩')
  } else {
    focusAreas.push('균형잡힌 학습')
    weeklyPlan.push('매일: 리딩 1지문 + 리스닝 30분')
  }

  // Add general recommendations
  weeklyPlan.push('주말: 복습 및 약점 보완')

  let dailyGoal = ''
  if (result.totalScore < 50) {
    dailyGoal = '하루 1시간 - 기초 다지기 중점'
  } else if (result.totalScore < 70) {
    dailyGoal = '하루 45분 - 약점 집중 공략'
  } else {
    dailyGoal = '하루 30분 - 고득점 전략 학습'
  }

  return {
    dailyGoal,
    focusAreas,
    weeklyPlan
  }
}

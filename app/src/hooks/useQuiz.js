import { useState, useCallback } from 'react'

const QUESTIONS = [
  {
    id: 'activity',
    question: 'Jaką aktywność planujesz?',
    options: [
      { value: 'nauka', label: 'Nauka' },
      { value: 'trening', label: 'Trening' },
      { value: 'praca', label: 'Praca' },
      { value: 'relaks', label: 'Relaks' }
    ]
  },
  {
    id: 'energy',
    question: 'Jaki poziom energii?',
    options: [
      { value: 'low', label: 'Niski - need chill' },
      { value: 'medium', label: 'Średni - gotowy do działania' },
      { value: 'high', label: 'Wysoki - full power' }
    ]
  },
  {
    id: 'lyrics',
    question: 'Preferencje co do wokalu?',
    options: [
      { value: 'no-lyrics', label: 'Bez tekstów (instrumental)' },
      { value: 'lyrics', label: 'Z tekstami' }
    ]
  }
]

export function useQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    activity: null,
    energy: null,
    lyrics: null
  })

  const selectAnswer = useCallback((value) => {
    const questionId = QUESTIONS[currentStep].id
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }, [currentStep])

  const nextStep = useCallback(() => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }, [currentStep])

  const prevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }, [currentStep])

  const resetQuiz = useCallback(() => {
    setCurrentStep(0)
    setAnswers({
      activity: null,
      energy: null,
      lyrics: null
    })
  }, [])

  const isComplete = answers.activity && answers.energy && answers.lyrics

  return {
    questions: QUESTIONS,
    currentStep,
    answers,
    selectAnswer,
    nextStep,
    prevStep,
    resetQuiz,
    isComplete,
    currentQuestion: QUESTIONS[currentStep]
  }
}

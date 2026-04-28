import { useState, useCallback, useEffect, useRef } from 'react'

export function useTimer() {
  const [mode, setMode] = useState('work') // 'work' | 'break'
  const WORK_DURATION = 25 * 60  // 25 minutes for work mode
  const BREAK_DURATION = 5 * 60   // 5 minutes for break mode

  const [timeLeft, setTimeLeft] = useState(WORK_DURATION)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const modeRef = useRef('work')

  const switchMode = useCallback(() => {
    setMode(prev => {
      modeRef.current = prev === 'work' ? 'break' : 'work'
      return prev === 'work' ? 'break' : 'work'
    })
  }, [])

  const reset = useCallback(() => {
    setIsRunning(false)
    setMode('work')
    modeRef.current = 'work'
    setTimeLeft(WORK_DURATION)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  const toggle = useCallback(() => {
    setIsRunning(prev => !prev)
  }, [])

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    if (timeLeft === 0) {
      // Time's up - switch mode
      setIsRunning(false)
      switchMode()
      const newMode = modeRef.current
      const newDuration = newMode === 'work' ? WORK_DURATION : BREAK_DURATION
      setTimeLeft(newDuration)
      return
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isRunning, timeLeft, switchMode])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((mode === 'work' ? WORK_DURATION : BREAK_DURATION) - timeLeft) / (mode === 'work' ? WORK_DURATION : BREAK_DURATION) * 100

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isRunning,
    mode,
    duration: mode === 'work' ? WORK_DURATION : BREAK_DURATION,
    progress,
    reset,
    toggle,
    switchMode
  }
}
import { useReducer, useEffect, useRef } from 'react'

const WORK_DURATION = 25 * 60
const BREAK_DURATION = 5 * 60

const initialState = {
  mode: 'work',
  timeLeft: WORK_DURATION,
  isRunning: false,
  pomodoroCount: 0
}

function timerReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, isRunning: !state.isRunning }
    case 'RESET':
      return { ...initialState }
    case 'TICK':
      if (state.timeLeft <= 1) {
        if (state.mode === 'work') {
          return {
            mode: 'break',
            timeLeft: BREAK_DURATION,
            isRunning: state.isRunning,
            pomodoroCount: state.pomodoroCount + 1
          }
        }
        return {
          mode: 'work',
          timeLeft: WORK_DURATION,
          isRunning: state.isRunning,
          pomodoroCount: state.pomodoroCount
        }
      }
      return { ...state, timeLeft: state.timeLeft - 1 }
    default:
      return state
  }
}

export function useTimer() {
  const [state, dispatch] = useReducer(timerReducer, initialState)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!state.isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }

    intervalRef.current = setInterval(() => {
      dispatch({ type: 'TICK' })
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [state.isRunning])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const progress = ((state.mode === 'work' ? WORK_DURATION : BREAK_DURATION) - state.timeLeft) / (state.mode === 'work' ? WORK_DURATION : BREAK_DURATION) * 100

  return {
    timeLeft: state.timeLeft,
    formattedTime: formatTime(state.timeLeft),
    isRunning: state.isRunning,
    mode: state.mode,
    duration: state.mode === 'work' ? WORK_DURATION : BREAK_DURATION,
    progress,
    pomodoroCount: state.pomodoroCount,
    reset: () => dispatch({ type: 'RESET' }),
    toggle: () => dispatch({ type: 'TOGGLE' })
  }
}
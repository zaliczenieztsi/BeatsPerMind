import { useTimer } from '../hooks/useTimer'
import { Button } from './ui/button'

export default function FocusModeTimer() {
  const {
    formattedTime,
    isRunning,
    mode,
    progress,
    pomodoroCount,
    reset,
    toggle
  } = useTimer()

  // Circular progress bar calculations for SVG
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Color that softly pulses based on timer state
  const pulseColor = isRunning ? '#6EE7B7' : '#A3E635'

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Mode indicator and Pomodoro Counter */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {mode === 'work' ? 'Focus Time' : 'Break Time'}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Pomodoros: {pomodoroCount}
        </p>
      </div>

      {/* Circular Progress Bar Container */}
      <div className="relative group">
        {/* Background circle */}
        <svg
          width="200"
          height="200"
          className="transform transition-all duration-500 group-hover:scale-105"
        >
          {/* Outer glow circle */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2"
          />
          {/* Progress circle with gradient */}
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke={pulseColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{ strokeDashoffset, transform: 'rotate(-90deg)', transformOrigin: 'center' }}
          />
          {/* Subtle glow effect */}
          <circle
            cx="100"
            cy="100"
            r={radius + 4}
            fill="none"
            stroke={pulseColor}
            strokeWidth="1"
            opacity="0.15"
            strokeDasharray="10 5"
          />
        </svg>

        {/* Center time display */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1
            className={`text-5xl font-light tracking-tight transition-all duration-300 ${isRunning ? 'text-emerald-400 drop-shadow-lg animate-pulse-glow' : 'text-slate-700'}`}
          >
            {formattedTime}
          </h1>
          <span
            className={`text-sm font-medium transition-all duration-500 ${isRunning ? 'text-emerald-500' : 'text-slate-400'}`}
          >
            {mode === 'work' ? 'Focus Time' : 'Break Time'}
          </span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-3">
        <Button
          variant={isRunning ? 'outline' : 'default'}
          onClick={toggle}
          className="rounded-full py-6 px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 min-w-[100px]"
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button variant="ghost" onClick={reset} className="rounded-full py-6 px-4 transition-all duration-300 hover:bg-secondary/50 hover:scale-105 active:scale-95">
          Reset
        </Button>
      </div>
    </div>
  )
}
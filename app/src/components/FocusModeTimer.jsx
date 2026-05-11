import { useTimer } from '../hooks/useTimer'
import { Button } from './ui/button'

export default function FocusModeTimer() {
  const {
    formattedTime,
    isRunning,
    progress,
    pomodoroCount,
    reset,
    toggle
  } = useTimer()

  // Color that softly pulses based on timer state
  const pulseColor = isRunning ? '#6EE7B7' : '#10B981'

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Mode indicator and Pomodoro Counter */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#800020]">
          FOCUS TIME
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Pomodoros: {pomodoroCount}
        </p>
      </div>

      {/* Circular Breathing Visualizer Container */}
      <div className="relative flex items-center justify-center w-[280px] h-[280px]">
        {/* Breathing circles layers */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer glow */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-emerald-400/10 blur-2xl animate-breathe-outer" />
          
          {/* Progress ring */}
          <svg width="200" height="200" className="absolute transform -rotate-90">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={pulseColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 - (progress / 100) * 2 * Math.PI * 90}`}
              className="transition-all duration-1000 ease-out"
              style={{ filter: 'drop-shadow(0 0 10px rgba(126, 234, 183, 0.6))' }}
            />
          </svg>

          {/* Breathing ring layers */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-300/25 animate-breathe" />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-200/20 animate-breathe" style={{ animationDelay: '0.5s' }} />
          <div className="absolute w-[200px] h-[200px] rounded-full border border-emerald-100/15 animate-breathe" style={{ animationDelay: '1s' }} />
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-light tracking-tight text-slate-800 mb-2">
            {formattedTime}
          </h1>
          <span className="text-base font-medium uppercase tracking-wider text-[#800020]">
            Focus Time
          </span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-4">
        <Button
          variant={isRunning ? 'outline' : 'default'}
          onClick={toggle}
          className="rounded-full py-6 px-10 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 min-w-[120px] border-2 hover:border-[#800020]/30"
          style={{ boxShadow: '0 0 20px rgba(128, 0, 32, 0.15)' }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button 
          variant="outline" 
          onClick={reset} 
          className="rounded-full py-6 px-6 transition-all duration-300 hover:bg-secondary/50 hover:scale-105 active:scale-95 border-2 hover:border-[#800020]/30"
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
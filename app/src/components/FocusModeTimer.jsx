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

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Mode indicator and Pomodoro Counter */}
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[#800020]">
          FOCUS TIME
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Pomodoros: {pomodoroCount}
        </p>
      </div>

      {/* Organic Breathing Visualizer - layered waves */}
      <div className="relative flex items-center justify-center w-[280px] h-[280px]">
        {/* Wave layer 1 - deep maroon glow, blur 60px, largest */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-[#800020]/10 blur-[60px] animate-breathe-outer" />
        
        {/* Wave layer 2 - teal aura, blur 40px */}
        <div className="absolute w-[240px] h-[240px] rounded-full bg-teal-400/10 blur-[40px] animate-breathe-outer" style={{ animationDelay: '0.3s' }} />
        
        {/* Wave layer 3 - teal midtone, blur 20px */}
        <div className="absolute w-[220px] h-[220px] rounded-full bg-teal-500/5 blur-[20px] animate-breathe-outer" style={{ animationDelay: '0.6s' }} />
        
        {/* Wave layer 4 - main teal glow, blur 10px, slow pulse */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-teal-500/10 blur-[10px] animate-breathe-organic" />

        {/* Subtle progress ring - integrated */}
        <svg width="200" height="200" className="absolute transform -rotate-90 pointer-events-none">
          <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke={isRunning ? '#6EE7B7' : '#14B8A6'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 90}`}
            strokeDashoffset={`${2 * Math.PI * 90 - (progress / 100) * 2 * Math.PI * 90}`}
            className="transition-all duration-1000 ease-out"
            style={{ 
              filter: 'drop-shadow(0 0 6px rgba(20, 184, 166, 0.3))',
              opacity: 0.6
            }}
          />
        </svg>

        {/* Center content - directly on layers */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl font-light tracking-tight text-slate-800 mb-1">
            {formattedTime}
          </h1>
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#800020]">
            Focus Time
          </span>
        </div>
      </div>

      {/* Control buttons */}
      <div className="flex gap-5">
        <button
          onClick={toggle}
          className="rounded-full py-5 px-12 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 min-w-[120px] text-sm font-medium bg-emerald-50 text-emerald-900 border-2 border-emerald-200/60 hover:border-emerald-300/60"
          style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)' }}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button 
          onClick={reset} 
          className="rounded-full py-5 px-8 transition-all duration-300 hover:bg-white/60 hover:scale-105 active:scale-95 text-sm font-medium border-2 border-slate-200/60 hover:border-slate-300/60 bg-white/40"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
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
        {/* Wave layer 1 - deep maroon glow */}
        <div className="absolute w-[260px] h-[260px] rounded-full bg-[#800020]/30 blur-[30px] animate-breathe" style={{ animationDelay: '0s' }} />
        
        {/* Wave layer 2 - teal aura */}
        <div className="absolute w-[240px] h-[240px] rounded-full bg-teal-400/30 blur-[20px] animate-breathe" style={{ animationDelay: '0.5s' }} />
        
        {/* Wave layer 3 - teal midtone */}
        <div className="absolute w-[220px] h-[220px] rounded-full bg-teal-500/30 blur-[10px] animate-breathe" style={{ animationDelay: '1s' }} />
        
        {/* Wave layer 4 - main teal glow with glow effect */}
        <div className="absolute w-[200px] h-[200px] rounded-full bg-teal-500/30 blur-[5px] animate-breathe shadow-[0_0_40px_rgba(20,184,166,0.3)]" style={{ animationDelay: '1.5s' }} />

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

        {/* Center content - organic cloud integration */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center rounded-full blur-[2px] px-8 py-4">
          <h1 className="text-6xl font-light tracking-tight text-slate-700/90 mb-1">
            {formattedTime}
          </h1>
          <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#800020]/80">
            Focus Time
          </span>
        </div>

        {/* Soft overlay glow behind center content */}
        <div className="absolute w-[180px] h-[180px] rounded-full bg-teal-400/10 blur-[30px]" />
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
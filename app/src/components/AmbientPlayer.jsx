import { useAudio } from '../hooks/useAudio'
import { ambientSounds } from '../data/ambientSounds'
import { Button } from './ui/button'
import { Slider } from './ui/slider'

export default function AmbientPlayer() {
  const {
    currentSound,
    isPlaying,
    volume,
    playSound,
    stopSound,
    togglePlay,
    setVolume
  } = useAudio()

  return (
    <div className="w-full space-y-5">
      <div className="text-center mb-5">
        <p className="text-xs uppercase tracking-widest text-[#800020] dark:text-[oklch(0.5_0.15_150)] mb-2">
          Ambient Sounds
        </p>
        {currentSound && (
          <p className="font-light text-lg text-slate-700 dark:text-[oklch(0.9_0.01_260)]">
            {currentSound.icon} {currentSound.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ambientSounds.map(sound => (
          <div
            key={sound.id}
            className={`
              relative rounded-2xl transition-all duration-300
              ${currentSound?.id === sound.id
                ? 'bg-white/60 shadow-lg border-2 border-emerald-300/60 ring-2 ring-emerald-200/50 dark:bg-[oklch(0.2_0.08_150/0.5)] dark:border-[oklch(0.5_0.15_150/0.6)] dark:ring-[oklch(0.45_0.15_150/0.4)] dark:shadow-[0_0_30px_rgba(129,178,154,0.3)]' 
                : 'bg-white/40 hover:bg-white/50 hover:shadow-md border border-white/60 hover:border-emerald-200/40 dark:bg-[oklch(0.15_0.005_260/0.6)] dark:hover:bg-[oklch(0.18_0.008_260/0.8)] dark:border-[oklch(1_0_0/10%)] dark:hover:border-[oklch(0.45_0.1_150/0.3)]'
              }
            `}
          >
            <Button
              variant="ghost"
              className="w-full h-auto py-4 flex flex-col items-center gap-2 rounded-2xl transition-all duration-300 hover:scale-105 dark:text-[oklch(0.9_0.01_260)]"
              onClick={() => {
                if (currentSound?.id === sound.id) {
                  togglePlay()
                } else {
                  playSound(sound.id)
                }
              }}
            >
              <span className="text-2xl">{sound.icon}</span>
              <span className="text-xs font-medium text-slate-700 dark:text-[oklch(0.8_0.01_260)]">{sound.name}</span>
            </Button>
             
            {/* Active sound indicator - atmospheric glow */}
            {currentSound?.id === sound.id && (
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(16, 185, 129, 0.2), 0 0 20px rgba(16, 185, 129, 0.15)',
                  animation: 'breathe 3s ease-in-out infinite'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {currentSound && (
        <div className="flex items-center gap-3 pt-4 border-t border-emerald-200/30 dark:border-[oklch(1_0_0/12%)]">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="shrink-0 rounded-full w-10 h-10 transition-all duration-300 hover:scale-110 bg-emerald-100/50 hover:bg-emerald-100 dark:bg-[oklch(0.2_0.08_150/0.4)] dark:hover:bg-[oklch(0.25_0.08_150/0.6)] dark:text-[oklch(0.9_0.01_260)]"
          >
            {isPlaying ? '❚❚' : '▶'}
          </Button>
          <div className="flex-1 px-2">
            <Slider
              min={0}
              max={1}
              step={0.05}
              value={[volume]}
              onValueChange={(val) => {
                const valNum = Number(val[0])
                if (!isNaN(valNum)) {
                  setVolume(valNum)
                }
              }}
              className="cursor-pointer"
            />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={stopSound}
            className="shrink-0 text-xs rounded-xl transition-all duration-300 hover:bg-red-50 text-red-600 hover:text-red-700 dark:hover:bg-[oklch(0.577_0.2_25/0.2)] dark:text-[oklch(0.65_0.2_25)] dark:hover:text-[oklch(0.7_0.2_25)]"
          >
            Stop
          </Button>
        </div>
      )}
    </div>
  )
}
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
        <p className="text-xs uppercase tracking-widest text-[oklch(0.5_0.15_150)] mb-2">
          Ambient Sounds
        </p>
        {currentSound && (
          <p className="font-light text-lg text-[oklch(0.9_0.01_260)]">
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
                ? 'bg-[oklch(0.2_0.08_150/0.5)] shadow-lg border-2 border-[oklch(0.5_0.15_150/0.6)] ring-2 ring-[oklch(0.45_0.15_150/0.4)]' 
                : 'bg-[oklch(0.15_0.005_260/0.6)] hover:bg-[oklch(0.18_0.008_260/0.8)] hover:shadow-md border border-[oklch(1_0_0/10%)] hover:border-[oklch(0.45_0.1_150/0.3)]'
              }
            `}
          >
            <Button
              variant="ghost"
              className="w-full h-auto py-4 flex flex-col items-center gap-2 rounded-2xl transition-all duration-300 hover:scale-105 text-[oklch(0.9_0.01_260)]"
              onClick={() => {
                if (currentSound?.id === sound.id) {
                  togglePlay()
                } else {
                  playSound(sound.id)
                }
              }}
            >
              <span className="text-2xl">{sound.icon}</span>
              <span className="text-xs font-medium text-[oklch(0.8_0.01_260)]">{sound.name}</span>
            </Button>

            {/* Active sound indicator - atmospheric glow */}
            {currentSound?.id === sound.id && (
              <div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 30px oklch(0.45 0.15 150 / 0.3), 0 0 40px oklch(0.45 0.15 150 / 0.2)',
                  animation: 'breathe 3s ease-in-out infinite'
                }}
              />
            )}
          </div>
        ))}
      </div>

      {currentSound && (
        <div className="flex items-center gap-3 pt-4 border-t border-[oklch(1_0_0/12%)]">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="shrink-0 rounded-full w-10 h-10 transition-all duration-300 hover:scale-110 bg-[oklch(0.2_0.08_150/0.4)] hover:bg-[oklch(0.25_0.08_150/0.6)] text-[oklch(0.9_0.01_260)]"
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
            className="shrink-0 text-xs rounded-xl transition-all duration-300 hover:bg-[oklch(0.577_0.2_25/0.2)] text-[oklch(0.65_0.2_25)] hover:text-[oklch(0.7_0.2_25)]"
          >
            Stop
          </Button>
        </div>
      )}
    </div>
  )
}
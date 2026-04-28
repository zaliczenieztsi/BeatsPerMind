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
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ambient Sounds</p>
        {currentSound && (
          <p className="font-light text-lg">
            {currentSound.icon} {currentSound.name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ambientSounds.map(sound => (
          <Button
            key={sound.id}
            variant={currentSound?.id === sound.id ? 'default' : 'outline'}
            className="h-auto py-4 flex flex-col items-center gap-2 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            onClick={() => {
              if (currentSound?.id === sound.id) {
                togglePlay()
              } else {
                playSound(sound.id)
              }
            }}
          >
            <span className="text-2xl">{sound.icon}</span>
            <span className="text-xs">{sound.name}</span>
          </Button>
        ))}
      </div>

      {currentSound && (
        <div className="flex items-center gap-3 pt-4 border-t border-secondary/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            className="shrink-0 rounded-full w-10 h-10 transition-all duration-300 hover:scale-110"
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
            onClick={() => {
              stopSound()
              // Stop sound and allow re-selection
            }}
            className="shrink-0 text-xs rounded-xl transition-all duration-300 hover:bg-secondary/50"
          >
            Stop
          </Button>
        </div>
      )}
    </div>
  )
}
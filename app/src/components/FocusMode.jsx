import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function FocusMode() {
  return (
    <div className="max-w-md mx-auto px-6 py-12 space-y-8">
      <div className="p-10 rounded-3xl bg-white/50 backdrop-blur-md border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-scale-in">
        <Timer />
        <AmbientPlayer />
      </div>
      <div className="text-center animate-fade-in-up stagger-2">
        <Link to="/">
          <Button variant="link" className="text-sm transition-all duration-300 hover:opacity-70">
            Powrót do strony głównej
          </Button>
        </Link>
      </div>
    </div>
  )
}
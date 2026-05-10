import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export default function FocusMode() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-teal-soft rounded-full blur-3xl animate-breathe opacity-60"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] bg-maroon-muted rounded-full blur-3xl animate-breathe opacity-60" style={{ animationDelay: '2s' }}></div>
      </div>
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
    </div>
  )
}
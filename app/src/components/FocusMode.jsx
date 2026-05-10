import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function FocusMode() {
  useEffect(() => {
    const root = document.getElementById('root')
    const originalBg = root.style.background
    const originalBackdrop = root.style.backdropFilter
    const originalShadow = root.style.boxShadow
    
    root.style.background = 'transparent'
    root.style.backdropFilter = 'none'
    root.style.boxShadow = 'none'
    document.body.style.background = '#e0f7fa'

    return () => {
      root.style.background = originalBg
      root.style.backdropFilter = originalBackdrop
      root.style.boxShadow = originalShadow
      document.body.style.background = ''
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-16 left-16 w-64 h-64 bg-teal-soft rounded-full blur-[100px] animate-breathe"></div>
        <div className="absolute top-32 right-24 w-[280px] h-[280px] bg-maroon-muted rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-48 right-48 w-80 h-80 bg-teal-accent rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 right-20 w-[350px] h-[350px] bg-maroon-muted rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-16 left-32 w-64 h-64 bg-teal-soft rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-teal-accent rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '3s' }}></div>
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
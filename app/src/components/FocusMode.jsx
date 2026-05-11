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
    
    return () => {
      root.style.background = originalBg
      root.style.backdropFilter = originalBackdrop
      root.style.boxShadow = originalShadow
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <div className="fixed inset-0 z-0 overflow-hidden" style={{ margin: 0, padding: 0 }}>
        <div 
          className="absolute top-16 left-16 w-64 h-64 rounded-full bg-[#99f6e4] blur-[100px] animate-breathe z-[-1]"
          style={{ opacity: 0.5 }}
        ></div>
        <div 
          className="absolute top-24 right-24 w-48 h-48 rounded-full bg-[#800020] blur-[120px] animate-breathe z-[-1]"
          style={{ opacity: 0.5, animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#99f6e4] blur-[100px] animate-breathe z-[-1]"
          style={{ opacity: 0.5, animationDelay: '4s' }}
        ></div>
        <div 
          className="absolute bottom-24 right-32 w-56 h-56 rounded-full bg-[#800020] blur-[120px] animate-breathe z-[-1]"
          style={{ opacity: 0.5, animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-16 left-24 w-40 h-40 rounded-full bg-[#99f6e4] blur-[100px] animate-breathe z-[-1]"
          style={{ opacity: 0.5, animationDelay: '3s' }}
        ></div>
        <div 
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-[#800020] blur-[120px] animate-breathe z-[-1]"
          style={{ opacity: 0.5, animationDelay: '5s' }}
        ></div>
      </div>
      <div className="max-w-md mx-auto px-6 py-12 space-y-8">
        <div className="p-10 rounded-3xl bg-background/50 border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-scale-in">
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
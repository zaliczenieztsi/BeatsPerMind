import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function FocusMode() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes breathe {
        0%, 100% { background-position: 10% 20%, 90% 80%; }
        50% { background-position: 15% 15%, 85% 85%; }
      }
    `
    document.head.appendChild(style)
    
    const root = document.getElementById('root')
    const originalBg = root.style.background
    const originalBackdrop = root.style.backdropFilter
    const originalShadow = root.style.boxShadow
    
    root.style.background = 'transparent'
    root.style.backdropFilter = 'none'
    root.style.boxShadow = 'none'
    document.body.style.background = '#e0f7fa'

    return () => {
      document.head.removeChild(style)
      root.style.background = originalBg
      root.style.backdropFilter = originalBackdrop
      root.style.boxShadow = originalShadow
      document.body.style.background = ''
    }
  }, [])

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `
          radial-gradient(500px circle at 15% 25%, #08999960 0%, transparent 70%),
          radial-gradient(500px circle at 85% 75%, #991b1b60 0%, transparent 70%)
        `,
        backgroundSize: '200% 200%',
        animation: 'breathe 8s ease-in-out infinite'
      }}
    >
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
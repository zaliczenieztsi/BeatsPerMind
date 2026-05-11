import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function FocusMode() {
  // Generate 15 random circles with varied parameters
  const circles = Array.from({ length: 15 }, (_, i) => {
    const isMaroon = i < 8
    const size = Math.floor(Math.random() * 48) + 32 // w-32 to w-80 (32-80)
    const top = Math.floor(Math.random() * 90) // 0-90%
    const left = Math.floor(Math.random() * 90) // 0-90%
    const delay = (Math.random() * 10).toFixed(1) // 0-10s
    const opacity = (Math.random() * 0.3 + 0.1).toFixed(2) // 0.1-0.4
    
    return {
      id: i,
      size,
      top,
      left,
      delay,
      opacity,
      colorClass: isMaroon ? 'bg-[#800020]' : 'bg-[#99f6e4]',
      blurClass: 'blur-[100px]'
    }
  })

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
        {circles.map(circle => (
          <div
            key={circle.id}
            className={`absolute rounded-full ${circle.colorClass} ${circle.blurClass} animate-breathe`}
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: `${circle.top}%`,
              left: `${circle.left}%`,
              opacity: circle.opacity,
              animationDelay: `${circle.delay}s`
            }}
          ></div>
        ))}
      </div>
      <div className="max-w-md mx-auto px-6 py-12 space-y-8" style={{ position: 'relative', zIndex: 10 }}>
        <div className="p-10 rounded-3xl animate-scale-in">
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
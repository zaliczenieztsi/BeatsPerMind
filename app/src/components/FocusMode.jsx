import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

// Generate 15 random circles once (stable across renders)
const circles = Array.from({ length: 15 }, (_, i) => {
  const isMaroon = i < 8
  
  // Define hardcoded grid zones with random values within ranges
  let baseTop, baseLeft
  
  if (i >= 0 && i < 3) { // Circles 1-3: top 0-20%, left 0-80%
    baseTop = Math.random() * 20
    baseLeft = Math.random() * 80
  } else if (i >= 3 && i < 7) { // Circles 4-7: top 30-60%, left 10-90%
    baseTop = 30 + Math.random() * 30
    baseLeft = 10 + Math.random() * 80
  } else if (i >= 7 && i < 11) { // Circles 8-11: top 70-100%, left 0-40%
    baseTop = 70 + Math.random() * 30
    baseLeft = Math.random() * 40
  } else { // Circles 12-15: top 70-100%, left 60-100%
    baseTop = 70 + Math.random() * 30
    baseLeft = 60 + Math.random() * 40
  }
  
  const size = Math.floor(Math.random() * 200) + 300 // 300-500px
  const delay = (Math.random() * 10).toFixed(1) // 0-10s
  const opacity = (Math.random() * 0.4 + 0.3).toFixed(2) // 0.3-0.7
  
  return {
    id: i,
    size,
    top: `${baseTop.toFixed(1)}%`,
    left: `${baseLeft.toFixed(1)}%`,
    delay,
    opacity,
    colorClass: isMaroon ? 'bg-[#800020]' : 'bg-[#99f6e4]',
    blurClass: 'blur-[120px]'
  }
})

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
        {circles.map(circle => (
          <div
            key={circle.id}
            className={`absolute rounded-full ${circle.colorClass} ${circle.blurClass} animate-breathe`}
            style={{
              width: `${circle.size}px`,
              height: `${circle.size}px`,
              top: circle.top,
              left: circle.left,
              transform: 'translate(-50%, -50%)',
              opacity: circle.opacity,
              animationDelay: `${circle.delay}s`
            }}
          ></div>
        ))}
      </div>
      <div className="max-w-md mx-auto px-6 py-12 space-y-8 relative z-10">
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
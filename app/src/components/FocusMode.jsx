import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

// Generate 15 random circles once (stable across renders)
const circles = Array.from({ length: 15 }, (_, i) => {
  const isMaroon = i < 8
  
  // 3 columns x 5 rows grid
  const col = i % 3 // 0, 1, 2
  const row = Math.floor(i / 3) // 0-4
  
  // Base position for the grid cell (center of each cell)
  const baseLeft = 16.67 + col * 33.33 // center of each column (0%, 33%, 66% -> centers at 16.67%, 50%, 83.33%)
  const baseTop = 10 + row * 20 // center of each row (0%, 20%, 40%, 60%, 80% -> centers at 10%, 30%, 50%, 70%, 90%)
  
  // Random offset within the cell (+/- 10%)
  const offsetX = (Math.random() - 0.5) * 20
  const offsetY = (Math.random() - 0.5) * 20
  
  const left = baseLeft + offsetX
  const top = baseTop + offsetY
  
  const size = Math.floor(Math.random() * 200) + 200 // 200-400px
  const delay = (Math.random() * 10).toFixed(1) // 0-10s
  const opacity = (Math.random() * 0.4 + 0.3).toFixed(2) // 0.3-0.7
  
  return {
    id: i,
    size,
    top: `${top.toFixed(1)}%`,
    left: `${left.toFixed(1)}%`,
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
              top: `${circle.top}%`,
              left: `${circle.left}%`,
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
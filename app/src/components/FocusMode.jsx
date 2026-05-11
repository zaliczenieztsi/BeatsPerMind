import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

// Generate 25 random circles once (stable across renders)
const circles = Array.from({ length: 25 }, (_, i) => {
  // Distribute colors: 13 maroon, 12 teal - interleave them
  const isMaroon = i % 2 === 0 || i > 22 // even indices + last if needed = 13 maroon
  
  // Define 4 zones covering entire screen
  let baseTop, baseLeft

  if (i < 6) {
    baseTop = Math.random() * 45 + 5
    baseLeft = Math.random() * 45 + 5
  } else if (i < 12) {
    baseTop = Math.random() * 45 + 5
    baseLeft = Math.random() * 45 + 50
  } else if (i < 18) {
    baseTop = Math.random() * 45 + 50
    baseLeft = Math.random() * 45 + 5
  } else {
    baseTop = Math.random() * 45 + 50
    baseLeft = Math.random() * 45 + 50
  }

  const size = Math.floor(Math.random() * 200) + 300
  const delay = (Math.random() * 8).toFixed(1)
  const opacity = (Math.random() * 0.5 + 0.4).toFixed(2) // 0.4-0.9 (more visible)
  
  return {
    id: i,
    size,
    top: `${baseTop.toFixed(1)}%`,
    left: `${baseLeft.toFixed(1)}%`,
    delay,
    opacity,
    colorClass: isMaroon ? 'bg-[#c4185e]' : 'bg-[#2dd4bf]',
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
<div className="bg-white/40 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl relative z-10 dark:focus-container space-y-8">
            <Timer />
            <AmbientPlayer />
          </div>
         <div className="text-center animate-fade-in-up stagger-2">
           <Link to="/">
             <Button variant="link" className="text-sm transition-all duration-300 hover:opacity-70 dark:text-[oklch(0.75_0.01_260)]">
               Powrót do strony głównej
             </Button>
           </Link>
         </div>
       </div>
     </div>
   )
}
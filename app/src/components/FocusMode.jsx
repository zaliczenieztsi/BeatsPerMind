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
    <div className="min-h-screen">
      <div 
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10"
        style={{ margin: 0, padding: 0 }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '4rem',
            left: '4rem',
            width: '16rem',
            height: '16rem',
            backgroundColor: '#99f6e4',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 2s ease-in-out infinite'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            top: '6rem',
            right: '6rem',
            width: '12rem',
            height: '12rem',
            backgroundColor: '#800020',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 2.5s ease-in-out infinite 0.5s'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            width: '20rem',
            height: '20rem',
            backgroundColor: '#99f6e4',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 3s ease-in-out infinite 1s'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            bottom: '6rem',
            right: '8rem',
            width: '14rem',
            height: '14rem',
            backgroundColor: '#800020',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 2.2s ease-in-out infinite 1.5s'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            bottom: '4rem',
            left: '6rem',
            width: '10rem',
            height: '10rem',
            backgroundColor: '#99f6e4',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 2.8s ease-in-out infinite 2s'
          }}
        ></div>
        <div 
          style={{
            position: 'absolute',
            top: '30%',
            right: '30%',
            width: '18rem',
            height: '18rem',
            backgroundColor: '#800020',
            borderRadius: '50%',
            filter: 'blur(20px)',
            opacity: 0.5,
            animation: 'pulse 3.2s ease-in-out infinite 0.8s'
          }}
        ></div>
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
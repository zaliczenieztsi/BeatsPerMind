import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function FocusMode() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes focusBreathe {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 0.9; }
      }
    `
    document.head.appendChild(style)
    
    document.body.classList.add('focus-mode')
    document.body.style.background = '#e0f7fa'

    const blobsContainer = document.createElement('div')
    blobsContainer.id = 'focus-bg-blobs'
    blobsContainer.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: -1;
      overflow: hidden;
      pointer-events: none;
    `
    blobsContainer.innerHTML = `
      <div style="position: absolute; top: 4rem; left: 4rem; width: 16rem; height: 16rem; background: #089999; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite;"></div>
      <div style="position: absolute; top: 8rem; right: 6rem; width: 280px; height: 280px; background: #991b1b; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite 1s;"></div>
      <div style="position: absolute; top: 12rem; right: 12rem; width: 20rem; height: 20rem; background: #0d9488; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite 2s;"></div>
      <div style="position: absolute; bottom: 8rem; right: 5rem; width: 350px; height: 350px; background: #991b1b; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite 0.5s;"></div>
      <div style="position: absolute; bottom: 4rem; left: 8rem; width: 16rem; height: 16rem; background: #089999; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite 1.5s;"></div>
      <div style="position: absolute; top: 50%; left: 33%; width: 400px; height: 400px; background: #0d9488; border-radius: 50%; filter: blur(100px); animation: focusBreathe 8s ease-in-out infinite 3s;"></div>
    `
    document.body.prepend(blobsContainer)

    return () => {
      document.head.removeChild(style)
      document.body.classList.remove('focus-mode')
      document.body.style.background = ''
      const container = document.getElementById('focus-bg-blobs')
      if (container) container.remove()
    }
  }, [])

  return (
    <div className="min-h-screen">
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
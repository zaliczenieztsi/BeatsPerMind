import Timer from './Timer'
import AmbientPlayer from './AmbientPlayer'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { useEffect } from 'react'

export default function FocusMode() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      #root {
        background: transparent !important;
        backdrop-filter: none !important;
        box-shadow: none !important;
      }
      body {
        background: linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 50%, #e0f7fa 100%) !important;
      }
      #focus-bg-blobs {
        position: fixed !important;
        inset: 0 !important;
        z-index: -1 !important;
        overflow: hidden !important;
        pointer-events: none !important;
      }
      #focus-bg-blobs > div {
        position: absolute !important;
        border-radius: 50% !important;
      }
      #focus-teal-blob {
        top: -200px !important;
        left: -200px !important;
        width: 600px !important;
        height: 600px !important;
        background: #089999 !important;
        filter: blur(100px) !important;
        animation: focusBreathe 8s ease-in-out infinite !important;
      }
      #focus-maroon-blob {
        bottom: -200px !important;
        right: -200px !important;
        width: 600px !important;
        height: 600px !important;
        background: #991b1b !important;
        filter: blur(100px) !important;
        animation: focusBreathe 8s ease-in-out infinite 2s !important;
      }
      @keyframes focusBreathe {
        0%, 100% { transform: scale(1); opacity: 0.6; }
        50% { transform: scale(1.15); opacity: 0.9; }
      }
    `
    document.head.appendChild(style)
    
    const blobsContainer = document.createElement('div')
    blobsContainer.id = 'focus-bg-blobs'
    blobsContainer.innerHTML = `
      <div id="focus-teal-blob"></div>
      <div id="focus-maroon-blob"></div>
    `
    document.body.appendChild(blobsContainer)

    return () => {
      document.head.removeChild(style)
      document.body.removeChild(blobsContainer)
      document.body.style.background = ''
      document.getElementById('root').style.background = ''
      document.getElementById('root').style.backdropFilter = ''
      document.getElementById('root').style.boxShadow = ''
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
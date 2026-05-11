import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { findBestPlaylist } from '../utils/playlistMatcher'
import playlistsData from '../data/playlists.json'
import LearnMore from './LearnMore'

function calculateMatchScore(playlist, userAnswers) {
  let score = 0
  if (playlist.tags.activity?.includes(userAnswers.activity)) score += 2
  if (playlist.tags.energy?.includes(userAnswers.energy)) score += 1.5
  if (playlist.tags.lyrics?.includes(userAnswers.lyrics)) score += 1
  return score
}

function isHighEnergy(playlist) {
  return playlist.tags?.energy?.includes('high')
}

export default function PlaylistView() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [bestPlaylist, setBestPlaylist] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    try {
      const savedAnswers = localStorage.getItem('quizAnswers')
      if (!savedAnswers) {
        navigate('/quiz')
        return
      }
      const answers = JSON.parse(savedAnswers)
      const matched = findBestPlaylist(playlistsData.playlists, answers)
      setBestPlaylist(matched)
      setLoading(false)
    } catch (e) {
      console.error('Error:', e)
      setError(e.message)
      setLoading(false)
    }
  }, [navigate])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Ładowanie...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <p className="text-red-500">Błąd: {error}</p>
        <Button onClick={() => navigate('/quiz')} className="mt-4">
          Wróć do quizu
        </Button>
      </div>
    )
  }

  if (!bestPlaylist) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <p className="text-muted-foreground">Nie znaleziono playlisty</p>
        <Button onClick={() => navigate('/quiz')} className="mt-4">
          Wróć do quizu
        </Button>
      </div>
    )
  }

const embedUrl = `https://www.youtube.com/embed/videoseries?list=${bestPlaylist.youtubePlaylistId}`
  
  const isEnergetic = isHighEnergy(bestPlaylist)
  
  const gradientStyles = isEnergetic 
    ? 'radial-gradient(ellipse at center, oklch(0.25 0.08 210) 0%, oklch(0.15 0.05 240) 40%, oklch(0.1 0.03 260) 70%, oklch(0.05 0.02 270) 100%)'
    : 'radial-gradient(ellipse at center, oklch(0.2 0.1 0) 0%, oklch(0.15 0.05 0) 35%, oklch(0.12 0.02 260) 60%, oklch(0.08 0.01 260) 100%)'

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: gradientStyles }}
      />
      <div className="absolute inset-0 -z-10 bg-slate-950/20" />
      
      <div className="relative max-w-2xl mx-auto px-6 py-12 space-y-8">
        <div className="relative mb-8">
          <div 
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[300px] h-[200px] blur-[120px] opacity-20 rounded-full animate-pulse"
            style={{ backgroundColor: isEnergetic ? 'oklch(0.55 0.15 150)' : 'oklch(0.4 0.2 0)' }}
          />
          
          <div className="relative p-8 rounded-3xl backdrop-blur-2xl bg-white/5 dark:bg-white/5 border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),0_0_50px_rgba(85,100,120,0.2)]">
            <h1 className="text-2xl font-light mb-2 dark:text-[oklch(0.95_0.01_260)]">{bestPlaylist.name}</h1>
            <p className="text-sm text-muted-foreground mb-2 dark:text-[oklch(0.65_0.01_260)]">
              BPM: {bestPlaylist.bpm}
            </p>
            <p className="text-xs uppercase tracking-widest text-[oklch(0.55_0.05_160)] mt-3 dark:text-[oklch(0.5_0.15_150)]">
              Dopasowanie: {Math.round((calculateMatchScore(bestPlaylist, JSON.parse(localStorage.getItem('quizAnswers') || '{}')) / 4.5) * 100)}%
            </p>
          </div>
        </div>

        <div className="video-wrapper aspect-video mb-8 rounded-3xl overflow-hidden bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
          {!isPlaying && (
            <div
              className="play-cover absolute inset-0 flex items-center justify-center cursor-pointer rounded-3xl bg-black/40 backdrop-blur-sm transition-all duration-300 hover:bg-black/30"
              onClick={() => setIsPlaying(true)}
            >
              <div className="play-button w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          <iframe
            className={`w-full h-full transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
            src={isPlaying ? `${embedUrl}&autoplay=1` : ''}
            title={bestPlaylist.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex gap-4">
          <Button asChild variant="outline" className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white/10 dark:bg-white/10 border-white/20 text-emerald-100 hover:bg-white/20 hover:text-emerald-200">
            <a
              href={bestPlaylist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Otwórz w Spotify
            </a>
          </Button>
          <Button
            onClick={() => navigate('/focus')}
            className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] bg-white/15 dark:bg-white/10 border border-white/20 text-emerald-100 hover:bg-white/25 hover:text-emerald-200"
          >
            Tryb Focus
          </Button>
        </div>
        <LearnMore bpmRange={bestPlaylist.bpm} />
      </div>
    </div>
  )
}
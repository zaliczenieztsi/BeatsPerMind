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

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <div className="p-8 rounded-3xl bg-background/40 backdrop-blur-sm border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] mb-8 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_0_40px_rgba(20,184,166,0.12)] dark:backdrop-blur-xl">
         <h1 className="text-2xl font-light mb-2 dark:text-[oklch(0.95_0.01_260)]">{bestPlaylist.name}</h1>
         <p className="text-sm text-muted-foreground mb-2 dark:text-[oklch(0.65_0.01_260)]">
           BPM: {bestPlaylist.bpm}
         </p>
        <p className="text-xs uppercase tracking-widest text-[oklch(0.55_0.05_160)] mt-3 dark:text-[oklch(0.5_0.15_150)]">
           Dopasowanie: {Math.round((calculateMatchScore(bestPlaylist, JSON.parse(localStorage.getItem('quizAnswers') || '{}')) / 4.5) * 100)}%
        </p>
       </div>

        <div className="video-wrapper aspect-video mb-8 rounded-3xl overflow-hidden bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] dark:bg-[oklch(0.08_0.01_260)] dark:shadow-[0_12px_40px:-5px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05%)]">
          {!isPlaying && (
            <div
              className="play-cover absolute inset-0 flex items-center justify-center cursor-pointer rounded-3xl bg-black/40 backdrop-blur-sm transition-all duration-300 dark:bg-[oklch(0_0_0/0.6)] dark:backdrop-blur-md hover:dark:bg-[oklch(0_0_0/0.5)]"
              onClick={() => setIsPlaying(true)}
            >
              <div className="play-button w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] dark:bg-[oklch(0.55_0.15_150/0.25)] dark:backdrop-blur-sm dark:hover:bg-[oklch(0.55_0.15_150/0.35)] dark:hover:shadow-[0_0_40px_oklch(0.55_0.15_150/0.4)] dark:border dark:border-[oklch(0.55_0.15_150/0.5)]">
                <svg className="w-8 h-8 text-white dark:text-[oklch(0.98_0.01_260)]" viewBox="0 0 24 24" fill="currentColor">
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
         <Button asChild variant="outline" className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
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
           className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_rgba(129,178,154,0.3)]"
         >
           Tryb Focus
         </Button>
       </div>
        <LearnMore bpmRange={bestPlaylist.bpm} />
    </div>
  )
}
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
      <div className="p-8 rounded-3xl bg-[oklch(0.12_0.008_260/0.6)] backdrop-blur-xl border border-[oklch(1_0_0/10%)] shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5),0_0_0_1px_oklch(1_0_0/6%)] mb-8 card-depth-2">
         <h1 className="text-2xl font-light text-[oklch(0.95_0.01_260)] mb-2">{bestPlaylist.name}</h1>
         <p className="text-sm text-[oklch(0.65_0.01_260)] mb-2">
           BPM: {bestPlaylist.bpm}
         </p>
        <p className="text-xs uppercase tracking-widest text-[oklch(0.5_0.15_150)] mt-3">
           Dopasowanie: {Math.round((calculateMatchScore(bestPlaylist, JSON.parse(localStorage.getItem('quizAnswers') || '{}')) / 4.5) * 100)}%
        </p>
       </div>

        <div className="video-wrapper aspect-video mb-8 rounded-3xl overflow-hidden bg-[oklch(0.08_0.01_260)] shadow-[0_12px_40px_-5px_rgba(0,0,0,0.6),0_0_0_1px_oklch(1_0_0/5%)]">
          {!isPlaying && (
            <div
              className="play-cover absolute inset-0 flex items-center justify-center cursor-pointer rounded-3xl bg-[oklch(0_0_0/0.6)] backdrop-blur-md transition-all duration-300 hover:bg-[oklch(0_0_0/0.5)]"
              onClick={() => setIsPlaying(true)}
            >
              <div className="play-button w-16 h-16 flex items-center justify-center rounded-full bg-[oklch(0.55_0.15_150/0.25)] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[oklch(0.55_0.15_150/0.35)] hover:shadow-[0_0_40px_oklch(0.55_0.15_150/0.4)] border border-[oklch(0.55_0.15_150/0.5)]">
                <svg className="w-8 h-8 text-[oklch(0.98_0.01_260)]" viewBox="0 0 24 24" fill="currentColor">
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
         <Button asChild variant="outline" className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-[oklch(1_0_0/12%)] bg-[oklch(0.15_0.005_260/0.5)] hover:bg-[oklch(0.18_0.008_260/0.7)] text-[oklch(0.9_0.01_260)]">
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
           className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_oklch(0.55_0.15_150/0.4)] bg-[oklch(0.55_0.15_150)] text-[oklch(0.08_0.01_260)] hover:bg-[oklch(0.58_0.15_150)]"
         >
           Tryb Focus
         </Button>
       </div>
        <LearnMore bpmRange={bestPlaylist.bpm} />
    </div>
  )
}
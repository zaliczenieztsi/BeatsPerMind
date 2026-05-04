import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { findBestPlaylist } from '../utils/playlistMatcher'
import playlistsData from '../data/playlists.json'
import LearnMore from './LearnMore'

export default function PlaylistView() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [bestPlaylist, setBestPlaylist] = useState(null)

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
      <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] mb-8">
        <h1 className="text-2xl font-light mb-2">{bestPlaylist.name}</h1>
        <p className="text-sm text-muted-foreground mb-2">
          BPM: {bestPlaylist.bpm}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {bestPlaylist.tags && Object.values(bestPlaylist.tags).flat().map((tag, i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="aspect-video mb-8 rounded-3xl overflow-hidden bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={bestPlaylist.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="flex gap-4">
        <Button asChild variant="outline" className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
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
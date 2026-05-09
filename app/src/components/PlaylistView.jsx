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
      <div className="p-8 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/50 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] mb-8">
         <h1 className="text-2xl font-light mb-2">{bestPlaylist.name}</h1>
         <p className="text-sm text-muted-foreground mb-2">
           BPM: {bestPlaylist.bpm}
         </p>
       </div>

       <div className="video-wrapper aspect-video mb-8 rounded-3xl overflow-hidden bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
         {!isPlaying && (
           <div
             className="play-cover absolute inset-0 flex items-center justify-center cursor-pointer rounded-3xl bg-black/40 backdrop-blur-sm transition-all duration-300"
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
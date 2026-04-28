import { useState, useCallback, useEffect, useRef } from 'react'
import { ambientSounds } from '../data/ambientSounds'

export function useAudio() {
  const audioRef = useRef(null)
  const [currentSound, setCurrentSound] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  const playSound = useCallback((soundId) => {
    const sound = ambientSounds.find(s => s.id === soundId)
    if (!sound) return

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    const audio = new Audio(sound.src)
    audio.loop = true
    audio.volume = volume

    audio.play().catch(err => {
      console.error('Audio playback failed:', err)
    })

    audioRef.current = audio
    setCurrentSound(sound)
    setIsPlaying(true)
  }, [volume])

  const stopSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setCurrentSound(null)
    setIsPlaying(false)
  }, [])

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(err => {
        console.error('Audio playback failed:', err)
      })
      setIsPlaying(true)
    }
  }, [isPlaying])

  // Sync volume state with audio element
  useEffect(() => {
    if (audioRef.current) {
      setVolume(audioRef.current.volume)
    }
  }, [])

  const setVolumeLevel = useCallback((newVolume) => {
    // Validate the volume value
    const volumeValue = Math.max(0, Math.min(1, Number(newVolume) || 0))
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
    }
  }, [])

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return {
    currentSound,
    isPlaying,
    volume,
    playSound,
    stopSound,
    togglePlay,
    setVolume: setVolumeLevel
  }
}
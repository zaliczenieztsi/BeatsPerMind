export function calculateMatchScore(playlist, userAnswers) {
  let score = 0

  if (playlist.tags.activity.includes(userAnswers.activity)) {
    score += 2
  }

  if (playlist.tags.energy.includes(userAnswers.energy)) {
    score += 1.5
  }

  if (playlist.tags.lyrics.includes(userAnswers.lyrics)) {
    score += 1
  }

  return score
}

export function findBestPlaylist(playlists, userAnswers) {
  let bestMatch = null
  let highestScore = 0

  playlists.forEach(playlist => {
    const score = calculateMatchScore(playlist, userAnswers)
    if (score > highestScore) {
      highestScore = score
      bestMatch = playlist
    }
  })

  return bestMatch || playlists[0]
}

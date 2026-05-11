# SPEC.md - Specyfikacja Techniczna BeatsPerMind MVP

## 1. Struktura Projektu

```
beats-per-mind/
├── public/
│   └── sounds/           # Pliki MP3 ambient sounds
│       ├── rain.mp3
│       ├── white-noise.mp3
│       ├── cafe.mp3
│       └── forest.mp3
├── src/
│   ├── components/
│   │   ├── Landing.jsx       # Strona powitalna
│   │   ├── Quiz.jsx          # 3 pytania (activity, energy, lyrics)
│   │   ├── PlaylistView.jsx  # Wyświetlanie playlisty + YouTube embed
│   │   ├── FocusMode.jsx     # Timer Pomodoro + ambient sounds
│   │   ├── Navigation.jsx   # Bottom nav / header
│   │   ├── AmbientPlayer.jsx # Odtwarzacz ambient sounds
│   │   └── Timer.jsx         # Komponent timera
│   ├── data/
│   │   ├── playlists.json    # 8 playlist z tagami
│   │   └── ambientSounds.js  # Konfiguracja dźwięków
│   ├── hooks/
│   │   ├── useQuiz.js        # Logika quizu
│   │   ├── useTimer.js       # Logika timera Pomodoro
│   │   └── useAudio.js       # Odtwarzanie ambient sounds
│   ├── utils/
│   │   └── playlistMatcher.js # Algorytm dopasowania
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 2. Struktura Danych - playlists.json

```json
{
  "playlists": [
    {
      "id": "lofi-focus",
      "name": "Lo-Fi Focus",
      "bpm": "70-85",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["nauka", "praca"],
        "energy": ["low", "medium"],
        "lyrics": ["no-lyrics"]
      }
    },
    {
      "id": "upbeat-instrumental",
      "name": "Upbeat Instrumental",
      "bpm": "100-120",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["nauka", "praca"],
        "energy": ["high"],
        "lyrics": ["no-lyrics"]
      }
    },
    {
      "id": "classical-study",
      "name": "Classical Study",
      "bpm": "80-100",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["nauka"],
        "energy": ["low", "medium"],
        "lyrics": ["no-lyrics"]
      }
    },
    {
      "id": "workout-hype",
      "name": "Workout Hype",
      "bpm": "140-160",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["trening"],
        "energy": ["high"],
        "lyrics": ["lyrics", "no-lyrics"]
      }
    },
    {
      "id": "running-warmup",
      "name": "Running Warm-up",
      "bpm": "100-120",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["trening"],
        "energy": ["medium"],
        "lyrics": ["no-lyrics"]
      }
    },
    {
      "id": "coffee-shop",
      "name": "Coffee Shop Vibes",
      "bpm": "70-90",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["praca"],
        "energy": ["low", "medium"],
        "lyrics": ["lyrics", "no-lyrics"]
      }
    },
    {
      "id": "chill-relax",
      "name": "Chill & Relax",
      "bpm": "60-80",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["relaks"],
        "energy": ["low"],
        "lyrics": ["no-lyrics"]
      }
    },
    {
      "id": "weekend-vibes",
      "name": "Weekend Vibes",
      "bpm": "90-110",
      "youtubePlaylistId": "PL_LIST_ID",
      "spotifyUrl": "https://spotify.link/...",
      "tags": {
        "activity": ["relaks"],
        "energy": ["medium", "high"],
        "lyrics": ["lyrics"]
      }
    }
  ]
}
```

## 3. Algorytm Dopasowania Playlisty

```javascript
// playlistMatcher.js

// Funkcja obliczająca dopasowanie playlisty do odpowiedzi quizu
function calculateMatchScore(playlist, userAnswers) {
  let score = 0;
  
  // Sprawdź dopasowanie aktywności (najważniejsze - waga 2)
  if (playlist.tags.activity.includes(userAnswers.activity)) {
    score += 2;
  }
  
  // Sprawdź dopasowanie poziomu energii (waga 1.5)
  if (playlist.tags.energy.includes(userAnswers.energy)) {
    score += 1.5;
  }
  
  // Sprawdź preferencję tekstu (waga 1)
  if (playlist.tags.lyrics.includes(userAnswers.lyrics)) {
    score += 1;
  }
  
  return score;
}

// Wybierz najlepszą playlistę
function findBestPlaylist(playlists, userAnswers) {
  let bestMatch = null;
  let highestScore = 0;
  
  playlists.forEach(playlist => {
    const score = calculateMatchScore(playlist, userAnswers);
    if (score > highestScore) {
      highestScore = score;
      bestMatch = playlist;
    }
  });
  
  // Fallback: jeśli brak dopasowania, zwróć pierwszą playlistę
  return bestMatch || playlists[0];
}
```

**Logika:**
- Każda playlista ma tagi: activity, energy, lyrics
- Użytkownik wybiera 3 wartości w quizie
- Algorytm sumuje dopasowania (aktywność=2pkt, energia=1.5pkt, tekst=1pkt)
- Wygrywa playlista z najwyższym wynikiem

## 4. Konfiguracja Ambient Sounds

```javascript
// ambientSounds.js

export const ambientSounds = [
  {
    id: 'rain',
    name: 'Deszcz',
    icon: '🌧️',
    src: '/sounds/rain.mp3',
    color: '#3B82F6'
  },
  {
    id: 'white-noise',
    name: 'Biały szum',
    icon: '📻',
    src: '/sounds/white-noise.mp3',
    color: '#8B5CF6'
  },
  {
    id: 'cafe',
    name: 'Kawiarnia',
    icon: '☕',
    src: '/sounds/cafe.mp3',
    color: '#F59E0B'
  },
  {
    id: 'forest',
    name: 'Las',
    icon: '🌲',
    src: '/sounds/forest.mp3',
    color: '#10B981'
  }
];

export const defaultTimerSettings = {
  workDuration: 25 * 60,    // 25 minut w sekundach
  breakDuration: 5 * 60,    // 5 minut w sekundach
  longBreakDuration: 15 * 60
};
```

## 5. Flow Aplikacji

```
Landing → Quiz → PlaylistView → (opcjonalnie) Focus Mode
```

**Ścieżki:**
1. Landing → Quiz → PlaylistView → (opcjonalnie) Focus Mode
2. PlaylistView → Focus Mode (przycisk w interfejsie)
3. Focus Mode → PlaylistView (wyjście z focus mode)

## 6. Odpowiedzi Quizu

```javascript
// Struktura odpowiedzi użytkownika
const userAnswers = {
  activity: 'nauka',      // nauka | trening | praca | relaks
  energy: 'medium',       // low | medium | high
  lyrics: 'no-lyrics'    // lyrics | no-lyrics
};
```

## 7. Tech Stack

| Warstwa | Technologia |
|---------|-------------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| Stan | useState + Context |
| Audio | HTML5 Audio + YouTube IFrame API |
| Dane | Static JSON + LocalStorage |
| Hosting | Vercel (free tier) |

## 8. Uwagi

- BPM jest statyczny (hardcoded) - tylko informacja dla użytkownika
- Timer działa tylko w foreground (aplikacja aktywna)
- Spotify linki są statyczne - klikalny przycisk bez API
- YouTube embed - całe playlisty, nie pojedyncze utwory
- Aplikacja nie używa prawdziwego AI - proste reguły dopasowania (tagi + scoring)

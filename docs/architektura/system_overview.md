# BeatsPerMind - System Overview

## 1. Wprowadzenie

BeatsPerMind to aplikacja webowa typu Single Page Application (SPA) przeznaczona dla studentów, łącząca dwa kluczowe use case w jednym miejscu:

1. **Generator Playlist** - dopasowuje muzykę do aktywności, energii i preferencji
2. **Focus Mode** - timer Pomodoro z dźwiękami ambient

## 2. Architektura Systemu

### 2.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER BROWSER                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                   React SPA (Vite)                   │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  │   │
│  │  │   Landing   │→│    Quiz     │→│PlaylistView │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  │   │
│  │                          ↓                            │   │
│  │                  ┌─────────────┐                     │   │
│  │                  │ FocusMode   │                     │   │
│  │                  └─────────────┘                     │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     DATA LAYER                               │
│  ┌──────────────────────┐  ┌───────────────────────────┐    │
│  │  playlists.json      │  │  localStorage             │    │
│  │  (static data)       │  │  (quiz answers, settings) │    │
│  └──────────────────────┘  └───────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                          │
│  ┌───────────────────────────────────────────────────────┐  │
│  │              YouTube Embed (iframe)                  │  │
│  │  - Full playlist playback                            │  │
│  │  - No API key required                               │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Komponenty Systemu

#### Frontend Components (React)

| Komponent | Opis | Dependencies |
|-----------|------|--------------|
| `Landing.jsx` | Strona powitalna, wejście do quizu | React Router |
| `Quiz.jsx` | Formularz 3 pytań o aktywność/energię | useQuiz hook |
| `PlaylistView.jsx` | Wyświetla dopasowaną playlistę | useQuiz, playlistMatcher |
| `FocusMode.jsx` | Timer Pomodoro + AmbientPlayer | useTimer, useAudio |
| `AmbientPlayer.jsx` | Wybór i odtwarzanie dźwięków | useAudio hook |
| `LearnMore.jsx` | Sekcja edukacyjna z feature cards | - |
| `Navigation.jsx` | Nawigacja między stronami | React Router |

#### Custom Hooks

| Hook | Opis |
|------|------|
| `useQuiz.js` | Zarządza stanem quizu (3 kroki, odpowiedzi) |
| `useTimer.js` | Logika Pomodoro: 25min work / 5min break |
| `useAudio.js` | Odtwarzanie ambient sounds z kontrolą głośności |

#### Utils

| Moduł | Opis |
|-------|------|
| `playlistMatcher.js` | Algorytm dopasowania playlist (activity=2, energy=1.5, lyrics=1) |
| `ambientSounds.js` | Konfiguracja 4 dźwięków (rain, white-noise, cafe, forest) |

### 2.3 Data Flow

```
User Journey:
Landing → Quiz (3 pytania) → PlaylistView → [Learn More] or [Focus Mode]

Data Flow:
1. User selects answers in Quiz
2. useQuiz stores answers in useState
3. playlistMatcher calculates best match from playlists.json
4. PlaylistView displays playlist + YouTube embed + Spotify link
5. Optionally navigate to FocusMode for timer + ambient sounds
```

## 3. Non-Functional Requirements

| Kategoria | Wymaganie |
|-----------|-----------|
| Performance | Time to first value: < 2 minuty |
| Availability | Frontend only - hostowane na Vercel |
| Scalability | Static hosting - skalowalne do 10k+ miesięcznie |
| Security | Brak wrażliwych danych, tylko statyczne JSON |
| Maintenance | < 1h/miesiąc - zero backendu |

## 4. Constraints

- **Budżet:** 0€ - tylko darmowe tier-y
- **Czas:** 15h limit - proste rozwiązania
- **Doświadczenie:** Początkujący - unikać complex stacków
- **Dane:** Tylko statyczne JSON + localStorage
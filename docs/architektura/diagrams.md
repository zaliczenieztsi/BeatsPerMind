# BeatsPerMind - Diagrams

## 1. C4 Model - Context Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            BeatsPerMind System                                 │
│                                                                              │
│  ┌──────────────┐              ┌──────────────┐                              │
│  │   Student    │──uses───────▶│   Browser    │                              │
│  │ (18-25 lat)  │              │ (Chrome/Edge)│                              │
│  └──────────────┘              └──────────────┘                              │
│                                       │                                     │
│                                       ▼                                     │
│                          ┌────────────────────────┐                          │
│                          │   beats-per-mind.vercel.app    │                          │
│                          │   (React SPA)          │                          │
│                          └────────────────────────┘                          │
│                                       │                                     │
│                  ┌──────────────────────┼──────────────────────┐             │
│                  │                      │                      │             │
│                  ▼                      ▼                      ▼             │
│         ┌────────────────┐   ┌────────────────┐   ┌────────────────┐       │
│         │ playlists.json │   │ YouTube Embed  │   │ ambient/*.mp3│       │
│         │ (static data)  │   │ (iframe)       │   │ (public/sounds)│       │
│         └────────────────┘   └────────────────┘   └────────────────┘       │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2. C4 Model - Container Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    Student's Browser (Context)                            │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    beats-per-mind.vercel.app                         │   │
│  │                         [React SPA - Vite]                          │   │
│  │                                                                     │   │
│  │  ┌─────────────────────────────────────────────────────────────┐   │   │
│  │  │  UI Layer (React Components)                                │   │   │
│  │  │  ├──────────────────────────────────────────────────────┤   │   │   │
│  │  │  │ Landing.jsx                                           │   │   │   │
│  │  │  │ Quiz.jsx                                              │   │   │   │
│  │  │  │ PlaylistView.jsx                                      │   │   │   │
│  │  │  │ FocusMode.jsx                                         │   │   │   │
│  │  │  │ AmbientPlayer.jsx                                     │   │   │   │
│  │  │  │ LearnMore.jsx                                         │   │   │   │
│  │  │  └──────────────────────────────────────────────────────┘   │   │   │
│  │  │                                                             │   │   │
│  │  │  ┌──────────────────────────────────────────────────────┐   │   │   │
│  │  │  │ State Management                                      │   │   │   │
│  │  │  │ ├──────────────────────────────────────────────────┤   │   │   │
│  │  │  │ │ useQuiz.js (useState for quiz answers)           │   │   │   │
│  │  │  │ │ useTimer.js (Pomodoro state)                     │   │   │   │
│  │  │  │ │ useAudio.js (ambient sound state)                │   │   │   │
│  │  │  │ └──────────────────────────────────────────────────┘   │   │   │
│  │  │  └──────────────────────────────────────────────────────┘   │   │
│  │  │                                                             │   │
│  │  │  ┌──────────────────────────────────────────────────────┐   │   │
│  │  │  │ Routing (React Router)                              │   │   │
│  │  │  └──────────────────────────────────────────────────────┘   │   │
│  │  └─────────────────────────────────────────────────────────────┘   │
│  └─────────────────────────────────────────────────────────────────────┘
```

## 3. Data Flow Diagram

```
Quiz Flow:
┌─────────┐     ┌─────────┐     ┌──────────────┐     ┌────────────────┐
│ Landing │────▶│  Quiz   │────▶│playlistMatcher│────▶│ PlaylistView   │
└─────────┘     └─────────┘     └──────────────┘     └────────────────┘
     │               │                   │                   │
     │          useState (answers)         │                   │
     │               │                   │              YouTube Embed
     │               │              playlists.json               (iframe)
     │               │                   │
     └───────────────┴───────────────────┴────────────▶ localStorage

Focus Mode Flow:
┌──────────────┐     ┌──────────────┐     ┌────────────────────┐
│ PlaylistView │────▶│ Focus Mode   │────▶│ AmbientPlayer      │
└──────────────┘     └──────────────┘     └────────────────────┘
                           │                        │
                    useTimer.js              useAudio.js
                           │                        │
                    25min work / 5min break   4x ambient sounds
                           │                        │
                    ┌──────┴──────┐        ┌────────┴────────┐
                    │ Timer.jsx   │        │ index.css       │
                    └─────────────┘        │ (audio styles)  │
                                            └─────────────────┘
```

## 4. Component Diagram (UML-style)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              React Components                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌────────────┐       ┌────────────┐       ┌─────────────────────────────┐  │
│  │  Landing   │──────▶│   Quiz     │──────▶│        PlaylistView         │  │
│  │            │       │            │       │                             │  │
│  │ - StartBtn │       │ - Q1       │       │ - YouTube Embed             │  │
│  │ - LearnMore│       │ - Q2       │       │ - Spotify Link              │  │
│  └────────────┘       │ - Q3       │       │ - Play Cover                │  │
│                       │ - Submit   │       │ - LearnMore                 │  │
│                       └────────────┘       │ - FocusModeBtn              │  │
│                               │            └─────────────────────────────┘  │
│                               ▼                         │                   │
│                      ┌────────────────┐                 ▼                   │
│                      │   useQuiz      │       ┌─────────────────┐          │
│                      │                │       │ LearnMore       │          │
│                      └────────────────┘       │                 │          │
│                               │                │ - FeatureCards  │          │
│                               ▼                └─────────────────┘          │
│                      ┌────────────────┐                 │                   │
│                      │playlistMatcher  │                 ▼                   │
│                      │                │       ┌─────────────────┐          │
│                      └────────────────┘       │ FocusMode       │          │
│                               │                │                 │          │
│                               ▼                │ - Timer         │          │
│                      ┌────────────────┐       │ - AmbientPlayer │          │
│                      │playlists.json   │       └─────────────────┘          │
│                      └────────────────┘                 │                   │
│                                            ┌──────────────┴──────────────┐  │
│                                            │  useTimer    │  useAudio      │  │
│                                            │              │               │  │
│                                            └──────────────┴──────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 5. State Management Diagram

```
useState hooks structure:

Quiz State (useQuiz.js):
┌─────────────────────────────────────────────────────────────┐
│ const [currentStep, setCurrentStep] = useState(0)          │
│ const [answers, setAnswers] = useState({                   │
│   activity: null,                                          │
│   energy: null,                                            │
│   lyrics: null                                             │
│ })                                                         │
│ const [bestPlaylist, setBestPlaylist] = useState(null)     │
└─────────────────────────────────────────────────────────────┘

Timer State (useTimer.js):
┌─────────────────────────────────────────────────────────────┐
│ const [mode, setMode] = useState('work')                   │
│ const [timeLeft, setTimeLeft] = useState(25 * 60)          │
│ const [isRunning, setIsRunning] = useState(false)          │
│ const [pomodoroCount, setPomodoroCount] = useState(0)      │
└─────────────────────────────────────────────────────────────┘

Audio State (useAudio.js):
┌─────────────────────────────────────────────────────────────┐
│ const [currentSound, setCurrentSound] = useState(null)     │
│ const [volume, setVolume] = useState(0.5)                  │
│ const [isPlaying, setIsPlaying] = useState(false)          │
└─────────────────────────────────────────────────────────────┘
```
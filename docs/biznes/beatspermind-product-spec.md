# BeatsPerMind - Specyfikacja Produktu

## 1. Elevator Pitch

**BeatsPerMind** to aplikacja rekomendująca playlisty na podstawie BPM (beats per minute) i preferencji użytkownika. 

Kwestionariusz (aktywność + poziom energii + typ muzyki) → dopasowana playlista z wyświetlonym BPM → link do Spotify + YouTube embed.

**Focus Mode** to pełnoekranowy tryb z animacjami, Pomodoro Timer i dźwięki tła (white noise, deszcz, kawiarnia) - wszystko dla maksymalnego "vibe" podczas skupienia.

**Grupa docelowa:** Studenci i osoby uczące się (18-30 lat)

---

## 2. User Journey Map

```
┌─────────────────────────────────────────────────────────────────┐
│                        BEATSPERMIND                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   ONBOARDING    │
                    │   (Kwestionariusz)│
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        ▼                    ▼                    ▼
   ┌─────────┐         ┌─────────┐         ┌─────────┐
   │  NAUKA  │         │ TRENING │         │ RELAKS  │
   └────┬────┘         └────┬────┘         └────┬────┘
        │                   │                   │
        ▼                   ▼                   ▼
   ┌─────────────────────────────────────────────┐
   │              DASHBOARD                      │
   │  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
   │  │Playlists│  │ Timer   │  │ Settings│    │
   │  └─────────┘  └─────────┘  └─────────┘    │
   └─────────────────────────────────────────────┘
        │                   │
        ▼                   ▼
   ┌──────────┐       ┌──────────┐
   │PLAYER    │       │FOCUS MODE│
   │(YouTube) │       │(Minimal) │
   └──────────┘       └──────────┘
```

---

## 3. Funkcjonalności MVP (15h)

### 🔴 Must Have (Core):

| Funkcja | Opis | Czas |
|---------|------|------|
| **Kwestionariusz startowy** | 3 pytania: Aktywność, Poziom energii (slider), Typ muzyki (z tekstem/instrumental) | 2h |
| **Playlisty z BPM** | 8-10 playlist z wyświetlonym BPM (np. "120 BPM - Lo-Fi Focus") | 2h |
| **Odtwarzacz Dual** | YouTube embed + przycisk "Otwórz w Spotify" | 2h |
| **Timer Pomodoro** | Ustawialny czas (domyślnie 25/5), start/stop/reset | 2h |
| **Focus Mode z animacją** | Fullscreen z dynamiczną animacją (canvas/css), dźwięki tła | 3h |
| **Focus Sounds** | White noise, deszcz, kawiarnia (toggle lub miks) | 2h |
| **Dashboard** | Nawigacja między sekcjami + BPM display | 1h |
| **Styling** | Tailwind + Shadcn + animacje | 3h |

### 🟡 Nice to Have (jeśli zostanie czas):
- Save ulubione playlisty (localStorage)
- Statystyki sesji (ile czasu używała)
- Dark/Light mode toggle
- Więcej dźwięków tła (ogon, wiatr)

---

## 4. UI/UX Design Direction

### Layout:

```
┌─────────────────────────────────────────────────────────┐
│  BeatsPerMind                          [Focus Mode] ⚡ │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   ┌─────────────────────────────────────────────────┐  │
│   │           🎵 Twoja playlista do nauki          │  │
│   │                                                 │  │
│   │    ┌─────────────────────────────────────┐     │  │
│   │    │    ▶  Lo-Fi Beats - Focus Mix       │     │  │
│   │    │       YouTube Embed                  │     │  │
│   │    └─────────────────────────────────────┘     │  │
│   │                                                 │  │
│   │    [▶ Play]  [⏭ Next]  [🔊 Vol]               │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
│   ┌─────────────────────────────────────────────────┐  │
│   │  Timer Pomodoro          [ 25:00 ]             │  │
│   │                                                 │  │
│   │        [🟢 START]     [⏹ RESET]              │  │
│   │                                                 │  │
│   └─────────────────────────────────────────────────┘  │
│                                                         │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│   │  Nauka  │ │Trening  │ │ Relaks  │ │  Ustaw. │     │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Focus Mode (pełnoekranowy z animacją):

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│      ┌─────────────────────────────────────────┐       │
│      │                                         │       │
│      │    [Dynamiczna animacja tła]            │       │
│      │    - Pulsujące koła (tryb focus)        │       │
│      │    - Deszcz (tryb rain)                │       │
│      │    - Fale (tryb relax)                 │       │
│      │                                         │       │
│      ╭─────────────────────────────────────────╮       │
│      │           ⏱️ 25:00                       │       │
│      │        (customizable: 15-60 min)        │       │
│      ╰─────────────────────────────────────────╯       │
│                                                         │
│      🎵 Focus Sounds: [🔊 White] [🌧️ Rain] [☕ Cafe]   │
│                                                         │
│         [  ▶ Start Session  ]    [  ✕ Exit  ]         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Kluczowe elementy Focus Mode:**
- Animacja w tle (Canvas lub CSS - zmienia się w zależności od trybu)
- Circular progress timer z możliwością ustawienia czasu (15/25/45/60 min)
- Dźwięki tła: White noise, Deszcz, Kawiarnia (toggle + volume)
- Minimal UI z "vibe" - to ma być przyjemne do używania

### Paleta kolorów:
- **Primary:** Deep Purple (#6B21A8) 
- **Secondary:** Soft Black (#18181B)
- **Accent:** Electric Blue (#3B82F6)
- **Background:** Dark gradient (zebrač z #0F0F0F do #1A1A2E)
- **Text:** White (#FFFFFF) + Gray (#A1A1AA)

### Typografia:
- **Headings:** Sans-serif bold (np. Inter, system-ui)
- **Body:** Clean readable (Inter)
- **Timer:** Monospace large (dla cyferblatu)

---

## 5. Ścieżka użytkownika

### Scenariusz 1: Pierwsze użycie
1. Użytkownik wchodzi na stronę
2. Widzi ekran powitalny z 3 pytaniami:
   - "Co robisz?" (Nauka / Trening / Praca / Relaks)
   - "Jaki masz poziom energii?" (Slider: Niska ↔ Wysoka)
   - "Jaki typ muzyki?" (Z tekstem / Instrumentalna)
3. Klik "Pobierz playlistę"
4. Przekierowany do Dashboard z dopasowaną playlistą + wyświetlone BPM

### Scenariusz 2: Nauka z Focus Mode
1. Użytkownik na Dashboard
2. Klika "Uruchom Focus Mode"
3. Przechodzi w fullscreen minimalny interfejs
4. Timer startuje automatycznie z playlistą
5. Po 25 min - notification (opcjonalnie)
6. Może wyjść lub rozpocząć kolejną sesję

### Scenariusz 3: Zmiana aktywności
1. Na Dashboard klika inny kafelek (np. "Trening")
2. Playlist zmienia się natychmiast
3. YouTube auto-play nowej playlisty

---

## 6. Stack technologiczny

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| Frontend | React + Vite | Szybki setup, hot reload |
| Styling | Tailwind CSS + Shadcn | Gotowe komponenty, modern look |
| Stan | React useState / useContext | Wystarczy do MVP |
| Backend | Firebase (Firestore) | Szybkie prototypowanie |
| Auth | Firebase Auth | Opcjonalnie dla MVP |
| Hosting | Vercel / Netlify | Darmowe dla projektów studenckich |
| Audio | YouTube IFrame API | Bez OAuth, embed only |

### Struktura komponentów:
```
src/
├── components/
│   ├── Onboarding.jsx       # Kwestionariusz
│   ├── Dashboard.jsx        # Główny widok
│   ├── PlaylistPlayer.jsx   # YouTube embed
│   ├── PomodoroTimer.jsx    # Timer logic
│   ├── FocusMode.jsx        # Fullscreen timer
│   └── Navigation.jsx       # Bottom nav
├── hooks/
│   └── useTimer.js          # Timer hook
├── data/
│   └── playlists.js         # Hardcoded playlisty
├── App.jsx
└── main.jsx
```

---

## 7. Playlisty z BPM (Hardcoded dla MVP)

| Kategoria | Nazwa | BPM | YouTube | Spotify Link |
|-----------|-------|-----|---------|--------------|
| Nauka + Niska energia | Lo-Fi Focus | 70-85 | youtube.com/embed/... | spotify.link/... |
| Nauka + Średnia energia | Classical Study | 80-100 | youtube.com/embed/... | spotify.link/... |
| Nauka + Wysoka energia | Upbeat Instrumental | 100-120 | youtube.com/embed/... | spotify.link/... |
| Trening + Niska energia | Running Warm-up | 100-120 | youtube.com/embed/... | spotify.link/... |
| Trening + Wysoka energia | Workout Hype | 140-160 | youtube.com/embed/... | spotify.link/... |
| Praca + Niska energia | Coffee Shop | 70-90 | youtube.com/embed/... | spotify.link/... |
| Relaks + Niska energia | Sleep & Relax | 60-80 | youtube.com/embed/... | spotify.link/... |
| Relaks + Wysoka energia | Weekend Vibes | 90-110 | youtube.com/embed/... | spotify.link/... |

*W rzeczywistej implementacji użyjemy prawidłowych YouTube embed URLs i Spotify links*

**Dźwięki tła dla Focus Mode:**
- White Noise: darmowy MP3 z CDN
- Deszcz: darmowy MP3 z CDN
- Kawiarnia: darmowy MP3 z CDN

---

## 8. Kryteria sukcesu MVP

- ✅ Użytkownik może w < 30 sekund otrzymać playlistę
- ✅ Odtwarzacz działa (play/pause/next)
- ✅ Timer Pomodoro działa poprawnie
- ✅ Focus Mode wchodzi w fullscreen i blokuje distractions
- ✅ UI jest "cool" - dark mode z gradientami
- ✅ Działa na mobile i desktop
- ✅ Ładuje się < 3 sekundy

---

## 9. Następne kroki

Po Twojej weryfikacji, możemy:
1. Dostosować funkcjonalności (dodać/usunąć)
2. Zdefiniować dokładną paletę kolorów
3. Przygotować checklist implementacji
4. Przejść do etapu kodowania (tryb Code)

**Czekam na Twoją wizję!**

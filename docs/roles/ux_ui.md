# UX/UI Designer - BeatsPerMind

## Makiety (Mockups)

### Screen Flow

```
Screen 1: Landing
┌─────────────────────────────────────┐
│            BeatsPerMind             │
│                                     │
│    [ Rozpocznij Quiz ]              │
│    [ Dowiedz się więcej ]           │
└─────────────────────────────────────┘

Screen 2: Quiz (3 Steps)
┌─────────────────────────────────────┐
│  Krok 1 z 3: Jaka aktywność?       │
│  [🎓 Nauka] [💪 Trening] [💼 Praca] │
│                                     │
│  Krok 2 z 3: Poziom energii        │
│  [Low ◉————————● High]              │
│                                     │
│  Krok 3 z 3: Preferencje           │
│  [Tekst] [Instrumentalna]          │
│                                     │
│  [ Pokaż playlistę ]               │
└─────────────────────────────────────┘

Screen 3: Playlist View
┌─────────────────────────────────────┐
│  [Playlist Cover]                   │
│  Your Focus Playlist 🎵            │
│  BPM: 60-80                         │
│                                     │
│  [▶ Play] [Focus Mode] [Spotify]   │
│                                     │
│  [Dowiedz się więcej] ▼            │
└─────────────────────────────────────┘

Screen 4: Focus Mode
┌─────────────────────────────────────┐
│  FOCUS MODE ⏱️                     │
│                                     │
│        25:00                        │
│  [⏸] [⟲] [BREAK]                   │
│                                     │
│  Ambient Sounds:                    │
│  [🌧️ Rain] [☕ Cafe] [🌲 Forest]    │
└─────────────────────────────────────┘
```

## Przepływy Użytkownika (User Flows)

### Flow 1: Nowy Użytkownik → Playlista
```
1. Wejdź na stronę (/)
2. Kliknij "Rozpocznij quiz"
3. Odpowiedz na 3 pytania:
   - Aktywność: Nauka
   - Energia: Medium
   - Tekst: Instrumentalna
4. Kliknij "Pokaż playlistę"
5. Zobacz dopasowaną playlistę
6. Kliknij "Play" lub "Focus Mode"
```

### Flow 2: Focus Session
```
1. W PlaylistView kliknij "Focus Mode"
2. Ustaw timer (domyślnie 25 min)
3. Wybierz dźwięk ambient (np. Rain)
4. Kliknij Play
5. Po 25 min → automatyczny BREAK 5 min
6. Po 5 min → powrót do WORK
```

## Zasady UX

### Design Principles
1. **Minimalizm** - Mniej UI, więcej wartości
2. **Szybkość** - Time to first value < 2 minuty
3. **Intuicyjność** - Brak instrukcji, wszystko oczywiste
4. **Spójność** - Ten sam design na wszystkich ekranach

### Color Palette
```
Light Mode:
- Primary: oklch(0.55 0.15 150) - Teal accent
- Background: oklch(0.98 0.01 260) - Biały z odcieniem
- Text: oklch(0.2 0.02 260) - Ciemny szary

Dark Mode:
- Primary: oklch(0.55 0.15 150) - Ten sam teal
- Background: oklch(0.08 0.01 260) - Głęboki ciemny
- Cards: oklch(0.12 0.008 260) - Nieco jaśniejsze
```

### Typography
- Font: System fonts (San Francisco, Segoe UI, Roboto)
- Headings: font-semibold, responsive size
- Body: font-normal, 16px base

### Interaction Patterns
- Hover: scale(1.05) + shadow zwiększenie
- Transitions: 300ms duration-all
- Feedback: Visual + hover states na wszystkich przyciskach
# BeatsPerMind - Architecture Decision Records (ADR)

## ADR-001: React + Vite zamiast Next.js

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba wybrać framework frontendowy dla aplikacji studentów z ograniczeniami czasowymi (15h) i budżetowymi (0€).

### Rozważane Opcje
- React + Vite
- Next.js

### Decyzja
Wybrano **React + Vite**.

### Uzasadnienie
| Kryterium | React + Vite | Next.js | Wybór |
|-----------|--------------|---------|-------|
| Setup Time | 2 minuty | 10 minut | Vite |
| Config | Zero config | Wiele opcji | Vite |
| SSR | Nie potrzebne | Tak | Vite |
| Bundle Size | Lżejszy | Cięższy | Vite |
| Learning Curve | Niska | Wyższa | Vite |

### Skutki
- ✅ Szybszy development
- ✅ Mniej plików konfiguracyjnych
- ✅ Brak SSR overhead dla prostego SPA

---

## ADR-002: Tailwind CSS + shadcn/ui zamiast Styled Components

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba wybrać bibliotekę stylingową dla szybkiego prototypowania UI.

### Rozważane Opcje
- Tailwind CSS + shadcn/ui
- Styled Components
- CSS Modules

### Decyzja
Wybrano **Tailwind CSS + shadcn/ui**.

### Uzasadnienie
- shadcn/ui dostarcza gotowe komponenty (Button, Card, Slider)
- Copy-paste implementacja bez vendor lock-in
- Responsive utilities wbudowane
- Theme-aware dark mode z Tailwind

### Skutki
- ✅ Gotowe komponenty w 5 minut
- ✅ Spójny design system
- ✅ Łatwe modyfikacje stylów

---

## ADR-003: useState + Context zamiast Redux/Zustand

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba zarządzania stanem aplikacji przy minimalnym kodzie.

### Rozważane Opcje
- useState + Context API
- Redux Toolkit
- Zustand

### Decyzja
Wybrano **useState + Context API**.

### Uzasadnienie
- MVP wymaga tylko 3 stanów globalnych: quiz, timer, audio
- Redux: 5+ plików dla prostego stanu
- Zustand: dodatkowa zależność niepotrzebna
- Context API wystarcza dla 3-4 komponentów

```javascript
// Wystarczy prosty useContext
const QuizContext = createContext()
const TimerContext = createContext()
```

### Skutki
- ✅ Mniej kodu
- ✅ Brak dodatkowych zależności
- ✅ Prostsze debugowanie

---

## ADR-004: React Router v6 zamiast Wouter

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba routingu dla 4 stron: Landing, Quiz, PlaylistView, FocusMode.

### Rozważane Opcje
- React Router v6
- Wouter
- Brak routingu (single page)

### Decyzja
Wybrano **React Router v6**.

### Uzasadnienie
- Standard przemysłu - łatwo znaleźć pomoc
- Dla 3-4 routes nie ma przewagi Wouter
- Nested routes dostępne jeśli potrzebne

### Skutki
- ✅ Standardowy routing
- ✅ Dobla dokumentacja
- ✅ Łatwe deployment na Vercel

---

## ADR-005: HTML5 Audio zamiast Howler.js

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba odtwarzać ambient sounds (deszcz, white noise, kawiarnia, las).

### Rozważane Opcje
- HTML5 Audio API
- Howler.js
- Web Audio API

### Decyzja
Wybrano **HTML5 Audio API**.

### Uzasadnienie
- YouTube embed używa iframe (nie audio API)
- Ambient sounds to proste MP3 playback
- Howler.js to overhead dla prostego use case

```javascript
// Wystarczy native HTML5
const audio = new Audio('/sounds/rain.mp3')
audio.play()
audio.volume = 0.7
```

### Skutki
- ✅ Mniej kodu
- ✅ Brak dodatkowej zależności
- ✅ Prostsze cache'owanie

---

## ADR-006: Static JSON + LocalStorage zamiast Backendu

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba przechowywania danych przy zerowym budżecie.

### Rozważane Opcje
- Static JSON + LocalStorage
- Firebase
- Supabase

### Decyzja
Wybrano **Static JSON + LocalStorage**.

### Uzasadnienie
- Playlisty to statyczne dane (8 playlist)
- Odpowiedzi quizu w localStorage
- Zero kosztów utrzymania
- Zero serwerów do konfigurowania

### Struktura danych
```
src/data/
  playlists.json    # 8 playlist z tagami energy/activity/lyrics
  
localStorage keys:
  - quizAnswers    # {activity, energy, lyrics}
  - settings       # volume, preferences
```

### Skutki
- ✅ Zero kosztów
- ✅ Zero maintenance
- ✅ Proste backupy (git)

---

## ADR-007: YouTube Embed zamiast YouTube Data API

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba odtwarzać playlisty bez reklam i przerw.

### Rozważane Opcje
- YouTube Embed (iframe)
- YouTube Data API

### Decyzja
Wybrano **YouTube Embed (iframe)**.

### Uzasadnienie
- API wymaga klucza i quota
- OAuth to overkill dla MVP
- Embed odtwarza całą playlistę
- Brak reklam w embed (dla własnych filmów)

```html
<iframe 
  src="https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID&autoplay=1"
  allowfullscreen>
</iframe>
```

### Skutki
- ✅ Zero konfiguracji API
- ✅ Zero limitów requestów
- ✅ Prostsze wdrożenie

---

## ADR-008: Timer w Foreground zamiast Web Workers

**Status:** Zaakceptowane  
**Date:** 2026-04-05

### Kontekst
Potrzeba działającego timera Pomodoro kiedy karta jest aktywna.

### Rozważane Opcje
- setTimeout/setInterval (foreground)
- Web Workers
- Background sync API

### Decyzja
Wybrano **setTimeout/setInterval w foreground**.

### Uzasadnienie
- MVP nie wymaga działania w tle
- Użytkownik widzi timer = karta aktywna
- Web Workers = overkill
- Background timers = niepotrzebne dla studentów

### Algorytm Pomodoro
```
WORK: 25 minutes → BREAK: 5 minutes → WORK: 25 minutes...
Auto-switch przy zakończeniu fazy
Pomodoro counter zwiększa się po WORK→BREAK
```

### Skutki
- ✅ Prostsza implementacja
- ✅ Mniej kodu
- ✅ OK dla użytkownika (patrzy na timer)

---

## Podsumowanie

| Decyzja | Wybór | Powód |
|---------|-------|-------|
| Framework | React + Vite | Szybki setup, brak SSR |
| Styling | Tailwind + shadcn | Gotowe komponenty |
| State | useState + Context | Prosty, wystarczający |
| Routing | React Router | Standard przemysłu |
| Audio | HTML5 Audio | Proste usecase |
| Data | Static JSON | Zero kosztów |
| Media | YouTube Embed | Bez API key |
| Timer | Foreground | UX-appropriate |
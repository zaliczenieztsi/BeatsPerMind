# [2026-04-20] Implementacja Quiz (3 pytania)

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [x] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [x] 3. Zidentyfikuj zależności (komponenty: Quiz.jsx, dane: playlists.json, hook: useQuiz)
- [x] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj czy masz wszystkie potrzebne informacje z dokumentacji
- Struktura quizu: 3 pytania (activity, energy, lyrics)
- Odpowiedzi zapisywane w state + localStorage

---

## Sekcja 2: Implementacja

- [x] 5. Utwórz `src/data/playlists.json` z 8 playlistami (format z SPEC.md)
- [x] 6. Utwórz `src/utils/playlistMatcher.js` z algorytmem dopasowania (scoring: activity=2, energy=1.5, lyrics=1)
- [x] 7. Utwórz `src/hooks/useQuiz.js` - logika quizu (3 kroki, przechowywanie odpowiedzi, przejście do wyniku)
- [x] 8. Utwórz `src/components/Quiz.jsx` - formularz z 3 pytaniami (radio buttons / buttons)
- [x] 9. Utwórz `src/components/PlaylistView.jsx` - wyświetla wynikową playlistę + YouTube embed + przycisk Spotify
- [x] 10. Zintegruj ścieżkę `/quiz` i `/playlist` w `App.jsx` routing

**Testowanie po sekcji 2:**
- Zweryfikuj czy quiz wyświetla 3 pytania
- Sprawdź czy wybory są zapisywane
- Przejdź do PlaylistView i sprawdź dopasowanie playlisty

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 11. Uruchom build (`npm run build`)
- [x] 12. Sprawdź czy build przechodzi bez błędów
- [x] 13. Zweryfikuj że aplikacja działa (dev server)
- [x] 14. Zapisz plan w `docs/plans/zaimplementowane-plany.md`

**Testowanie po sekcji 3:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj pełny flow: Landing → Quiz → PlaylistView
- Sprawdź algorytm dopasowania (score)

---

## Uwagi

- Quiz to pierwsza funkcjonalność po bootstrapie
- playlists.json musi być zgodny z formatem z SPEC.md
- Algorytm w playlistMatcher.js: activity=2pkt, energy=1.5pkt, lyrics=1pkt
- PlaylistView: embed iframe YouTube (cała playlista) + link Spotify
- Dane przechowywane w localStorage (opcjonalnie dla sesji)

---

# [2026-04-13] Bootstrap aplikacji BeatsPerMind

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [x] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [x] 3. Zidentyfikuj zależności (React 18, Vite, Tailwind, shadcn/ui, React Router)
- [x] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj czy masz wszystkie potrzebne informacje z dokumentacji
- Tech Stack z SPEC.md: React 18 + Vite + Tailwind CSS + shadcn/ui

---

## Sekcja 2: Setup Projektu

- [x] 5. Zainicjuj projekt Vite + React (`npm create vite@latest`)
- [x] 6. Zainstaluj zależności (`npm install`)
- [x] 7. Skonfiguruj Tailwind CSS (`npx tailwindcss init -p`)
- [x] 8. Skonfiguruj `tailwind.config.js` i `index.css`
- [x] 9. Zainstaluj shadcn/ui (`npx shadcn@latest init`)
- [x] 10. Zainstaluj React Router (`npm install react-router-dom`)

**Testowanie po sekcji 2:**
-Zweryfikuj czy `npm run dev` uruchamia serwer deweloperski
- Sprawdź czy Tailwind działa (testowa klasa w CSS)

---

## Sekcja 3: Struktura Plików

- [x] 11. Utwórz katalogi: `src/components/`, `src/data/`, `src/hooks/`, `src/utils/`
- [x] 12. Utwórz katalog `public/sounds/` (pusty - placeholder dla ambient sounds)
- [x] 13. Skonfiguruj routing w `App.jsx`
- [x] 14. Utwórz podstawowy komponent Navigation (bottom nav / header)
- [x] 15. Utwórz Landing.jsx - strona powitalna

**Testowanie po sekcji 3:**
- Zweryfikuj czy strona główna wyświetla się poprawnie
- Sprawdź czy routing działa

---

## Sekcja 4: Walidacja i Finalizacja

- [x] 16. Uruchom build (`npm run build`)
- [x] 17. Sprawdź czy build przechodzi bez błędów
- [x] 18. Zweryfikuj że aplikacja uruchamia się (`npm run preview` lub dev)
- [x] 19. Zapisz plan w `docs/plans/zaimplementowane-plany.md`

**Testowanie po sekcji 4:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj że aplikacja wyświetla stronę powitalną
- Testuj działanie podstawowej nawigacji

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 11. Uruchom build (`npm run build`)
- [x] 12. Sprawdź czy build przechodzi bez błędów
- [x] 13. Zweryfikuj że aplikacja uruchamia się (`npm run preview` lub dev)
- [x] 14. Zapisz plan w `docs/plans/zaimplementowane-plany.md`

**Testowanie po sekcji 4:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj że aplikacja wyświetla stronę powitalną
- Testuj działanie podstawowej nawigacji

---

# [2026-04-20] Implementacja Quiz (3 pytania)

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [x] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [x] 3. Zidentyfikuj zależności (komponenty: Quiz.jsx, dane: playlists.json, hook: useQuiz)
- [x] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj czy masz wszystkie potrzebne informacje z dokumentacji
- Struktura quizu: 3 pytania (activity, energy, lyrics)
- Odpowiedzi zapisywane w state + localStorage

---

## Sekcja 2: Implementacja

- [x] 5. Utwórz `src/data/playlists.json` z 8 playlistami (format z SPEC.md)
- [x] 6. Utwórz `src/utils/playlistMatcher.js` z algorytmem dopasowania (scoring: activity=2, energy=1.5, lyrics=1)
- [x] 7. Utwórz `src/hooks/useQuiz.js` - logika quizu (3 kroki, przechowywanie odpowiedzi, przejście do wyniku)
- [x] 8. Utwórz `src/components/Quiz.jsx` - formularz z 3 pytaniami (radio buttons / buttons)
- [x] 9. Utwórz `src/components/PlaylistView.jsx` - wyświetla wynikową playlistę + YouTube embed + przycisk Spotify
- [x] 10. Zintegruj ścieżkę `/quiz` i `/playlist` w `App.jsx` routing

**Testowanie po sekcji 2:**
- Zweryfikuj czy quiz wyświetla 3 pytania
- Sprawdź czy wybory są zapisywane
- Przejdź do PlaylistView i sprawdź dopasowanie playlisty

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 11. Uruchom build (`npm run build`)
- [x] 12. Sprawdź czy build przechodzi bez błędów
- [x] 13. Zweryfikuj że aplikacja działa (dev server)
- [x] 14. Zapisz plan w `docs/plans/zaimimplementowane-plany.md`

**Testowanie po sekcji 3:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj pełny flow: Landing → Quiz → PlaylistView
- Sprawdź algorytm dopasowania (score)

---

## Uwagi

- Quiz to pierwsza funkcjonalność po bootstrapie
- playlists.json musi być zgodny z formatem z SPEC.md
- Algorytm w playlistMatcher.js: activity=2pkt, energy=1.5pkt, lyrics=1pkt
- PlaylistView: embed iframe YouTube (cała playlista) + link Spotify
- Dane przechowywane w localStorage (opcjonalnie dla sesji)

---

# [2026-04-20] Implementacja Focus Mode (Timer Pomodoro + Ambient Sounds)

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [x] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [x] 3. Zidentyfikuj zależności (komponenty: FocusMode.jsx, Timer.jsx, AmbientPlayer.jsx; hooks: useTimer, useAudio; dane: ambientSounds.js; pliki: public/sounds/*.mp3)
- [x] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj wszystkie potrzebne informacje z dokumentacji
- Timer: 25 min praca / 5 min przerwa (foreground only)
- 4 ambient sounds: rain.mp3, white-noise.mp3, cafe.mp3, forest.mp3

---

## Sekcja 2: Implementacja

- [x] 5. Utwórz `src/data/ambientSounds.js` z konfiguracją 4 dźwięków (id, name, icon, src, color)
- [x] 6. Pobierz/umieść pliki MP3 w `public/sounds/` (rain, white-noise, cafe, forest) - placeholder OK
- [x] 7. Utwórz `src/hooks/useTimer.js` - logika Pomodoro (start/pause/reset, work/break durations, timer ticks)
- [x] 8. Utwórz `src/hooks/useAudio.js` - logika odtwarzania ambient sounds (play/pause, volume)
- [x] 9. Utwórz `src/components/Timer.jsx` - wyświetlanie czasu, przełączanie work/break, kontrola start/pause/reset
- [x] 10. Utwórz `src/components/AmbientPlayer.jsx` - wybór dźwięku, play/pause, volume slider
- [x] 11. Utwórz `src/components/FocusMode.jsx` - główny ekran łączący Timer + AmbientPlayer
- [x] 12. Zaktualizuj routing w `App.jsx` - ścieżka `/focus` → FocusMode
- [x] 13. Dodaj link do Focus Mode z PlaylistView (already present as button)

**Testowanie po sekcji 2:**
- Zweryfikuj czy timer liczy w dół (25 min work / 5 min break)
- Sprawdź czy ambient sounds odtwarzają się (play/pause)
- Testuj przełączanie między trybami work/break
- Sprawdź integrację z PlaylistView przyciskiem "Tryb Focus"

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 14. Uruchom build (`npm run build`)
- [x] 15. Sprawdź czy build przechodzi bez błędów
- [x] 16. Zweryfikuj że aplikacja działa (dev server)
- [x] 17. Zapisz plan w `docs/plans/zaimimplementowane-plany.md`

**Testowanie po sekcji 3:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj pełny flow z Focus Mode na końcu
- Timer działa tylko w foreground (nie wymaga Web Workers)

---

## Uwagi

- Focus Mode to ostatnia funkcjonalność MVP
- Pliki dźwiękowe MP3 należy umieścić w `public/sounds/` (można użyć placeholderów/pustych plików na potrzeby testów)
- Timer działa w foreground - aplikacja musi być aktywna (OK dla MVP)
- Brak WebWorkers - uproszczenie dla początkującego
- Brak persistencji ustawień timera (localStorage optional)

---

## Uwagi Ogólne

Bootstrap aplikacji to podstawowa konfiguracja projektu obejmująca:
- Setup React + Vite
- Konfiguracja Tailwind CSS + shadcn/ui
- Routing (React Router)
- Struktura katalogów
- Landing page (strona powitalna)

Po bootstrapie można implementować poszczególne funkcjonalności (Quiz, PlaylistView, FocusMode).

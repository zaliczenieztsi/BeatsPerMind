# [2026-04-20] Implementacja Focus Mode (Timer Pomodoro + Ambient Sounds)

## Sekcja 1: Przygotowanie

- [ ] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [ ] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [ ] 3. Zidentyfikuj zależności (komponenty: FocusMode.jsx, Timer.jsx, AmbientPlayer.jsx; hooks: useTimer, useAudio; dane: ambientSounds.js; pliki: public/sounds/*.mp3)
- [ ] 4. Przygotuj kodstarterowy (opcjonalnie)

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

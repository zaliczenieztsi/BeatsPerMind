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

---

# [2026-05-04] Ulepszenie Wizualne Progress Ring w Focus Timer

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalno�� jest ma�a (tak - zmiany CSS/SVG tylko)
- [x] 2. Sprawd� dokumentacj� w `docs/biznes/SPEC.md` (Timer Pomodoro 25/5)
- [x] 3. Zidentyfikuj zale�no�ci (Timer.jsx, FocusModeTimer.jsx - identyczne komponenty)
- [x] 4. Przygotuj kodstarterowy (analiza obecnego kodu)

**Testowanie po sekcji 1:**
- Obecny kod u�ywa SVG z radius=60, svg=160x160
- Progress zaczyna si� od prawej (3 o'clock) zamiast g�ry (12 o'clock)
- Margines wok� timera jest niewystarczaj�cy (~20px)

---

## Sekcja 2: Analiza Problem�w

### Problem 1: Zbyt ma�y okr�g
- Obecny: radius=60px, svg 160x160 (margines 20px z ka�dej strony)
- Efekt: okr�g nachodzi na czytelno�� licznika w centrum

### Problem 2: Nieprawid�owy punkt startowy animacji
- SVG stroke domy�lnie zaczyna od prawej (3 o'clock)
- Wymagane: start od g�ry (12 o'clock)

---

## Sekcja 3: Propozycja Rozwi�zania

### Zmiany wizualne:
1. **Zwi�kszy� rozmiar SVG i radius**:
- svg: 160x160 � 200x200
- radius: 60 � 80 (margines 20px zamiast 10px)
  
2. **Poprawi� punkt startowy animacji**:
- Dodaj transformacj� CSS: transform: rotate(-90deg) do elementu progress circle
- Alternatywnie: u�yj stroke-dashoffset z warto�ci� pocz�tkow� = circumference/4

### Implementacja:
- Edytuj Timer.jsx i FocusModeTimer.jsx (identyczne zmiany)
- Zachowa� wszystkie style i animacje CSS
- Nie zmienia� logiki hooka useTimer

---

## Sekcja 4: Kroki Implementacyjne

- [ ] 5. Zaktualizuj Timer.jsx:
- Zwi�kszy� svg width/height z 160 na 200
- Zwi�kszy� radius z 60 na 80
- Doda� transform: rotate(-90deg) do progress circle
- Dostosowa� pozycje element�w pozostaj�cych w centrum
- [ ] 6. Zaktualizuj FocusModeTimer.jsx (to samo co Timer.jsx)
- [ ] 7. Zweryfikuj responsywno�� - czy zmiany dzia�aj� na r�nych rozmiarach ekranu

---

## Sekcja 5: Potencjalne Ryzyka i Edge Case'y

1. **Responsywno��**: wi�kszy SVG mo�e nie pasowa� na ma�e ekrany
- Mitigacja: doda� media queries dla ekran�w < 640px
  
2. **Pozycjonowanie tekstu**: wi�kszy okr�g mo�e wymaga� korekty centralnego tekstu
- Mitigacja: zachowa� absolute inset-0 z flexbox center
  
3. **Animacja obracania**: transform: rotate(-90deg) mo�e wp�yn�� na inne transformacje
- Mitigacja: u�y� oddzielnego wrappera dla obrotu

---

## Sekcja 6: Testowanie

- [ ] 8. Uruchom npm run dev i sprawd� wizualizacj�
- [ ] 9. Zweryfikuj p�ynno�� animacji post�pu
- [ ] 10. Sprawd� na r�nych rozmiarach okna przegl�darki
- [ ] 11. Uruchom npm run build - build musi przej�� bez b��d�w

**Kryteria akceptacji:**
- Progress ring zaczyna si� od g�ry (12 o'clock)
- Okr�g nie nachodzi na czytelny licznik w centrum
- Utrzymany jest estetyczny margines wok� timera
- Animacja post�pu dzia�a p�ynnie

---

## Uwagi

- Projekt zmian jest ma�y - tylko modyfikacje CSS/SVG
- Nie wymaga zmian w logice biznesowej (useTimer.js)
- Istniej� dwa identyczne komponenty (Timer.jsx + FocusModeTimer.jsx) - oba trzeba zaktualizowa�


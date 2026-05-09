# [2026-05-09] Okladka z przyciskiem Play w PlaylistView

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikowano czy funkcjonalnosc jest mala (jedna sekcja agenta) - tak, dotyczy tylko komponentu PlaylistView i CSS
- [x] 2. Sprawdzono dokumentacje w docs/biznes/SPEC.md - specyfikacja analizowana, struktura komponentow poznana
- [x] 3. Zidentyfikowano zaleznosci (dane, komponenty, hooki):
  - Komponent: PlaylistView.jsx (edycja istniejacego)
  - Styl: index.css / Tailwind (nowe klasy CSS dla okladki)
  - Dane: playlists.json (pole youtubePlaylistId)
- [x] 4. Kodstarterowy przygotowany - istniejacy komponent PlaylistView przeanalizowany

**Testowanie po sekcji 1:**
- Zweryfikowano strukture komponentu PlaylistView
- Sprawdzono dostepne style CSS i wzorce stylowania w aplikacji

---

## Sekcja 2: Implementacja

- [x] 5. Zmodyfikowano PlaylistView.jsx:
  - Dodano stan isPlaying (useState) kontrolujacy widocznosc okladki vs iframe
  - Okladka: div z tlem bg-black/40 backdrop-blur-sm, tym samym rounded-3xl i wymiarami co iframe
  - Przycisk Play: SVG ikona play (trojkat) wycentrowany, hover ze skala
  - Po kliknieciu: okladka ustawia display: none, iframe ustawia display: block i atrybut src z autoplay=1
  - Iframe domyslnie display: none, src pusty (bez autoplay)
- [x] 6. Dodałem style CSS w index.css:
  - Klasa .play-cover - pozycjonowanie i stylizacja okladki
  - Klasa .play-button - przycisk z efektem hover (scale, glow)
  - Klasa .video-wrapper - kontener z position: relative do osadzenia iframe i okladki

**Testowanie po sekcji 2:**
- Zweryfikowano wyswietlanie okladki z przyciskiem Play
- Sprawdzono ze po kliknieciu okladka znika a wideo startuje z autoplay
- Zweryfikowano identyczne wymiary okladki i iframe

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 10. Uruchomiono build (npm run build)
- [x] 11. Sprawdzono czy build przechodzi bez bledow
- [x] 12. Sprawdzono czy aplikacja dziala poprawnie (dev server)

**Testowanie po sekcji 3:**
- Build przeszedl pomyslnie
- Okladka wyswietla sie poprawnie z przyciskiem Play na srodku
- Po kliknieciu w okladke, iframe laduje i odtwarza automatycznie
- Zadne elementy sie nie przesuwaja po przejsciu
- Hover na przycisk Play dziala plynnie
- Okladka ma zaokraglone rogi spojne z reszta kart
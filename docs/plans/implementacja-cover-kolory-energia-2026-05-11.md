# [Data: 2026-05-11] Adaptacyjne kolory coveru Play w PlaylistView wg energii playlisty

## Kontekst
Aktualny overlay play (`.play-cover`) używa stałego `bg-black/40`, który wygląda zbyt ciemnieco zarówno w Light Mode, jak i w Dark Mode. Cover powinien dopasowywać się do kolorów energii playlisty (turkus-granat dla high, bordo-grafit dla low/medium), zapewniając jednocześnie czytelność i estetykę w obu trybach.

## Sekcja 1: Przygotowanie
- [x] 1. Zweryfikowano czy funkcjonalność jest mała (jedna sekcja agenta) — tak, dotyczy PlaylistView.jsx i index.css
- [x] 2. Sprawdzono dokumentację w docs/biznes/SPEC.md — specyfikacja analizowana, paleta kolorów energetycznych znana
- [x] 3. Zidentyfikowano zależności:
  - Komponent: `app/src/components/PlaylistView.jsx` (edycja istniejącego)
  - Styl: `app/src/index.css` (nowe klasy CSS dla cover energii)
  - Dane: `app/src/data/playlists.json` (tagi `energy: high/low/medium`)
  - Istniejący helper: `isHighEnergy(playlist)` w PlaylistView.jsx
- [x] 4. Kodstarterowy przygotowany — istniejący komponent PlaylistView przeanalizowany

**Paleta kolorów bazowych (z już wdrożonego gradientu tła):**
- High Energy: oklch(0.25 0.08 210) → oklch(0.05 0.02 270) (turkus → granat)
- Low/Medium Energy: oklch(0.2 0.1 0) → oklch(0.08 0.01 260) (bordo → grafit)

**Testowanie po sekcji 1:**
- Zidentyfikowano, że cover musi być kolorowy, nie czarny
- Zidentyfikowano, że dark mode wymaga wyższej opacności koloru
- Tech Stack potwierdzony: React + Tailwind + shadcn/ui + raw CSS

---

## Sekcja 2: Implementacja

### 2.1 Nowe klasy CSS w `index.css`

Dodanie klas overlay'u play dopasowanych do energii:

**Light Mode — High Energy (turkusowy overlay):**
```css
.cover-energetic {
  background-color: oklch(0.22 0.1 220 / 0.5);
}
.cover-energetic:hover {
  background-color: oklch(0.3 0.12 220 / 0.6);
}
```

**Light Mode — Low/Medium Energy (bordo-różowy overlay):**
```css
.cover-calm {
  background-color: oklch(0.25 0.12 25 / 0.5);
}
.cover-calm:hover {
  background-color: oklch(0.32 0.15 25 / 0.6);
}
```

**Dark Mode — High Energy (jaśniejszy turkus na ciemnym tle):**
```css
.dark .cover-energetic {
  background-color: oklch(0.15 0.08 220 / 0.6);
}
.dark .cover-energetic:hover {
  background-color: oklch(0.25 0.12 220 / 0.75);
}
```

**Dark Mode — Low/Medium Energy (jaśniejszy bordo na ciemnym tle):**
```css
.dark .cover-calm {
  background-color: oklch(0.18 0.1 25 / 0.6);
}
.dark .cover-calm:hover {
  background-color: oklch(0.28 0.14 25 / 0.75);
}
```

### 2.2 Przycisk Play dopasowany do energii

**Light & Dark — High Energy:**
```css
.btn-energetic {
  background-color: oklch(0.35 0.12 220 / 0.35);
  color: oklch(0.98 0.01 260);
  box-shadow: 0 0 20px oklch(0.3 0.12 220 / 0.2);
}
.btn-energetic:hover {
  background-color: oklch(0.45 0.15 220 / 0.5);
  box-shadow: 0 0 30px oklch(0.3 0.12 220 / 0.35);
}
```

**Light & Dark — Low/Medium Energy:**
```css
.btn-calm {
  background-color: oklch(0.35 0.15 25 / 0.35);
  color: oklch(0.98 0.01 260);
  box-shadow: 0 0 20px oklch(0.3 0.15 25 / 0.2);
}
.btn-calm:hover {
  background-color: oklch(0.45 0.18 25 / 0.5);
  box-shadow: 0 0 30px oklch(0.3 0.15 25 / 0.35);
}
```

Dark mode warianty przycisków — bardziej nasycone:
```css
.dark .btn-energetic { ... }
.dark .btn-energetic:hover { ... }
.dark .btn-calm { ... }
.dark .btn-calm:hover { ... }
```

### 2.3 Modyfikacja `PlaylistView.jsx`

- Usunięcie stałych klas `bg-black/40` i `bg-white/20` z cover i play button
- Dodanie dynamicznej klasy bazującej na `isHighEnergy(bestPlaylist)`:
  - Cover: `cover-energetic` lub `cover-calm`
  - Play button: `btn-energetic` lub `btn-calm`

### 2.4 Tło video-wrapper dopasowane do energii

Dodanie klas tła kontenera wideo:
```css
.bg-video-energetic { background: oklch(0.08 0.02 220); }
.bg-video-calm { background: oklch(0.1 0.03 25); }
```

### 2.5 Aura — dopasowanie kolorów za pomocą CSS (zamiast inline style)

```css
.aura-energetic { background-color: oklch(0.55 0.15 150); }
.aura-calm { background-color: oklch(0.4 0.2 0); }
```

---

## Sekcja 3: Walidacja i Finalizacja

- [ ] Build przechodzi bez błędów (`npm run build`)
- [ ] Kolory coveru są widoczne i czytelne w Light Mode
- [ ] Kolory coveru są widoczne i czytelne w Dark Mode
- [ ] Cover energetyczny jest turkusowy/przezroczysty (nie czarny)
- [ ] Cover spokojny jest bordo/różowy/przezroczysty (nie czarny)
- [ ] Hover na coverze działa płynnie z efektem nasunięcia
- [ ] Przycisk play ma odpowiedni kolor wg energii
- [ ] Aura pod kartą jest dopasowana do energii
- [ ] Brak regresji w istniejących funkcjonalnościach
- [ ] Przejście play → iframe działa poprawnie

---

**Notatki implementacyjne:**
- Kolory oklch() dobrane w palecie istniejącego gradientu tła — spójność wizualna
- Nie używać Tailwind arbitrary values w JSX dla hover (ograniczenie React) — użyć klas CSS
- Zachować `backdrop-blur-sm` na coverze dla efektu szkła
- Zachować `animate-pulse` na aurze
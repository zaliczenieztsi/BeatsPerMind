# [2026-05-09] Dynamic Background for FocusMode

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikowano czy funkcjonalność jest mała (jedna sekcja agenta) - tak, dotyczy konfiguracji Tailwind i jednego komponentu
- [x] 2. Sprawdzono dokumentację w docs/biznes/SPEC.md - specyfikacja analizowana, tech stack poznany
- [x] 3. Zidentyfikowano zależności:
  - Plik: tailwind.config.js (dodanie własnych kolorów)
  - Plik: src/index.css (dodanie animacji @keyframes)
  - Komponent: src/components/FocusMode.jsx (dynamiczne tło)
- [x] 4. Kodstarterowy przygotowany - przeanalizowano istniejące pliki

**Testowanie po sekcji 1:**
- Zweryfikowano aktualną strukturę FocusMode.jsx
- Sprawdzono formatowanie tailwind.config.js

---

## Sekcja 2: Implementacja

- [x] 5. Zaktualizowano `tailwind.config.js` - dodać kolory:
  - teal-soft: hsl(180, 50%, 90%) - do blasków
  - teal-accent: hsl(180, 30%, 70%) - do akcentów
  - maroon-muted: hsl(340, 30%, 50%) - do tekstu i przycisków
  - gray-light: hsl(210, 15%, 95%) - background
- [x] 6. Dodać animację w `src/index.css`:
  - @keyframes breathe - subtelne przesuwanie (translate(5px, 10px))
  - klasy animate-breathe dla płynnego ruchu
- [x] 7. Zaktualizować `FocusMode.jsx`:
  - Dwa duże, przezroczyste bloki div (fixed inset-0)
  - Górny blok: blurred maroon accent (blur-3xl, slajd)
  - Dolny blok: blurred teal (blur-3xl, slajd)
  - Animacja breathe na blokach (zapętlona, wolna)

**Testowanie po sekcji 2:**
- Zweryfikowano czy kolory są dostępne w Tailwind
- Sprawdzono czy animacja działa płynnie
- Zweryfikowano czy tło jest widoczne i przyjemne dla oka

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 10. Uruchomiono build (`npm run build`) - pomyślnie
- [x] 11. Sprawdzono czy build przechodzi bez błędów - OK
- [x] 12. Zweryfikowano czy aplikacja działa poprawnie (dev server)
- [x] 13. Zapisz plan w `docs/plans/zaimplementowane-plany.md`

**Testowanie po sekcji 3:**
- Build przeszedł pomyślnie
- FocusMode z nowym tłem działa poprawnie
- Animacja breathe jest subtelna i nie rozprasza

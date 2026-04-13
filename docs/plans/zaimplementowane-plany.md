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

- [ ] 5. Zainicjuj projekt Vite + React (`npm create vite@latest`)
- [ ] 6. Zainstaluj zależności (`npm install`)
- [ ] 7. Skonfiguruj Tailwind CSS (`npx tailwindcss init -p`)
- [ ] 8. Skonfiguruj `tailwind.config.js` i `index.css`
- [ ] 9. Zainstaluj shadcn/ui (`npx shadcn@latest init`)
- [ ] 10. Zainstaluj React Router (`npm install react-router-dom`)

**Testowanie po sekcji 2:**
-Zweryfikuj czy `npm run dev` uruchamia serwer deweloperski
- Sprawdź czy Tailwind działa (testowa klasa w CSS)

---

## Sekcja 3: Struktura Plików

- [ ] 11. Utwórz katalogi: `src/components/`, `src/data/`, `src/hooks/`, `src/utils/`
- [ ] 12. Utwórz katalog `public/sounds/` (pusty - placeholder dla ambient sounds)
- [ ] 13. Skonfiguruj routing w `App.jsx`
- [ ] 14. Utwórz podstawowy komponent Navigation (bottom nav / header)
- [ ] 15. Utwórz Landing.jsx - strona powitalna

**Testowanie po sekcji 3:**
- Zweryfikuj czy strona główna wyświetla się poprawnie
- Sprawdź czy routing działa

---

## Sekcja 4: Walidacja i Finalizacja

- [ ] 16. Uruchom build (`npm run build`)
- [ ] 17. Sprawdź czy build przechodzi bez błędów
- [ ] 18. Zweryfikuj że aplikacja uruchamia się (`npm run preview` lub dev)
- [ ] 19. Zapisz plan w `docs/plans/zaimplementowane-plany.md`

**Testowanie po sekcji 4:**
- Upewnij się że build przechodzi bez błędów
- Zweryfikuj że aplikacja wyświetla stronę powitalną
- Testuj działanie podstawowej nawigacji

---

## Uwagi

Bootstrap aplikacji to podstawowa konfiguracja projektu obejmująca:
- Setup React + Vite
- Konfiguracja Tailwind CSS + shadcn/ui
- Routing (React Router)
- Struktura katalogów
- Landing page (strona powitalna)

Po bootstrapie można implementować poszczególne funkcjonalności (Quiz, PlaylistView, FocusMode).
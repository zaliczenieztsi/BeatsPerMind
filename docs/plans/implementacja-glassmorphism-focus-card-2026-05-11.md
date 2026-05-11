# [2026-05-11] Organic Breathing Visualizer w Focus Mode

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [x] 2. Sprawdź dokumentację w docs/biznes/SPEC.md
- [x] 3. Zidentyfikuj zależności (komponenty: FocusMode.jsx, FocusModeTimer.jsx, AmbientPlayer.jsx; styl: index.css)
- [x] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj wszystkie potrzebne informacje z dokumentacji
- Focus Mode już istnieje, wymaga tylko ulepszenia wizualnego wizualizatora
- Tech Stack: React + Tailwind + shadcn/ui (już w projekcie)

---

## Sekcja 2: Implementacja

- [x] 5. Zaktualizuj src/components/FocusMode.jsx:
  - Dodaj glassmorphism kontener: g-white/40 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl
  - Ustaw elative z-10 aby kontener był nad tłem
- [x] 6. Zaktualizuj src/components/FocusModeTimer.jsx:
  - Zastąp stary SVG progress ring warstwowym organicznym wizualizatorem
  - Warstwa 1: w-[260px] h-[260px] bg-[#800020]/10 blur-[60px] animate-breathe-outer
  - Warstwa 2: w-[240px] h-[240px] bg-teal-400/10 blur-[40px] animate-breathe-outer (delay 0.3s)
  - Warstwa 3: w-[220px] h-[220px] bg-teal-500/5 blur-[20px] animate-breathe-outer (delay 0.6s)
  - Warstwa 4: w-[200px] h-[200px] bg-teal-500/10 blur-[10px] animate-breathe-organic (główna pulsująca)
  - Subtelny pierścień postępu w SVG (opacity 0.6, drop-shadow)
  - Umieść licznik czasu i "Focus Time" bezpośrednio na warstwach
  - Nagłówek "FOCUS TIME" w kolorze bordowym #800020
- [x] 7. Zaktualizuj src/components/AmbientPlayer.jsx:
  - Nagłówek "AMBIENT SOUNDS" w kolorze bordowym #800020
  - Karty dźwięków 2×2 z ounded-2xl hover:shadow-md
  - Aktywna karta: g-white/60 shadow-lg border-2 border-emerald-300/60 ring-2 ring-emerald-200/50 + pulsujący glow
  - Przyciski w stylu emerald
- [x] 8. Dodaj animacje w src/index.css:
  - @keyframes breathe-organic (10s, subtelne scale/opacity)
  - @keyframes breathe-outer (10s, box-shadow pulse)
  - Klasy .animate-breathe-organic i .animate-breathe-outer

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 9. Uruchom build (
pm run build)
- [x] 10. Sprawdź czy build przechodzi bez błędów
- [x] 11. Zweryfikuj że aplikacja działa (dev server)
- [x] 12. Zapisz plan w docs/plans/zaimplementowane-plany.md

**Testowanie po sekcji 3:**
- Build bez błędów
- Focus Mode ładuje się poprawnie
- Animacja wizualizatora płynna i organiczna
- Timer działa (start/pause/reset)
- Ambient sounds odtwarzają się (play/pause/stop/volume)
- Aktywna karta dźwięku ma pulsujący wskaźnik

---

## Uwagi

- Wizualizator inspirowany image.png - subtelny, organiczny, miękkie fale
- 4 warstwy: bordowy (głęboki) + 2× teal aura + teal główny pulsujący
- Tylko główna warstwa (Warstwa 4) pulsuje - pozostałe statyczne z opóźnieniem
- Kolor bordowy (#800020) spójny dla nagłówków
- Glassmorphism kontener przepuszcza tło

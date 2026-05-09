# [2026-05-09] Feature Cards – grid 3+3 na Landing, 1 karta w PlaylistView

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikowano czy funkcjonalnosc jest mala (jedna sekcja agenta) - tak, dotyczy tylko LearnMore.jsx
- [x] 2. Sprawdzono dokumentacje w docs/biznes/SPEC.md - specyfikacja analizowana
- [x] 3. Zidentyfikowano zaleznosci:
  - Komponent: LearnMore.jsx (edycja istniejacego)
  - Biblioteka ikon: lucide-react (juz zainstalowana)
  - Logika: getBpmRangeCategory() do mapowania BPM na kategorie low/medium/high
- [x] 4. Kodstarterowy przygotowany - istniejacy komponent LearnMore przeanalizowany

**Testowanie po sekcji 1:**
- Zweryfikowano strukture komponentu LearnMore
- Sprawdzono dostepna biblioteke lucide-react

---

## Sekcja 2: Implementacja

- [x] 5. Zmodyfikowano LearnMore.jsx:
  - Ikona nad tekstem (flex flex-col items-center), tekst wycentrowany
  - Landing (bez bpmRange): siatka 6 kart (3 kolumny x 2 wiersze) z kategoriami ogolnymi
  - PlaylistView (z bpmRange): 1 karta dopasowana do kategorii BPM z rozszerzonym opisem
  - Dodano funkcje getBpmRangeCategory() mapujaca BPM string na kategorie
  - Tablica bpmCategories z 3 kategoriami i rozbudowanymi opisami:
    - Niskie BPM (40–60): opis o koncentracji, redukcji stresu, relaksie, jodze
    - Srednie BPM (60–100): opis o produktywnosci, nauce, pracy umyslowej
    - Wysokie BPM (100–160): opis o energii, motywacji, treningu
- [x] 6. Layout grid:
  - grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 (responsive)
  - gap-3 miedzy kartami

**Testowanie po sekcji 2:**
- Zweryfikowano wyswietlanie 6 kart na stronie glownej (3+3 grid)
- Sprawdzono wyswietlanie 1 karty w PlaylistView odpowiadajacej BPM
- Zweryfikowano hover efekty na kartach
- Zweryfikowano poprawna ikonowanie
- Sprawdzono responsywnosc grid
- Sprawdzono rozszerzone opisy w kartach BPM

---

## Sekcja 3: Walidacja i Finalizacja

- [x] 10. Uruchomiono build (npm run build)
- [x] 11. Sprawdzono czy build przechodzi bez bledow
- [x] 12. Sprawdzono czy aplikacja dziala poprawnie

**Testowanie po sekcji 3:**
- Build przeszedl pomyslnie
- 6 kart w grid na Landing page
- 1 karta pasujaca do BPM w PlaylistView z rozbudowanym opisem
- Ikony lucide-react laduja prawidlowo
- Responsywnosc zachowana
- Stylizacja spojna z reszta aplikacji
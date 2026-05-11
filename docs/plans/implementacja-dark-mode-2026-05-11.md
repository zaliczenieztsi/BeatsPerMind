# [2026-05-11] Implementacja Dark Mode w aplikacji BeatsPerMind

## Sekcja 1: Przygotowanie

- [ ] 1. Zweryfikuj czy funkcjonalnoœæ jest ma³a (jedna sekcja agenta)
- [ ] 2. SprawdŸ dokumentacjê w docs/biznes/SPEC.md
- [ ] 3. Zidentyfikuj zale¿noœci (komponenty: Navigation.jsx, ThemeToggle.jsx; pliki: index.css, tailwind.config.js; hooks: useTheme; kontekst: ThemeContext)
- [ ] 4. Przygotuj kodstarterowy (opcjonalnie)

**Testowanie po sekcji 1:**
- Zweryfikuj czy masz wszystkie potrzebne informacje z dokumentacji
- Upewnij siê ¿e funkcjonalnoœæ jest ograniczona do dodania obs³ugi ciemnego motywu bez zmiany istniej¹cej logiki biznesowej

---

## Sekcja 2: Implementacja

- [ ] 5. Zaktualizuj 	ailwind.config.js aby w³¹czyæ tryb dark mode za pomoc¹ klasy (class)
- [ ] 6. Zmodyfikuj src/index.css aby zdefiniowaæ zmienne kolorów dla trybu jasnego i ciemnego (korzystaj¹c z shadcn/ui)
- [ ] 7. Utwórz src/hooks/useTheme.js - w³asny hook do zarz¹dzania motywem (localStorage, kontekst)
- [ ] 8. Utwórz src/context/ThemeContext.js - kontekst React dla dostêpu do motywu w ca³ej aplikacji
- [ ] 9. Utwórz src/components/ThemeToggle.jsx - komponent prze³¹cznika motywu (ikonê s³oñca/ksiê¿yca z lucide-react)
- [ ] 10. Zintegruj ThemeToggle w src/components/Navigation.jsx (obok linków nawigacji)
- [ ] 11. Zaktualizuj src/components/FocusMode.jsx aby zapewniæ, ¿e jego unikalne t³o nie zostanie nadpisane przez tryb dark mode (u¿yj warunkowych klas lub wyklucz FocusMode z dziedziczenia kolorów body)
- [ ] 12. Dostosuj kolory komponentów (karty, tekst, tagi, przyciski) zgodnie z wytycznymi:
    - Body: bg-slate-950 w trybie ciemnym
    - Karty: bg-slate-900 z border-slate-800
    - G³ówne teksty: text-slate-100
    - Akcenty bordowe: text-rose-400 (zamiast ciemnego bordo)
    - Tagi: ciemniejsze t³o z jasnym tekstem
    - Cienie: bardziej subtelne lub zast¹pione delikatnym border w trybie ciemnym

**Testowanie po sekcji 2:**
- Zweryfikuj czy prze³¹cznik motywu pojawia siê w nawigacji
- SprawdŸ czy prze³¹czanie miêdzy trybami jasnym i ciemnym dzia³a p³ynnie
- Upewnij siê ¿e wybór motywu jest zapisywany w localStorage i przywracany przy ponownym za³adowaniu strony
- SprawdŸ czy sekcja Focus Mode zachowuje swoje unikalne t³o i nie jest wp³ywowana przez tryb dark mode
- Zweryfikuj czy kolory kart, tekstu, tagów i akcentów s¹ poprawne w obu trybach

---

## Sekcja 3: Walidacja i Finalizacja

- [ ] 13. Uruchom build (
pm run build)
- [ ] 14. SprawdŸ czy build przechodzi bez b³êdów
- [ ] 15. Zweryfikuj ¿e aplikacja dzia³a poprawnie w trybie jasnym i ciemnym
- [ ] 16. Zapisz plan w docs/plans/zaimplementowane-plany.md

**Testowanie po sekcji 3:**
- Upewnij siê ¿e build przechodzi bez b³êdów
- Zweryfikuj pe³ny flow aplikacji w obu trybach (Landing › Quiz › PlaylistView › Focus Mode)
- SprawdŸ czy wszystkie komponenty (w tym LearnMore, AmbientPlayer, Timer) prawid³owo dostosowuj¹ swoje kolory
- PotwierdŸ ¿e lokalne przechowywanie motywu dzia³a (odœwie¿enie strony zachowuje wybrany tryb)

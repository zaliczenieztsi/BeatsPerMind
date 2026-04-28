# [2026-04-20] Implementacja Quiz (3 pytania)

## Sekcja 1: Przygotowanie

- [ ] 1. Zweryfikuj czy funkcjonalność jest mała (jedna sekcja agenta)
- [ ] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md`
- [ ] 3. Zidentyfikuj zależności (komponenty: Quiz.jsx, dane: playlists.json, hook: useQuiz)
- [ ] 4. Przygotuj kodstarterowy (opcjonalnie)

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

- [ ] 11. Uruchom build (`npm run build`)
- [ ] 12. Sprawdź czy build przechodzi bez błędów
- [ ] 13. Zweryfikuj że aplikacja działa (dev server)
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

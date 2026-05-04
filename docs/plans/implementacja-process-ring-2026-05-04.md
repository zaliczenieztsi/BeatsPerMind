# [2026-05-04] Ulepszenie Wizualne Progress Ring w Focus Timer

## Sekcja 1: Przygotowanie

- [x] 1. Zweryfikuj czy funkcjonalność jest mała (tak - zmiany CSS/SVG tylko)
- [x] 2. Sprawdź dokumentację w `docs/biznes/SPEC.md` (Timer Pomodoro 25/5)
- [x] 3. Zidentyfikuj zależności (Timer.jsx, FocusModeTimer.jsx - identyczne komponenty)
- [x] 4. Przygotuj kodstarterowy (analiza obecnego kodu)

**Testowanie po sekcji 1:**
- Obecny kod używa SVG z radius=60, svg=160x160
- Progress zaczyna się od prawej (3 o'clock) zamiast góry (12 o'clock)
- Margines wokół timera jest niewystarczający (~20px)

---

## Sekcja 2: Analiza Problem�w

### Problem 1: Zbyt mały okrąg
- Obecny: radius=60px, svg 160x160 (margines 20px z każdej strony)
- Efekt: okrąg nachodzi na czytelność licznika w centrum

### Problem 2: Nieprawidłowy punkt startowy animacji
- SVG stroke domyślnie zaczyna od prawej (3 o'clock)
- Wymagane: start od góry (12 o'clock)

---

## Sekcja 3: Propozycja Rozwi�zania

### Zmiany wizualne:
1. **Zwiększył rozmiar SVG i radius**:
- svg: 160x160 - 200x200
- radius: 60 - 80 (margines 20px zamiast 10px)
  
2. **Poprawi� punkt startowy animacji**:
- Dodaj transformację CSS: transform: rotate(-90deg) do elementu progress circle
- Alternatywnie: użyj stroke-dashoffset z wartością początkową = circumference/4

### Implementacja:
- Edytuj Timer.jsx i FocusModeTimer.jsx (identyczne zmiany)
- Zachował wszystkie style i animacje CSS
- Nie zmieniał logiki hooka useTimer

---

## Sekcja 4: Kroki Implementacyjne

- [ ] 5. Zaktualizuj Timer.jsx:
- Zwiększył svg width/height z 160 na 200
- Zwiększył radius z 60 na 80
- Dodał transform: rotate(-90deg) do progress circle
- Dostosował pozycje elementów pozostających w centrum
- [ ] 6. Zaktualizuj FocusModeTimer.jsx (to samo co Timer.jsx)
- [ ] 7. Zweryfikuj responsywność - czy zmiany działają na różnych rozmiarach ekranu

---

## Sekcja 5: Potencjalne Ryzyka i Edge Case'y

1. **Responsywność**: większy SVG może nie pasować na małe ekrany
- Mitigacja: dodał media queries dla ekranów < 640px
  
2. **Pozycjonowanie tekstu**: większy okrąg może wymagać korekty centralnego tekstu
- Mitigacja: zachował absolute inset-0 z flexbox center
  
3. **Animacja obracania**: transform: rotate(-90deg) może wpłynąć na inne transformacje
- Mitigacja: użył oddzielnego wrappera dla obrotu

---

## Sekcja 6: Testowanie

- [ ] 8. Uruchom npm run dev i sprawdź wizualizację
- [ ] 9. Zweryfikuj płynność animacji postępu
- [ ] 10. Sprawdź na różych rozmiarach okna przeglądarki
- [ ] 11. Uruchom npm run build - build musi przejść bez błędów

**Kryteria akceptacji:**
- Progress ring zaczyna się od góry (12 o'clock)
- Okrąg nie nachodzi na czytelny licznik w centrum
- Utrzymany jest estetyczny margines wokół timera
- Animacja postępu działa płynnie

---

## Uwagi

- Projekt zmian jest ma�y - tylko modyfikacje CSS/SVG
- Nie wymaga zmian w logice biznesowej (useTimer.js)
- Istniej� dwa identyczne komponenty (Timer.jsx + FocusModeTimer.jsx) - oba trzeba zaktualizowa�

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
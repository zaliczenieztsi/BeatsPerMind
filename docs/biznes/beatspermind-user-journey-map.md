# WF_User_Journey_Map - BeatsPerMind

## Mapa Ścieżki Użytkownika

---

## Success Metric (Co to jest "sukces użytkownika"?)

_Użytkownik uzna, że aplikacja warta jest $4.99/miesiąc, jeśli:_

→ **Wygeneruje playlistę w <3 minuty i będzie jej używał 3x/tydzień**

---

## Stage 1: Landing (0-30 sekund)

### What they see:
- **Headline:** "Twoja playlista do nauki w 30 sekund"
- **Value prop:** "Dopasowana do BPM i Twojego nastroju"
- **CTA:** "Zacznij teraz - za darmo"

### Friction Points:
- [ ] Issue: Zbyt wiele informacji na stronie
  - **Solution:** Tylko headline, 1 zdanie value, 1 przycisk
- [ ] Issue: Brak social proof
  - **Solution:** Dodaj "500+ studentów używa"

### Aha Moment:
> "To wygląda prosto - mogę mieć playlistę w 30 sekund"

---

## Stage 2: Sign-Up (1-3 minuty)

### Flow:
1. Email + Password
2. Confirm email (instant link)
3. Skip survey / Quick start
4. Enter app

### Friction Points:
- [ ] Issue: 10+ pytań w formularzu
  - **Solution:** Tylko email + hasło, reszta później
- [ ] Issue: Wymaganie weryfikacji 2FA
  - **Solution:** Nie wymagaj 2FA na start

### Aha Moment:
User sees main dashboard with "Get your playlist" button

### Follow-up Email (5 min after):
"**Cześć!** Kliknij tutaj, żeby dostać swoją pierwszą playlistę"

---

## Stage 3: First Data Input (3-5 minut)

### Input type:
Kwestionariusz (3 pytania)

### Required fields:
- [ ] **Co robisz?:** Nauka / Trening / Praca / Relaks (dropdown)
- [ ] **Jaki masz poziom energii?:** Slider (Low → High)
- [ ] **Jaki typ muzyki?:** Z tekstem / Instrumentalna (toggle)

### Friction Points:
- [ ] Issue: Zbyt wiele pytań
  - **Solution:** Maksymalnie 3, każde z domyślną wartością

### Aha Moment:
User clicks "Get Playlist" and sees matched results

---

## Stage 4: Processing (5-10 sekund)

### UX:
- Progress bar with text: "Dopasowujemy playlistę..."
- Shimmer effect na miejscu gdzie pojawi się playlista

### Error Handling:
- Jeśli YouTube nie działa → pokazuj komunikat + manualny link

---

## Stage 5: First Output (10-30 sekund) ⭐ MOST CRITICAL

### Output format:
- Nazwa playlisty + BPM
- YouTube embed (auto-play)
- Przycisk "Otwórz w Spotify" (tylko Starter+)

### Visual Design:
- User can instantly see: Playlist name, BPM, YouTube player
- User can instantly do: Play, Pause, Skip, Open Spotify

### Export Options:
- [ ] Copy link to playlist
- [ ] Share to social (opcjonalnie)

### Friction Points:
- [ ] Issue: Auto-play nie działa (browser block)
  - **Solution:** Wyraźny przycisk "Odtwórz"

### Aha Moment:
> "**Wow, to jest dokładnie to, czego potrzebowałem!**"

**⏱️ TOTAL TIME FROM LANDING TO AHA:** ~3-5 minutes (target: <5)

---

## Stage 6: Second Action (1-3 days later)

### Trigger:
- Email after 24h: "Gotów na kolejną playlistę?"
- In-app widget: "Wypróbuj z inną aktywnością"

### Message:
"**Hej!** Twoja playlista do nauki czeka na Ciebie"

### Goal:
User performs second action WITHOUT email reminder

### Success:
Return Rate >40%

### Friction Points:
- [ ] Issue: Brak follow-up
  - **Solution:** Automatyczny email po 24h

---

## Stage 7: Conversion (7-30 days)

### Trigger:
- Free trial ends (po 7 dni) OR hitting limit (5 playlist/dzień)

### Message:
"Twój darmowy okres się kończy. Zostajesz?"

### Pricing:
- **Starter:** $4.99/miesiąc
- **Pro:** $9.99/miesiąc

### CTA Button:
"Przejdź na Starter - $4.99/miesiąc"

### Friction Points:
- [ ] Issue: Zbyt drogie
  - **Solution:** A/B test $2.99 vs $4.99

### Aha Moment:
> "**Bez tego wrócę do szukania playlist na YouTube**"

---

## Summary Metrics

| Metryka | Cel | Status |
|---------|-----|--------|
| Landing → Sign-up conversion | >5% | [ ] |
| Sign-up → First Output | >70% | [ ] |
| First Output → Day 1 Return | >40% | [ ] |
| Trial → Paid | >3% | [ ] |

---

## Biggest Friction Point (The ONE thing killing conversions)

→ **Czas od wejścia do pierwszej playlisty (>5 minut)**

---

## Quick Wins (Changes that'll improve conversion in <4h)

1. **Uprość onboarding** (tylko email + hasło)
2. **Dodaj progress bar** podczas ładowania playlisty
3. **Auto-play YouTube** (po kliknięciu użytkownika)

---

## Common Journey Mistakes (Anti-Patterns)

| Mistake | Why It Fails | Fix |
|---------|-----------|-----|
| "Sign up → Settings → Dashboard → Upload Data" | User leaves before seeing value | Reorganize: Upload → Output → Then settings |
| "Download extension first" | Friction before value | Offer web version in MVP |
| "Invite team members before first success" | Solo user doesn't see why they'd invite | Let solo user win first, then suggest |
| "Beautiful onboarding slides (7+ screens)" | Users skip all slides | 1 tip after sign-up, rest learned by doing |

---

## Post-Launch Monitoring (Metryki, które śledź)

### Daily Metrics:
- □ Landing → Sign-up: ___% (target: >5%)
- □ Sign-up → First Output completion: ___% (target: >70%)
- □ Time from sign-up to first output: ___ min (target: <5)

### Weekly Metrics:
- □ Day 1 Return Rate: ___% (target: >40%)
- □ Day 7 Return Rate: ___% (target: >30%)
- □ Trial-to-Paid Conversion: ___% (target: >3%)

### Monthly Metrics:
- □ Churn Rate: ___% (target: <5%)
- □ Feature adoption: Which features are used most?

---

## Critical Checkpoints (Czerwone Flagi)

Jeśli którekolwiek z poniższych jest prawdziwe, journey jest zepsuta:

- 🚩 **Aha Moment pojawia się po >5 minutach** → Użytkownik odejdzie zanim to zobaczy
- 🚩 **Output wymaga klikania w settings zanim widać wartość** → Zbyt dużo friction'u
- 🚩 **Second return rate <30%** → Aha Moment był iluzoryczny
- 🚩 **Conversion rate <3%** → Problem nie w pricing, ale w journey
- 🚩 **Support tickets o "Jak to używać?"** → Onboarding nie wyjaśnia
- 🚩 **Users say "Pretty, but not useful"** → Piękny design, zły UX

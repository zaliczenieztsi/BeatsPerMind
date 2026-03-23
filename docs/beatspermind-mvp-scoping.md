# WF_MVP_Scoping - BeatsPerMind

## Drastyczne Cięcie Funkcji do Absolutnego Minimum

---

## Target Metrics (Co chcemy walidować?)

- [ ] Czy 10 użytkowników zapłaci $4.99/miesiąc?
- [ ] Czy time-to-value wynosi <3 minuty?
- [ ] Czy powracalność >40% tygodniowo?

---

## Core Loop (User Journey w MVP)

1. **Sign-up** (email + hasło) → 30 sekund
2. **Kwestionariusz** (aktywność, energia, typ) → 1 minuta
3. **Otrzymanie playlisty** + odtwórz → 30 sekund
4. **(Opcjonalnie) Focus Mode** → timer Pomodoro

---

## Tier 1: Must-Have (0-4 tygodnie)

| Funkcja | Opis | Czas |
|---------|------|------|
| User Registration | Email + Password | 2h |
| Kwestionariusz | 3 pytania (aktywność, energia, typ) | 3h |
| Playlisty z BPM | 8-10 playlist hardcoded | 4h |
| YouTube embed player | Odtwarzanie playlist | 3h |
| Timer Pomodoro | 25/5 preset | 4h |
| Focus Mode | Fullscreen timer | 4h |
| Basic Email Confirmation | Potwierdzenie email | 1h |

**Total Build Time: ~21 hours (3 dni robocze)**

---

## Tier 2: Should-Have (4-8 tygodni)

- [ ] Dźwięki tła (white noise, deszcz, kawiarnia)
- [ ] Custom czas timera (15/25/45/60 min)
- [ ] Spotify link (oprócz YouTube)
- [ ] Animacje w Focus Mode

---

## Tier 3: Nice-to-Have (Post-Launch)

- [ ] Dark Mode
- [ ] Save ulubione playlisty
- [ ] Statystyki użycia
- [ ] Więcej playlist

---

## 🚨 What's Intentionally Cut

- ❌ **Spotify API** - OAuth za skomplikowane
- ❌ **Firebase Auth** - email/password wystarczy
- ❌ **Rozbudowany admin panel**
- ❌ **Mobile app** - web first
- ❌ **Community features**

---

## The Brutal Cuts - Feature Execution Order

| Funkcja | Tier | Czas (h) | Cut? | Alternatywa / Hack |
|---------|------|----------|------|-------------------|
| User Authentication | 1 | 2 | ❌ | Email/Password |
| Social Login | 2 | 4 | ✅ CUT | Dodaj w Tier 2 |
| Playlisty z BPM | 1 | 4 | ❌ | Jeśli to core feature |
| YouTube Embed | 1 | 3 | ❌ | Działa z IFrame API |
| Timer Pomodoro | 1 | 4 | ❌ | Core feature |
| Focus Mode | 1 | 4 | ❌ | Core feature |
| Dźwięki tła | 2 | 6 | ✅ CUT | Dodaj później |
| Spotify Link | 2 | 4 | ✅ CUT | Dodaj później |
| Animacje | 3 | 8 | ✅ CUT | Tier 3 |

---

## The 80/20 Question

Dla każdego feature pytaj:
> *"Czy mogę dostarczyć 80% wartości dla użytkownika, obcinając 80% złożoności technicznej?"*

**Przykłady:**
- Zamiast "zaawansowanego systemu uprawnień" → Wszystkie użytkownicy mają dostęp (prototyp)
- Zamiast "beautifulnego, responsywnego UI" → Funkcjonalne, mobile-unfriendly, ale pracuje
- Zamiast "complex data sync" → Batch upload CSV raz dziennie

---

## Red Lines (What You Can't Cut)

1. ✅ **Działający core feature** – Produkt musi rzeczywiście rozwiązywać problem.
2. ✅ **Prawidłowa walidacja danych** – Jeśli użytkownik wprowadzi śmieci, system musi to obsłużyć bez crash'u.
3. ✅ **Bezpieczeństwo danych** – HTTPS, hashed passwords, basic GDPR compliance.
4. ✅ **Działająca płatność** – Bez tego nie wiesz, czy ktoś zapłaci.
5. ✅ **Opłacalna hosting** – Nie powinna kosztować >$20/miesiąc na starcie.

---

## Checklist Gotowości do Startu

- [ ] Całkowity time estimate nie przekracza 200 godzin
- [ ] 60%+ czasu pójdzie na core feature, nie infrastructure
- [ ] Masz plan, jak pozyskać 10-20 beta-testers bez budżetu
- [ ] Umiesz wyjaśnić, co robi Twój produkt w 1 zdaniu
- [ ] Wiesz, za co ludzie będą płacić ($X/miesiąc)
- [ ] Masz Plan B, jeśli hipoteza się nie potwierdzi

---

## Procedura Monitorowania (Post-Launch)

Po starcie MVP śledź:

1. **Time-to-First-Value:** Czy średni nowy użytkownik widzi wartość w <5 minut?
2. **Churn:** Jaki % użytkowników rezygnuje w ciągu miesiąca?
3. **Feature Requests:** Które 3 funkcje najczęściej są proszę dodane?
4. **Support Load:** Czy wspierasz produkt, czy produkt wspiera się sam?

**Decyzja:**
- Jeśli metrics są dobrze → Scale (dodaj Tier 2, pozyskaj więcej klientów)
- Jeśli metrics są słabe → Pivot lub Kill (nie wyrzucaj zasobów w dziurę)
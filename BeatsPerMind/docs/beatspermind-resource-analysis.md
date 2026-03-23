# WF_Resource_Analysis - BeatsPerMind

## Audyt Zasobów Niezbędnych do Realizacji

---

## 1. Preflight (Wejściowe Założenia)

- **Krótki opis produktu / 1-liner:** Playlisty do nauki/treningu z BPM + Focus Mode
- **Stage:** MVP (Idea → MVP)
- **Horyzont planowania:** 90 dni (3 miesiące)
- **Główny cel audytu:** Oszacować minimalny budżet MVP i zidentyfikować krytyczne integracje

---

## 2. Audyt Czasu (Time Audit)

| Kategoria | Minimalne (MVP) | Optymalne (PMF) | Bufor (20%) |
|-----------|-----------------|----------------|-------------|
| **Core development** | 20 dni | 30 dni | 6 dni |
| **Integracje** | 3 dni | 5 dni | 1 dzień |
| **DevOps / Infra** | 2 dni | 3 dni | 0.5 dnia |
| **Design & UX** | 3 dni | 5 dni | 1 dzień |
| **QA** | 2 dni | 3 dni | 0.5 dnia |
| **Growth & Ops** | 3 dni | 5 dni | 1 dzień |
| **RAZEM** | **33 dni** | **51 dni** | **10 dni** |

**Estymacja:** ~43 dni roboczych (6-8 tygodni przy 1 dev)

---

## 3. Audyt Budżetu (Budget Audit)

### Jednorazowe Koszty

| Koszt | Ilość | Cena | Razem |
|-------|-------|------|-------|
| Domain (domena .com) | 1 | $12/rok | $12 |
| Narzędzia (Figma free) | - | $0 | $0 |
| **RAZEM** | | | **$12** |

### Miesięczne Koszty

| Usługa | Plan | Cena |
|--------|------|------|
| Hosting (Vercel) | Free tier | $0 |
| Database (Supabase) | Free tier | $0 |
| Payment (Stripe) | 2.9% + $0.30 | Zmienny |
| Email (Resend) | Free tier | $0 |
| Analytics (Vercel) | Free tier | $0 |
| Monitoring (Sentry) | Free tier | $0 |
| **RAZEM** | | **$0-20** |

### Marketing / Acquisition

| Kanał | Budżet (miesiąc 1-3) |
|-------|---------------------|
| Organiczny (TikTok, Reddit) | $0 |
| Test paid ads (opcjonalnie) | $50-100 |

---

### Minimalny Budżet MVP (3 miesiące)

| Okres | Koszt |
|-------|-------|
| Miesiąc 1 | $0-50 |
| Miesiąc 2 | $0-50 |
| Miesiąc 3 | $0-50 |
| **RAZEM** | **$0-150** |

### Break-even Target

Przy $4.99/mo ARPU:
- Break-even: 3 płatnych użytkowników/miesiąc
- Cel: 20 płatnych użytkowników w miesiącu 3

---

## 4. Integracje Zewnętrzne

| Integracja | Krytyczność | Czas | Koszt |
|------------|-------------|------|-------|
| YouTube IFrame API | Krytyczna | 4h | $0 |
| Stripe Checkout | Krytyczna | 3h | 2.9% + $0.30 |
| Supabase Auth | Krytyczna | 2h | $0 |
| Resend (Email) | Opcjonalna | 1h | $0 |
| Google Analytics | Nice-to-have | 1h | $0 |

---

## 5. Macierz Priorytetów

| Funkcja | Wartość (1-5) | Trudność (1-5) | Priorytet |
|---------|---------------|----------------|-----------|
| Kwestionariusz | 5 | 2 | 🔴 Krytyczne |
| Playlisty + BPM | 5 | 3 | 🔴 Krytyczne |
| YouTube embed | 5 | 2 | 🔴 Krytyczne |
| Focus Mode | 4 | 3 | 🟡 Wysokie |
| Timer Pomodoro | 4 | 2 | 🔴 Krytyczne |
| Dźwięki tła | 3 | 3 | 🟡 Wysokie |
| Spotify link | 3 | 4 | 🟢 Po MVP |
| Animacje | 2 | 4 | 🟢 Po MVP |

---

## 6. Estymacje i Alokacja Zasobów

### Minimalny Zespół do Uruchomienia MVP

| Rola | FTE | Odpowiedzialność |
|------|-----|------------------|
| Developer (Ty) | 1.0 | Full-stack |

### Lista Zadań z Terminami

| Zadanie | Czas | Termin |
|---------|------|--------|
| Setup dev environment | 1d | Dzień 1 |
| Kwestionariusz UI | 2d | Dzień 2-3 |
| Playlisty + BPM logic | 3d | Dzień 4-6 |
| YouTube embed | 2d | Dzień 7-8 |
| Timer Pomodoro | 2d | Dzień 9-10 |
| Focus Mode | 2d | Dzień 11-12 |
| Stripe integration | 1d | Dzień 13 |
| Testing + Bug fixes | 3d | Dzień 14-16 |
| Deploy + Launch | 1d | Dzień 17 |

**Buffer:** ~5 dni na nieprzewidziane

---

## 7. Ryzyka i Mitigacje

| Ryzyko | Wpływ | Prawdopodobieństwo | Plan mitigacji |
|--------|-------|-------------------|----------------|
| YouTube zmieni API | Wysokie | Średnie | Fallback do mp3 z CDN |
| Stripe problems | Średnie | Niskie | Alternatywa: Paddle |
| Supabase limits | Niskie | Niskie | Upgrade do paid tier |
| Low conversion | Wysokie | Średnie | A/B test pricing |
| Low retention | Średnie | Średnie | Add features post-launch |

---

## 8. Plan Finansowy Krótkoterminowy

### Punkty Progowe (Runway)

Przy $0 miesięcznym koszcie i $0 przychodzie:
- **Runway:** Nieskończony (no burn rate)
- Cel: revenue positive od miesiąca 3

### Break-even Target

Przy $4.99 ARPU:
- Minimalni: 3 paid users
- Cel miesiąc 3: 20 paid users
- Cel miesiąc 6: 100 paid users

---

## 9. Checklista Wdrożeniowa (MVP-Ready)

- ✅ Krytyczne integracje zaimplementowane i przetestowane
- ✅ Automatyczny onboarding i tracking kluczowych eventów
- ✅ Podstawowy monitoring (uptime, error reporting)
- ✅ Mechanizm płatności i prosty billing
- ✅ Dokumentacja operacyjna dla działań supportu

---

## Output / Deliverables

- ✅ Arkusz z osobo-dniami i budżetem
- ✅ Lista integracji z oceną krytyczności i estymacjami
- ✅ Macierz priorytetów
- ✅ Krótki plan działania (30/90 dni)
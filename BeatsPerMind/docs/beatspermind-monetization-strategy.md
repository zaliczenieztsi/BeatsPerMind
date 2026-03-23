# WF_Monetization_Strategy - BeatsPerMind

## Projektowanie Modelu Cenowego i Strategii Przychodów

---

## Fundamentalna Zasada

> **Prosty model cenowy, który zarabia dziś, zawsze bije skomplikowany model, który _kiedyś_ zarabiać będzie.**

---

## Market Context

| Aspekt | Wartość |
|--------|---------|
| **Target Audience** | Studenci (18-30 lat) |
| **Buyer** | Student (individuals) |
| **Purchase Behavior** | Impulse Purchase (low friction) |
| **Average Contract Value (ACV)** | $4.99-9.99/miesiąc |
| **Competitive Pricing** | Freemium (Spotify), $1.99-9.99 (Forest, Focus@Will) |

---

## Faza Audytu Modelu

### Jaka jest jednostka wartości?

| Jednostka | Przykład | Pros | Cons |
|-----------|----------|------|------|
| **Per User/Seat** | $4.99/miesiąc za każdego użytkownika | Skaluje się z wartością | Klienci wahają się przed dodaniem użytkowników |
| **Per Feature/Module** | Premium = $4.99/mo, Pro = $9.99/mo | Proste do zarządzania | Klienci nigdy nie ulepszają |
| **Per Usage/Volume** | $0.01 za każde wygenerowane playlisty | Może generować dużo przychodów | Wymaga monitoringu |

**Rekomendacja:** Per Feature/Module (tiery) - najprostsze do rachunku i wdrażania.

---

## Architektura Modelu Cenowego

### Tier Structure (3-Level Standard)

```
┌─────────────────────────────────────────────────────────┐
│ FREE (Freemium)                                        │
├─────────────────────────────────────────────────────────┤
│ Price: $0/miesiąc                                      │
│ Purpose: Akwizycja użytkowników, walidacja produktu   │
│ Limits: 5 playlist/dzień                              │
│ Features: Core feature TYLKO (bez Spotify link)       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ STARTER ($4.99/miesiąc)                                │
├─────────────────────────────────────────────────────────┤
│ Price: $4.99/miesiąc (annual: $47.90 = -20% discount)  │
│ Purpose: First paid tier, early adopters               │
│ Limits: Unlimited playlisty                            │
│ Features: Core + Spotify link + Basic focus sounds     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PROFESSIONAL ($9.99/miesiąc)                            │
├─────────────────────────────────────────────────────────┤
│ Price: $9.99/miesiąc (annual: $95.90 = -20% discount)  │
│ Purpose: Power users, SMB                              │
│ Limits: Unlimited + priority                           │
│ Features: Core + wszystkie dźwięki + custom timer     │
│ Bonus: Priority support                                │
└─────────────────────────────────────────────────────────┘
```

---

## The Price Anchoring Trick

- **Starter = $4.99/mo** (entry-level, atrakuje "curious adopters")
- **Pro = $9.99/mo** (2x droższy, pozycjonowanie luxury)

**Dlaczego to działa?** Większość użytkowników będzie się cofać do Pro, bo Starter wydaje się "zbyt ograniczone" (anchor effect).

---

## Mechanizm Konwersji

### Gdzie Umieścić Paywall?

**Golden Rule:** Pokaż wartość PRZED paywallem.

- ✅ **Poprawnie:** Użytkownik może wygenerować playlistę w FREE, zobaczyć, że działa → Chce więcej → STARTER.
- ❌ **Błędnie:** Użytkownik rejestruje się, widzi limit "5 playlist/dzień" → Paywall. (Konwersja 2%).

### Moment Upsella (Micro-Moments)

1. **"Quota Limit"** – Użytkownik osiągnie limit FREE → "Przejdź na Starter, aby mieć nieograniczone playlisty".
2. **"Feature Locked"** – Chce użyć Spotify link → Dostępne w Starter.
3. **"Time-Based"** – Po 7 dniach: "Lubisz produkt? Subskrybuj Starter na 20% rabat".
4. **"Exit Intent"** – Jeśli kursor idzie do przycisku zamykającego: "Czekaj, Starter jest na 20% OFF przez 3 dni!"

---

## Revenue Forecast (Year 1)

```
Miesiąc 1-2: $0 (beta, launch)
Miesiąc 3: $200 (40 paid users @ $4.99)
Miesiąc 6: $1,000 (200 paid users)
Miesiąc 12: $3,000-5,000 (600-1000 paid users)
```

**Co jest realistyczne?** Konwersja z FREE do PAID to 2-5% (jeśli dobrze robisz marketing).

---

## Payment Infrastructure

| Element | Rozwiązanie |
|---------|-------------|
| **Gateway** | Stripe Checkout |
| **Refund Policy** | 14 dni, pełny refund |
| **Failed Payment Retry** | Automated (Stripe) |
| **VAT** | Paddle (jeśli EU) lub Stripe (US) |

---

## Operacyjne Red Lines

- ❌ No custom pricing (standaryzacja > zmiana)
- ❌ No payment plans (<$1000/mo)
- ❌ No "try before you buy" bez time limit (→ churn)
- ✅ Annual discount (20% = strata na LTV + retention)
- ✅ Self-serve upgrade (nie chcesz maili o "zmianę planu")

---

## Propozycje Cenowe do Testów

1. **A/B Test #1:** $2.99 vs $4.99 (Starter)
2. **A/B Test #2:** $7.99 vs $9.99 (Pro)
3. **A/B Test #3:** Monthly vs Annual (20% discount)

---

## Go-Live Checklist (Przed Uruchomieniem Płatności)

- ✅ **Stripe Account**
- ✅ **Pricing Page** (czytelna tabelka, bez "contact sales")
- ✅ **Terms of Service + Privacy Policy**
- ✅ **Refund Policy** (14 dni pełny refund)
- ✅ **Onboarding Email**
- ✅ **Upgrade Flow** (User może zmienić tier bez kontaktu z supportem)
- ✅ **Failed Payment Retry** (Stripe robi to automatycznie)
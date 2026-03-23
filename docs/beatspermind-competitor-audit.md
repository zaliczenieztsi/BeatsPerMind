# WF_Competitor_Audit - BeatsPerMind

## Audyt Konkurencji

### Podsumowanie
- **Problem:** Studenci tracą czas na szukanie odpowiedniej muzyki do nauki/treningu
- **Target ICP:** Studenci (18-30 lat), osoby uczące się
- **Top insight:** Rynek nasycony pojedynczymi funkcjami, ale brakuje integracji wszystkiego w jednym miejscu

---

## Lista Konkurentów

| # | Nazwa | URL | Kategoria |
|---|-------|-----|----------|
| 1 | Spotify | spotify.com | SaaS / Marketplace |
| 2 | YouTube Music | music.youtube.com | SaaS / Marketplace |
| 3 | Forest | forestapp.cc | SaaS |
| 4 | Focus@Will | focuswill.com | SaaS |
| 5 | Brain.fm | brain.fm | SaaS |
| 6 | Endel | endel.io | SaaS |
| 7 | MyNoise | mynoise.net | SaaS |
| 8 | Noisli | noisli.com | SaaS |

---

## Per-Competitor Analysis

### 1. Spotify
- **Primary proposition:** Największa platforma muzyczna z playlistami
- **Price & monetization:** Free ($0), Premium ($10.99/mo)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste (login + search)
- **Integrations:** Apple, Google, Alexa
- **Support:** Email, chat
- **Observed Weaknesses:** 
  - Brak BPM filter
  - Brak Focus Mode / Pomodoro
  - Playlisty ogólne, nie "study-specific"
  - Brak dźwięków tła (white noise, rain)

### 2. Forest
- **Primary proposition:** Gamified focus timer z sekwami rosnącymi
- **Price & monetization:** $1.99/miesiąc (iOS), $3.99/miesiąc (Android)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste (3 minuty)
- **Integrations:** N/A
- **Support:** Email
- **Observed Weaknesses:**
  - Brak integracji muzyki (tylko dźwięki natury w wersji premium)
  - Tylko timer, bez playlist
  - Brak BPM
  - Fokus na gamifikacji, nie na muzyce

### 3. Focus@Will
- **Primary proposition:** Muzyka zoptymalizowana neuroscience do skupienia
- **Price & monetization:** $9.99/miesiąc
- **Time-to-value:** Natychmiast (po wyborze typu muzyki)
- **Onboarding:** Medium (wywiad o preferencjach)
- **Support:** Email
- **Observed Weaknesses:**
  - Brak BPM
  - Brak Pomodoro timer
  - Brak YouTube/Spotify integracji
  - Subscription-only (brak freemium)

### 4. Brain.fm
- **Primary proposition:** AI-generated muzyka do fokusu/snu/relaksu
- **Price & monetization:** $7.95/miesiąc lub $79.95/rok
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste
- **Observed Weaknesses:**
  - Brak BPM
  - Brak Pomodoro
  - Brak playlist z YouTube/Spotify
  - Tylko AI-generated (brak wyboru)

### 5. Noisli
- **Primary proposition:** Dźwięki tła do skupienia i snu
- **Price & monetization:** Freemium ($0-14.99/miesiąc)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste
- **Observed Weaknesses:**
  - Brak muzyki (tylko dźwięki)
  - Brak BPM
  - Brak Pomodoro
  - Brak YouTube/Spotify

---

## Competitive Matrix

| Kryterium | Spotify | Forest | Focus@Will | Brain.fm | Noisli | BeatsPerMind |
|-----------|---------|--------|------------|----------|--------|--------------|
| Playlisty | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| BPM display | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Focus Mode | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Dźwięki tła | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| YouTube embed | N/A | ❌ | ❌ | ❌ | ❌ | ✅ |
| Pomodoro | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Freemium | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |

---

## Gaps & Opportunities

### Immediate gaps (quick wins):
1. ✅ Integracja BPM + Focus Mode + Playlisty w jednym miejscu
2. ✅ YouTube embed (darmowe playlisty)
3. ✅ Dźwięki tła (white noise, deszcz, kawiarnia)

### Differentiation angles:
- Skupienie na niszy "studenci do nauki"
- BPM jako unikalna funkcja
- Połączenie muzyki + timera + dźwięków

### Monetization openings:
- Freemium z reklamami (YouTube)
- Premium z dodatkowymi playlistami
- B2B API dla EdTech

---

## [RISKS]

### Market risks:
- Niska willingness-to-pay (studenci)
- Big Tech może skopiować

### Execution risks:
- Wymaga ciągłego aktualizowania playlist
- YouTube może zablokować embeds

### Competitor response risk:
- Wysokie - Spotify/YouTube mogą dodać te funkcje w każdej chwili

---

## Recommendations (dla Solo-Deva)

### Priority 1 (validate):
- Landing page + pricing test (one-liner + CTA)
- Zmierz CTR i pre-signups

### Priority 2 (build MVP):
- 1 core flow z automatyzacją
- Nie więcej niż 1 integracja (YouTube)

### Priority 3 (distribution):
- 3-kanalowy test: TikTok, Reddit, cold outreach

### Tech suggestions:
- No-code/low-code dla prototypu
- Host na serverless (Vercel)
- Automatyzuj onboarding e-mailem

---

## Metrics to Track

- **Acquisition:** landing CTR, signups/day
- **Activation:** time-to-first-value, % who reach core outcome
- **Revenue:** conversion to paid, ARPU
- **Efficiency:** support tickets per 100 users

---

## Next Steps

**Sugerowany kolejny workflow:** `WF_ICP_Persona` - audyt wskazuje na konkretną niszę (studenci), zdefiniuj ICP i zacznij outreach.

**Szybki eksperyment:** Uruchom jedną stronę docelową z płatnym ruchem (mały budżet), cel: 20 pre-signupów w 7 dni
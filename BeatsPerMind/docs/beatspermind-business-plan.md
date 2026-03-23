# BeatsPerMind - Pełna Analiza Biznesowa

**Produkt:** Aplikacja do rekomendacji playlist dopasowanych do aktywności i BPM z Focus Mode (Pomodoro + dźwięki tła)
**Wersja dokumentu:** 1.0
**Data:** 2024

---

## 1. WF_ICE_Ranking (Metoda ICE)

### Podsumowanie Rankingu

| Pomysł | Impact | Confidence | Ease | Suma ICE | Priorytet |
|--------|--------|------------|------|----------|-----------|
| **BeatsPerMind (Playlist App)** | 8 | 6 | 7 | **21** | HIGH |
| Keto Recipe App | 6 | 5 | 6 | 17 | MEDIUM |

### Uzasadnienie ocen

**Impact (8/10):**
- Wysoki "wow factor" - połączenie muzyki + Pomodoro + Focus Mode w jednym miejscu to rzadka kombinacja
- Bardzo wysoka wartość użytkowa dla studentów (łączy przyjemne z pożytecznym)
- Średnia monetyzacja (freemium z premium playlistami)

**Confidence (6/10):**
- Średnia unikalność - istnieją podobne aplikacje, ale rzadko w formie MVP
- Wyzwanie z integracjami (Spotify API wymaga auth, YouTube embed prostsze)
- Wąska, ale dobrze zdefiniowana nisza (studenci)

**Ease (7/10):**
- Niska-średnia złożoność techniczna
- Firebase/Supabase idealne do przechowywania playlist
- Realistyczne dla wersji podstawowej w 15h

### Top Założenia do Weryfikacji:
1. Studenci faktycznie szukają playlist do nauki
2. BPM jest istotnym czynnikiem doboru muzyki
3. Focus Mode z dźwiękami tła zwiększa produktywność
4. Użytkownicy wracają do aplikacji regularnie

### Rekomendowane Następne Kroki:
- Eksperyment: Landing page z kwestionariuszem → 20 pre-signupów w 7 dni
- Czas: 2 tygodnie, Koszt: $0 (organiczny ruch)

---

## 2. WF_Kill_The_Idea (Pre-Mortem)

### Analiza 5 Zabójczych Filtrów

**Filtr 1: Distribution Hell (Piekło Dystrybucji)**
- ✅ Dotarcie do studentów przez social media (Instagram, TikTok) może być darmowe
- ✅ Niska bariera - organic marketing wśród studentów
- ❌ Konkurencja o uwagę: Spotify, YouTube, Apple Music - giganci

**Filtr 2: Feature, Not a Product**
- ⚠️ Playlisty + BPM to funkcja w Spotify. Focus Mode to funkcja w Forest/Headstep
- ⚠️ Ryzyko bycia "kolejną appką"
- ✅ Kombinacja: kwestionariusz → BPM → Focus Mode = unikalna propozycja

**Filtr 3: The Support Trap**
- ✅ Niska złożoność - YouTube embed, timer, dźwięki
- ✅ Automatyczne skalowanie - Firebase, YouTube API

**Filtr 4: The "Nice-to-Have" Vitamin**
- ✅ Studenci NAUKA = stres, potrzeba skupienia - to realny problem
- ✅ Mitigacja: aplikacja rozwiązuje problem "spędzam 30 min szukając playlisty"

**Filtr 5: Zero-Moat**
- 🔴 Bardzo wysoka kopiowalność - każdy dev może zrobić w weekend
- 🔴 Brak unikalnych danych
- 🔴 Brak network effects

### 🚩 RED FLAGS (Krytyczne):
1. **Zero-Moat** - każdy może skopiować w weekend
2. **Zależność od zewnętrznych platform** - YouTube/Spotify mogą zmienić API
3. **Kopiowalność przez Big Tech** - Spotify/YouTube mogą dodać te funkcje

### ⚠️ YELLOW FLAGS (Ostrzegawcze):
1. Feature, not a Product
2. Monetyzacja niejasna
3. Retention ryzyko - brak powodu do codziennego użycia

### 💀 Death Scenario

> *Po 4 miesiącach: Spotify wprowadza "Focus Playlists" z BPM i Timerem, YouTube dodaje "Study Mode" z Pomodoro. Wszystkie funkcje BeatsPerMind są teraz "free" w Big Tech. Projekt umiera cichutko.*

### Verdict: **PIVOT** - Wymagana zmiana fundamentów (jako komercyjny SaaS)

### Sugerowany Pivot:
- **Option A:** BeatsPerMind dla Developerów - community wokół "muzyka do kodowania"
- **Option B:** B2B API dla EdTech - white-label dla platform edukacyjnych
- **Option C:** Narzędzie dla Content Creatorów - "study with me" playlists

---

## 3. WF_Competitor_Audit

### Podsumowanie
- **Problem:** Studenci tracą czas na szukanie odpowiedniej muzyki do nauki/treningu
- **Target ICP:** Studenci (18-30 lat), osoby uczące się
- **Top insight:** Rynek nasycony pojedynczymi funkcjami, ale brakuje integracji wszystkiego w jednym miejscu

### Lista Konkurentów

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

### Analiza Konkurentów

#### 1. Spotify
- **Primary proposition:** Największa platforma muzyczna z playlistami
- **Price & monetization:** Free ($0), Premium ($10.99/mo)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste (login + search)
- **Observed Weaknesses:** 
  - Brak BPM filter
  - Brak Focus Mode / Pomodoro
  - Playlisty ogólne, nie "study-specific"
  - Brak dźwięków tła (white noise, rain)

#### 2. Forest
- **Primary proposition:** Gamified focus timer z sekwami rosnącymi
- **Price & monetization:** $1.99/miesiąc (iOS), $3.99/miesiąc (Android)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste (3 minuty)
- **Observed Weaknesses:**
  - Brak integracji muzyki (tylko dźwięki natury w wersji premium)
  - Tylko timer, bez playlist
  - Brak BPM
  - Fokus na gamifikacji, nie na muzyce

#### 3. Focus@Will
- **Primary proposition:** Muzyka zoptymalizowana neuroscience do skupienia
- **Price & monetization:** $9.99/miesiąc
- **Time-to-value:** Natychmiast (po wyborze typu muzyki)
- **Onboarding:** Medium (wywiad o preferencjach)
- **Observed Weaknesses:**
  - Brak BPM
  - Brak Pomodoro timer
  - Brak YouTube/Spotify integracji
  - Subscription-only (brak freemium)

#### 4. Brain.fm
- **Primary proposition:** AI-generated muzyka do fokusu/snu/relaksu
- **Price & monetization:** $7.95/miesiąc lub $79.95/rok
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste
- **Observed Weaknesses:**
  - Brak BPM
  - Brak Pomodoro
  - Brak playlist z YouTube/Spotify
  - Tylko AI-generated (brak wyboru)

#### 5. Noisli
- **Primary proposition:** Dźwięki tła do skupienia i snu
- **Price & monetization:** Freemium ($0-14.99/miesiąc)
- **Time-to-value:** Natychmiast
- **Onboarding:** Proste
- **Observed Weaknesses:**
  - Brak muzyki (tylko dźwięki)
  - Brak BPM
  - Brak Pomodoro
  - Brak YouTube/Spotify

### Competitive Matrix

| Kryterium | Spotify | Forest | Focus@Will | Brain.fm | Noisli | BeatsPerMind |
|-----------|---------|--------|------------|----------|--------|--------------|
| Playlisty | ✅ | ❌ | ✅ | ❌ | ❌ | ✅ |
| BPM display | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Focus Mode | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Dźwięki tła | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| YouTube embed | N/A | ❌ | ❌ | ❌ | ❌ | ✅ |
| Pomodoro | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Freemium | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ |

### Gaps & Opportunities

**Immediate gaps (quick wins):**
1. ✅ Integracja BPM + Focus Mode + Playlisty w jednym miejscu
2. ✅ YouTube embed (darmowe playlisty)
3. ✅ Dźwięki tła (white noise, deszcz, kawiarnia)

**Differentiation angles:**
- Skupienie na niszy "studenci do nauki"
- BPM jako unikalna funkcja
- Połączenie muzyki + timera + dźwięków

**Monetization openings:**
- Freemium z reklamami (YouTube)
- Premium z dodatkowymi playlistami
- B2B API dla EdTech

### [RISKS]

**Market risks:**
- Niska willingness-to-pay (studenci)
- Big Tech może skopiować

**Execution risks:**
- Wymaga ciągłego aktualizowania playlist
- YouTube może zablokować embeds

**Competitor response risk:**
- Wysokie - Spotify/YouTube mogą dodać te funkcje w każdej chwili

---

## 4. WF_ICP_Persona

### Definicja ICP

**Kto:** Studenci (18-30 lat), uczący się na uniwersytetach i w szkołach
**Rola:** Student, uczeń, osoba ucząca się do egzaminów
**Co:** Potrzebuje skupienia podczas nauki/treningu
**Ból:** Traci 15-30 minut dziennie na szukanie odpowiedniej muzyki
**Decision Criteria:** Szybkość, ease of use, skuteczność (czy naprawdę pomaga się skupić)

### Karta ICP (1-stronicowa)

```
ICP CARD

Kto: Studenci (18-30 lat), uczący się na kierunkach 
     humanistycznych i ścisłych

Co robi: Uczy się (przygotowuje do egzaminów, 
          pisze prace, odrabia lekcje)

Ból: 
- "Spędzam 20 minut szukając playlisty na YouTube"
- "Nie mogę się skupić - ciągle zmieniam utwory"
- "Potrzebuję ciszy, ale tła potrzebuję"

Trigger:
- Egzaminy (sesja, sesja poprawkowa)
- Deadline pracy dyplomowej
- Codzienna nauka (popołudnie)

Decision Criteria:
- "Czy to działa w 5 minut?"
- "Czy mam playlistę od razu?"
- "Czy timer działa?"

KPIs:
- Czas na znalezienie playlisty: <2 min
- Czas skupienia: +30% (mierzony przez siebie)
- Powrót do aplikacji: >3x/tydzień
```

### Problem Matrix

| Problem | Trigger | Value | Impact | Confidence | Ease | Priority | Experiment |
|---------|---------|-------|--------|------------|------|----------|------------|
| Szukanie playlisty | Codzienna nauka | 20 min/dzień = 10h/miesiąc | 9 | 8 | 8 | **576** | Landing page |
| Zmienianie muzyki | Brak skupienia | 5 min/sesja | 7 | 6 | 9 | 378 | A/B test |
| Brak timera | Zapominanie o przerwie | 15 min/ dzień | 6 | 5 | 7 | 210 | Feature poll |
| Dźwięki otoczenia | Hałas w pokoju | Utrata fokusu | 5 | 4 | 8 | 160 | User interview |

### Suggested Experiments:
1. **Landing page + pre-signup** - test komunikacji i zainteresowania (1 tydzień, $0)
2. **5-10 wywiadów z studentami** - potwierdzenie value metrics (2 tygodnie, $0)
3. **Small paid ad test** - kieruj na "muzyka do nauki", mierz CTR → signup (1 tydzień, $50)

---

## 5. WF_Job_To_Be_Done

### Hipoteza Problem:
Studenci potrzebują szybko uzyskać playlistę dopasowaną do swojej aktywności i poziomu energii, żeby móc się skupić bez straty czasu na szukanie muzyki.

### Job Snapshots (5 przykładów)

**Snapshot 1: Sesja egzaminacyjna**
- **Context:** Wieczór przed egzaminem, musi nauczyć się 50 stron w 4 godziny
- **Motivation:** "Potrzebuję czegoś, co mnie zmobilizuje, ale nie rozprasza"
- **Desired Outcome:** "Playlist, która ma 70-90 BPM i pozwoli mi siedzieć 2h bez zmiany"
- **Current Solution:** YouTube → "study lo-fi" → losowa playlista
- **Barriers:** Częste zmiany utworów, reklamy, brak ciągłości
- **Trigger:** 24h przed egzaminem
- **Value:** 30 minut oszczędzone każdego wieczoru sesyjnego
- **Confidence:** 8/10

**Snapshot 2: Codzienna nauka**
- **Context:** Popołudnie, 3 godziny wolne między zajęciami
- **Motivation:** "Chcę uczyć się efektywnie, ale bez nużącej ciszy"
- **Desired Outcome:** "Automatycznie dobiera muzykę do mojego nastroju"
- **Current Solution:** Spotify → tworzy własne playlisty → zapomina o nich
- **Barriers:** Zapominanie o playlistach, brak BPM
- **Trigger:** Codziennie 14:00-17:00
- **Value:** 15 minut/dzień = 7.5h/miesiąc
- **Confidence:** 7/10

**Snapshot 3: Trening**
- **Context:** Rano, przed siłownią lub bieganiem
- **Motivation:** "Potrzebuję energii, żeby ćwiczyć"
- **Desired Outcome:** "Playlist z 140-160 BPM do treningu"
- **Current Solution:** YouTube → "workout music" → losowe
- **Barriers:** Reklamy, słaba jakość, przerwy
- **Trigger:** 3-4x/tydzień rano
- **Value:** 10 minut oszczędzone
- **Confidence:** 6/10

**Snapshot 4: Praca zdalna**
- **Context:** Praca z domu, potrzebuje skupienia przez 2-3 godziny
- **Motivation:** "Chcę coś w tle, ale nie za głośno"
- **Desired Outcome:** "Dźwięki tła + timer Pomodoro w jednej apce"
- **Current Solution:** Oddzielne appki (Forest + Noisli)
- **Barriers:** Musi przełączać się między appkami
- **Trigger:** Praca zdalna (2-3x/tydzień)
- **Value:** 5 minut oszczędzone + lepszy fokus
- **Confidence:** 5/10

**Snapshot 5: Relaks**
- **Context:** Wieczór po ciągłym dniu nauki
- **Motivation:** "Chcę odpocząć, ale nie spać"
- **Desired Outcome:** "Spokojna muzyka do relaksu"
- **Current Solution:** YouTube → lo-fi relaxing
- **Barriers:** Brak ciągłości, reklamy
- **Trigger:** Codziennie 21:00+
- **Value:** 5 minut oszczędzone
- **Confidence:** 5/10

### Syntetyczna Analiza

**Top 3 Jobs:**
1. Szybko uzyskać playlistę do nauki (15-30 min szukania → <2 min)
2. Utrzymać skupienie podczas nauki (timer Pomodoro + muzyka)
3. Mieć dźwięki tła do maskowania hałasu

**Top 3 Desired Outcomes:**
- "Mam playlistę w <2 minuty, która działa"
- "Timer Pomodoro z muzyką w jednej apce"
- "Mogę się skupić 2-3 godziny bez przerwy"

**Primary Pain Drivers:**
1. Tracenie czasu na szukanie playlisty (15-30 min/dzień)
2. Przełączanie się między appkami (muzyka + timer + dźwięki)
3. Brak ciągłości muzyki (reklamy, losowe utwory)

**Variability:**
- Różne poziomy energii → różne BPM
- Różne aktywności → różne typy playlist
- Różne preferencje muzyczne → wybór gatunku

### Core Job-to-be-Done:
**"Szybko uzyskać dopasowaną playlistę do mojej aktywności i poziomu energii, żeby móc się skupić bez marnowania czasu na szukanie muzyki."**

### Minimum Success Criteria (MVP):
1. Kwestionariusz → playlist w <2 minuty
2. YouTube embed działa bez reklam
3. Timer Pomodoro działa poprawnie
4. Mobile-friendly

### Quick Experiments:
1. **Landing page** - "Get your study playlist in 30 seconds"
2. **Pre-signup form** - pytanie o aktywność, email
3. **Manual concierge** - 3 studentów dostaje playlistę na email

---

## 6. WF_MVP_Scoping

### Target Metrics (Co chcemy walidować?)
- [ ] Czy 10 użytkowników zapłaci $4.99/miesiąc?
- [ ] Czy time-to-value wynosi <3 minuty?
- [ ] Czy powracalność >40% tygodniowo?

### Core Loop (User Journey w MVP)
1. Sign-up (email + hasło) → 30 sekund
2. Kwestionariusz (aktywność, energia, typ) → 1 minuta
3. Otrzymanie playlisty + odtwórz → 30 sekund
4. (Opcjonalnie) Focus Mode → timer Pomodoro

### Tier 1 Features (Must-Have - 0-4 tygodnie)
- [x] User Registration (Email + Password)
- [x] Kwestionariusz (3 pytania)
- [x] Playlisty z BPM (8-10 playlist hardcoded)
- [x] YouTube embed player
- [x] Timer Pomodoro (25/5 preset)
- [x] Focus Mode (basic, fullscreen)
- [x] Basic Email Confirmation

**Total Build Time: ~40-50 hours**

### Tier 2 Features (First Update - po feedbacku)
- [ ] Dźwięki tła (white noise, deszcz, kawiarnia)
- [ ] Custom czas timera (15/25/45/60 min)
- [ ] Spotify link (oprócz YouTube)
- [ ] Animacje w Focus Mode

### Tier 3 Features (Post-Launch)
- Dark Mode
- Save ulubione playlisty
- Statystyki użycia
- Więcej playlist

### 🚨 What's Intentionally Cut
- ❌ Spotify API (OAuth - za skomplikowane)
- ❌ Firebase Auth (email/password wystarczy)
- ❌ Rozbudowany admin panel
- ❌ Mobile app (web first)
- ❌ Community features

### Tech Stack
- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** Supabase (PostgreSQL) - Free tier
- **Auth:** NextAuth.js / Supabase Auth
- **Payment:** Stripe Checkout
- **Hosting:** Vercel (free tier)
- **Video/Audio:** YouTube IFrame API (free)

---

## 7. WF_Monetization_Strategy

### Market Context

| Aspekt | Wartość |
|--------|---------|
| Target Audience | Studenci (18-30 lat) |
| Buyer | Student (individuals) |
| Purchase Behavior | Impulse Purchase (low friction) |
| Average Contract Value (ACV) | $4.99-9.99/miesiąc |
| Competitive Pricing | Freemium (Spotify), $1.99-9.99 (Forest, Focus@Will) |

### Pricing Model

**Primary Unit:** Per Feature/Module
**Payment Cycle:** Monthly (with 20% discount for Annual)

### Tier Structure

| | Free | Starter | Pro |
|---|------|---------|-----|
| **Price** | $0 | $4.99/mo | $9.99/mo |
| **Playlisty** | 5 | Unlimited | Unlimited |
| **YouTube** | ✅ | ✅ | ✅ |
| **Spotify Link** | ❌ | ✅ | ✅ |
| **Timer Pomodoro** | ✅ | ✅ | ✅ |
| **Dźwięki tła** | ❌ | ✅ | ✅ |
| **Focus Mode** | ✅ | ✅ | ✅ |
| **Custom Timer** | ❌ | ✅ | ✅ |
| **Support** | Community | Email (24h) | Priority (4h) |

### Conversion Strategy

1. **Freemium Acquisition:** Limit = 5 playlist/dzień
2. **Upsell Moments:**
   - "Chcesz Spotify link? Przejdź na Starter"
   - "Chcesz dźwięki tła? Przejdź na Starter"
   - Po 7 dniach: "Lubisz aplikację? Starter jest teraz taniej"
3. **Annual Incentive:** 20% discount ($47.90/rok vs $59.88/rok)

### Revenue Forecast (Year 1)

```
Miesiąc 1-2: $0 (beta, launch)
Miesiąc 3: $200 (40 paid users @ $4.99)
Miesiąc 6: $1,000 (200 paid users)
Miesiąc 12: $3,000-5,000 (600-1000 paid users)
```

### Payment Infrastructure
- **Gateway:** Stripe Checkout
- **Refund Policy:** 14 dni, pełny refund
- **Failed Payment Retry:** Automated (Stripe)
- **VAT:** Paddle (jeśli EU) lub Stripe (US)

### Operacyjne Red Lines
- ❌ No custom pricing
- ❌ No payment plans
- ❌ No "try before you buy" bez time limit
- ✅ Annual discount (20% = retention + LTV)
- ✅ Self-serve upgrade

---

## 8. WF_Tech_Stack_Audit

### Rekomendacja: Starter Stack

```
Frontend:        Next.js 14 + TypeScript + Tailwind CSS
Backend:         Next.js API Routes
Database:        Supabase PostgreSQL (Free tier - 500MB)
Auth:            Supabase Auth
Payment:         Stripe Checkout
Email:           Resend (Free tier - 3000/miesiąc)
File Storage:    Supabase Storage (1GB free)
Analytics:       Vercel Analytics
Monitoring:      Sentry (Free tier)

Total Cost:      $0-20/miesiąc (first 3 months)
Setup Time:      40-60 hours
Time-to-Launch:  4-6 weeks
Maintenance:     2-3h/miesiąc
```

### Warstwa po Warstwie

**Frontend:**
- Next.js 14 (App Router)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Shadcn UI (komponenty)

**Backend:**
- Next.js API Routes (serverless functions)
- Supabase (PostgreSQL + Auth + Storage)

**Integracje:**
- YouTube IFrame API (darmowe)
- Stripe Checkout (2.9% + $0.30)
- Resend (darmowe 3000 emaili/miesiąc)

### Backup Plan
- Database: Supabase automated daily backups
- Hosting: Vercel (automatic deployments)
- Monitoring: Sentry (error tracking)
- CDN: Cloudflare (free tier)

### Red Lines (What You Can't Cut)
- ✅ HTTPS (Vercel auto)
- ✅ Database backups (Supabase auto)
- ✅ Error tracking (Sentry free)
- ✅ Stripe integration

---

## 9. WF_Resource_Analysis

### Audyt Czasu (Person-Days)

| Kategoria | Minimalne (MVP) | Optymalne (PMF) | Bufor (20%) |
|-----------|-----------------|----------------|-------------|
| Core development | 20 dni | 30 dni | 6 dni |
| Integracje | 3 dni | 5 dni | 1 dzień |
| DevOps / Infra | 2 dni | 3 dni | 0.5 dnia |
| Design & UX | 3 dni | 5 dni | 1 dzień |
| QA | 2 dni | 3 dni | 0.5 dnia |
| Growth & Ops | 3 dni | 5 dni | 1 dzień |
| **RAZEM** | **33 dni** | **51 dni** | **10 dni** |

**Estymacja: ~43 dni roboczych (6-8 tygodni przy 1 dev)**

### Audyt Budżetu

**Jednorazowe koszty:**
- Domain: $12/rok
- Tools (figma, etc): $0 (free tiers)

**Miesięczne koszty:**
- Hosting: $0 (Vercel free)
- Database: $0 (Supabase free do limitu)
- Payment: 2.9% + $0.30 per transaction
- Email: $0 (Resend free)
- Analytics: $0 (Vercel analytics)
- Monitoring: $0 (Sentry free)

**Marketing / Acquisition:**
- Pierwsze 3 miesiące: $0 (organiczny)
- Test paid ads: $50-100/miesiąc (opcjonalnie)

**Minimalny budżet MVP (3 miesiące):**
- $0-50 (głównie domain + opcjonalnie ads)
- Cashflow dodatni od miesiąca 3-4

### Integracje Zewnętrzne

| Integracja | Krytyczność | Czas | Koszt |
|------------|-------------|------|-------|
| YouTube API | Krytyczna | 4h | $0 |
| Stripe | Krytyczna | 3h | 2.9% + $0.30 |
| Supabase Auth | Krytyczna | 2h | $0 |
| Email (Resend) | Opcjonalna | 1h | $0 |
| Google Analytics | Nice-to-have | 1h | $0 |

### Macierz Priorytetów

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

### Ryzyka i Mitigacje

| Ryzyko | Wpływ | Prawdopodobieństwo | Plan mitigacji |
|--------|-------|-------------------|----------------|
| YouTube zmieni API | Wysokie | Średnie | Fallback do mp3 z CDN |
| Stripe problems | Średnie | Niskie | Alternatywa: Paddle |
| Supabase limits | Niskie | Niskie | Upgrade do paid tier |
| Low conversion | Wysokie | Średnie | A/B test pricing |

### Break-even Target

 przy $4.99/mo ARPU:
- Break-even: 3 płatnych użytkowników/miesiąc
- Cel: 20 płatnych użytkowników w miesiącu 3

---

## 10. WF_GTM_Strategy

### Pre-flight

**Produkt:** BeatsPerMind - Playlisty do nauki/treningu z BPM + Focus Mode
**Stage:** MVP (Idea → MVP)
**Główny cel GTM:** 100 płatnych użytkowników w 6 miesięcy

### ICP (Ideal Customer Profile)

**Kto:** Studenci (18-25 lat), uczący się na kierunkach humanistycznych i ścisłych
**Gdzie:** Polska, UE (start), globalnie (faza 2)
**Ból:** Traci 15-30 min dziennie na szukanie muzyki do nauki
**Wartość:** Oszczędza 10h/miesiąc = $X oszacowana wartość

### Jobs To Be Done:
"Gotta quickly get a playlist matched to my activity and energy level to focus without wasting time searching for music."

### Value Hypothesis:
- 30 minut dziennie oszczędzone (15-30 min × 20 dni = 6-10h/miesiąc)
- Lepszy fokus = lepsze oceny = mniej stresu

### One-liner:
"Twoja playlista do nauki w 30 sekund - dopasowana do BPM i Twojego nastroju."

### 3 Kluczowe Korzyści:
1. **Playlist w 30 sekund** - bez szukania, bez reklam
2. **Timer Pomodoro w zestawie** - skupienie bez przełączania app
3. **Dźwięki tła do wyboru** - white noise, deszcz, kawiarnia

### Proof & Trust:
- Beta testers (studenci)
- Case study: "Jak w 2 tygodnie miałem 100 użytkowników"
- Social proof: polubienia, udostępnienia

### Kanały Pozyskania

**Wysoki priorytet (testy natychmiast):**
1. **TikTok/Reels** - "Get your study playlist in 30 seconds" (organiczne, 0 PLN)
2. **Reddit (r/study, r/college)** - post z value + link (organiczne)
3. **Influencer marketing** - micro-influencerzy studencki (500-2000 PLN/post)

**Średni priorytet:**
4. **SEO Blog** - "Jaką muzykę do nauki?" (długoterminowe)
5. **Discord servers** - studenckie serwery (organiczne)
6. **Facebook Groups** - grupy studenckie (organiczne)

**Długoterminowy:**
7. **Partnerstwa z uczelniami** - "free dla studentów"
8. **EdTech partnerships** - white-label API

### Plan Uruchomienia

**Pre-launch (Tydzień -2 do 0):**
- Landing page z waitlist
- Teaser na TikTok
- 20 pre-signupów cel

**Launch (Tydzień 0):**
- Announcement post (TikTok, Reddit, Discord)
- 2-3 kampanie akwizycji (organiczne)
- Cel: 50 sign-upów, 5 płatnych

**Post-launch (Tydzień 1-12):**
- Onboarding flow (welcome email)
- Feedback loop (survey po 7 dniach)
- Szybkie poprawki (bug fixes)
- Cel: 100 płatnych użytkowników

### KPI i Metryki Sukcesu

**Acquisition:**
- CAC: <$2 (organiczny), <$5 (płatny)
- Liczba leadów: 100+/miesiąc
- CR landing → sign-up: >10%

**Activation:**
- % użytkowników aktywowanych w 3 dni: >50%

**Revenue:**
- MRR: $200 (miesiąc 3), $1000 (miesiąc 6)
- ARPA: $4.99
- Churn: <10%/miesiąc

**Retention:**
- DAU/MAU: >30%
- Powracalność: >40%

### Eksperymenty (90 dni)

| # | Eksperyment | Hipoteza | Metryka sukcesu | Zasoby |
|---|-------------|----------|-----------------|--------|
| 1 | TikTok video #1 | "Study playlist in 30s" = 1000 views | CTR → signup: 5% | 2h |
| 2 | Landing page A/B | Nagłówek "muzyka do nauki" vs "BPM playlisty" | Sign-up rate | 4h |
| 3 | Reddit post | "Jaką muzykę używacie?" = 50 upvotes | Link clicks → signup | 1h |
| 4 | Micro-influencer | 3 posty = 50 signups | CAC < $5 | 1000 PLN |
| 5 | Email sequence | 3 emiale = 20% more retention | Day-7 retention | 3h |
| 6 | Pricing test | $4.99 vs $6.99 | Conversion rate | 2 tygodnie |

### Checklista Operacyjna

- [x] Landing page z jasnym CTA i trackingiem (UTM)
- [x] Onboarding z 1-3 krokami do pierwszej wartości
- [x] Podstawowy analytics (Vercel + Amplitude)
- [x] CRM / spreadsheet na leady
- [x] Szablony emaili i social postów

---

## 11. WF_User_Journey_Map

### Success Metric
_Użytkownik uzna, że aplikacja warta jest $4.99/miesiąc, jeśli:_
→ **Wygeneruje playlistę w <3 minuty i będzie jej używał 3x/tydzień**

---

### Stage 1: Landing (0-30 sekund)

**What they see:**
- **Headline:** "Twoja playlista do nauki w 30 sekund"
- **Value prop:** "Dopasowana do BPM i Twojego nastroju"
- **CTA:** "Zacznij teraz - za darmo"

**Friction Points:**
- [ ] Zbyt wiele informacji na stronie
  - **Solution:** Tylko headline, 1 zdanie value, 1 przycisk
- [ ] Brak social proof
  - **Solution:** Dodaj "500+ studentów używa"

**Aha Moment:** "To wygląda prosto - mogę mieć playlistę w 30 sekund"

---

### Stage 2: Sign-Up (1-3 minuty)

**Flow:**
1. Email + Password
2. Confirm email (instant link)
3. Skip survey / Quick start
4. Enter app

**Friction Points:**
- [ ] 10+ pytań w formularzu
  - **Solution:** Tylko email + hasło, reszta później
- [ ] Wymaganie weryfikacji 2FA
  - **Solution:** Nie wymagaj 2FA na start

**Aha Moment:** User sees main dashboard with "Get your playlist" button

**Follow-up Email (5 min after):** "Cześć! Kliknij tutaj, żeby dostać swoją pierwszą playlistę"

---

### Stage 3: First Data Input (3-5 minut)

**Input type:** Kwestionariusz (3 pytania)

**Required fields:**
- [ ] Co robisz?: Nauka / Trening / Praca / Relaks (dropdown)
- [ ] Jaki masz poziom energii?: Slider (Low → High)
- [ ] Jaki typ muzyki?: Z tekstem / Instrumentalna (toggle)

**Friction Points:**
- [ ] Zbyt wiele pytań
  - **Solution:** Maksymalnie 3, każde z domyślną wartością

**Aha Moment:** User clicks "Get Playlist" and sees matched results

---

### Stage 4: Processing (5-10 sekund)

**UX:** 
- Progress bar with text: "Dopasowujemy playlistę..."
- Shimmer effect na miejscu gdzie pojawi się playlista

**Error Handling:** 
- Jeśli YouTube nie działa → pokazuj komunikat + manualny link

---

### Stage 5: First Output (10-30 sekund) ⭐ MOST CRITICAL

**Output format:** 
- Nazwa playlisty + BPM
- YouTube embed (auto-play)
- Przycisk "Otwórz w Spotify" (tylko Starter+)

**Visual Design:**
- User can instantly see: Playlist name, BPM, YouTube player
- User can instantly do: Play, Pause, Skip, Open Spotify

**Export Options:**
- [ ] Copy link to playlist
- [ ] Share to social (opcjonalnie)

**Friction Points:**
- [ ] Auto-play nie działa (browser block)
  - **Solution:** Wyraźny przycisk "Odtwórz"

**Aha Moment:** User thinks: "Wow, to jest dokładnie to, czego potrzebowałem!"

**⏱️ TOTAL TIME FROM LANDING TO AHA:** ~3-5 minutes (target: <5)

---

### Stage 6: Second Action (1-3 days later)

**Trigger:** 
- Email after 24h: "Gotów na kolejną playlistę?"
- In-app widget: "Wypróbuj z inną aktywnością"

**Message:** "Hej! Twoja playlista do nauki czeka na Ciebie"

**Goal:** User performs second action WITHOUT email reminder

**Success:** Return Rate >40%

**Friction Points:**
- [ ] Brak follow-up
  - **Solution:** Automatyczny email po 24h

---

### Stage 7: Conversion (7-30 days)

**Trigger:** 
- Free trial ends (po 7 dni) OR hitting limit (5 playlist/dzień)

**Message:** "Twój darmowy okres się kończy. Zostajesz?"

**Pricing:** 
- Starter: $4.99/miesiąc
- Pro: $9.99/miesiąc

**CTA Button:** "Przejdź na Starter - $4.99/miesiąc"

**Friction Points:**
- [ ] Zbyt drogie
  - **Solution:** A/B test $2.99 vs $4.99

**Aha Moment:** User realizes: "Bez tego wrócę do szukania playlist na YouTube"

---

### Summary Metrics

- [ ] Landing → Sign-up conversion: 10% (target: >5%)
- [ ] Sign-up → First Output: 70% (target: >70%)
- [ ] First Output → Day 1 Return: 40% (target: >40%)
- [ ] Trial → Paid: 5% (target: >3%)

### Biggest Friction Point (The ONE thing killing conversions)
→ **Czas od wejścia do pierwszej playlisty (>5 minut)**

### Quick Wins (Changes that'll improve conversion in <4h)
1. Uprość onboarding (tylko email + hasło)
2. Dodaj progress bar podczas ładowania playlisty
3. Auto-play YouTube (po kliknięciu użytkownika)

---

## Podsumowanie

### Kluczowe Metryki Cele (12 miesięcy)

| Metryka | Cel |
|---------|-----|
| Płatni użytkownicy | 500 |
| MRR | $2,500 |
| CAC | <$3 |
| Churn | <8%/miesiąc |
| DAU/MAU | >35% |

### Progresja

```
Miesiąc 1-2: MVP + Beta (50 użytkowników)
Miesiąc 3-4: Launch + iteracje (100 użytkowników, 20 płatnych)
Miesiąc 5-8: Growth (250 użytkowników, 80 płatnych)
Miesiąc 9-12: Scale (500 użytkowników, 150 płatnych)
```

### Największe Ryzyka

1. **Kopiowanie przez Big Tech** → Pivot do B2B API jako defensywa
2. **Niska monetyzacja** → Skalowanie przez EdTech partnerships
3. **Niska retencja** → Community features (saved playlists, sharing)

### Call to Action

Gotowy do startu? Przejdź do trybu Code i zacznij budować MVP.

---

*Document generated using SaaS Architect & Business Auditor methodology*
*BeatsPerMind v1.0 - 2024*
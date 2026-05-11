# Tech Stack Audit: BeatsPerMind

**Data:** 2026-04-05  
**Projekt:** BeatsPerMind – Playlisty + Focus Mode dla studentów  
**Weryfikacja:** 15h limit, 0€ budżet

---

## 1. Preflight – Ocena Constraints

| Constraint | Wartość | Implikacja |
|------------|---------|------------|
| **Budżet** | 0€ | Tylko darmowe tiery: Vercel, LocalStorage |
| **Czas** | 15h | Wyklucza: backend, auth, płatności, skomplikowane integracje |
| **Doświadczenie** | Początkujący programista | Unikać: nowych frameworków, nadmiernej konfiguracji |
| **Uptime** | Niska criticalność | MVP studenckie – nie wymaga 99.9% SLA |
| **Dane** | Tylko statyczne JSON | Brak bazy danych, backup nie krytyczny |

**Wniosek:** Stack musi być gotowy do odpalenia w weekend, bez konfiguracji infrastruktury, z minimalnym maintenance.

---

## 2. Audyt Tech Stack

### A. Frontend: React + Vite vs Next.js

| Kryterium | React + Vite | Next.js | Uwagi |
|-----------|--------------|---------|-------|
| **TTI** | 9/10 | 7/10 | Vite: `npm create vite@latest` – 2 minuty |
| **OB** | 10/10 | 8/10 | Vite: zero config, Next.js: więcej plików |
| **CS** | 10/10 | 9/10 | Oba na Vercel static – 0€ do 100GB |
| **DF** | 8/10 | 7/10 | Dla początkującego Vite mniej konfiguracji |
| **SUMA** | **37/40** | **31/40** | |

**Wybór:** ✅ **React + Vite** – lżejszy, szybszy setup, brak SSR overhead dla SPA bez SEO wymagań.

---

### B. Styling: Tailwind CSS + shadcn/ui

| Kryterium | Tailwind + shadcn | Styled Components | CSS Modules |
|-----------|-------------------|-------------------|-------------|
| **TTI** | 8/10 | 6/10 | 7/10 |
| **OB** | 9/10 | 7/10 | 8/10 |
| **CS** | 10/10 | 9/10 | 10/10 |
| **DF** | 7/10 | 6/10 | 8/10 |
| **SUMA** | **34/40** | **28/40** | **33/40** |

**Wybór:** ✅ **Tailwind + shadcn/ui** – gotowe komponenty (Button, Card, Slider), responsive z automatu, kod skopiowany do projektu (brak vendor lock-in).

---

### C. State Management: useState + Context vs Zustand

| Kryterium | useState + Context | Zustand | Redux Toolkit |
|-----------|---------------------|---------|---------------|
| **TTI** | 10/10 | 8/10 | 5/10 |
| **OB** | 10/10 | 10/10 | 6/10 |
| **CS** | 10/10 | 10/10 | 9/10 |
| **DF** | 10/10 | 6/10 | 4/10 |
| **SUMA** | **40/40** | **34/40** | **24/40** |

**Wybór:** ✅ **useState + Context** – dla 15h projektu overkill na Redux/Zustand. Context wystarczy dla:
- Stanu quizu (odpowiedzi użytkownika)
- Stanu odtwarzacza (piosenka, czy gramy)
- Stanu timera (Pomodoro)

---

### D. Routing: React Router vs Wouter

| Kryterium | React Router v6 | Wouter | Brak routingu |
|-----------|-----------------|--------|---------------|
| **TTI** | 7/10 | 9/10 | 10/10 |
| **OB** | 8/10 | 9/10 | 10/10 |
| **CS** | 10/10 | 10/10 | 10/10 |
| **DF** | 8/10 | 6/10 | 10/10 |
| **SUMA** | **33/40** | **34/40** | **40/40** |

**Wybór:** ✅ **React Router v6** – standard przemysłu, łatwo znaleźć helpa, dla 3-4 routes (Landing → Quiz → Playlist → Focus) nie ma przewagi Wouter. Zostać przy sprawdzonym.

---

### E. Audio: HTML5 Audio vs Howler.js

| Kryterium | HTML5 Audio | Howler.js | Web Audio API |
|-----------|-------------|-----------|---------------|
| **TTI** | 10/10 | 8/10 | 4/10 |
| **OB** | 8/10 | 9/10 | 5/10 |
| **CS** | 10/10 | 9/10 | 8/10 |
| **DF** | 9/10 | 7/10 | 3/10 |
| **SUMA** | **37/40** | **33/40** | **20/40** |

**Wybór:** ✅ **HTML5 Audio** – Wystarczy do embed YouTube (iframe) + ambient MP3. Howler overhead dla prostego use case. Użyć:
- YouTube iframe dla playlist (nie wymaga API)
- HTML5 `<audio>` dla ambient sounds (dźwięki natury)

---

### F. Data: Static JSON + LocalStorage

| Kryterium | Static JSON | Firebase | Supabase |
|-----------|-------------|----------|----------|
| **TTI** | 10/10 | 6/10 | 6/10 |
| **OB** | 10/10 | 7/10 | 7/10 |
| **CS** | 10/10 | 8/10 | 8/10 |
| **DF** | 10/10 | 5/10 | 5/10 |
| **SUMA** | **40/40** | **26/40** | **26/40** |

**Wybór:** ✅ **Static JSON + LocalStorage** – playlisty w `data/playlists.json`, ulubione quizy w LocalStorage. Zero backendu = zero kosztów.

---

### G. Hosting: Vercel

| Kryterium | Vercel | Netlify | GitHub Pages |
|-----------|--------|--------|--------------|
| **TTI** | 10/10 | 10/10 | 8/10 |
| **OB** | 10/10 | 10/10 | 7/10 |
| **CS** | 10/10 | 10/10 | 10/10 |
| **DF** | 9/10 | 7/10 | 6/10 |
| **SUMA** | **39/40** | **37/40** | **31/40** |

**Wybór:** ✅ **Vercel** – integracja z GitHub, auto-deploy, free tier: 100GB bandwidth/miesiąc, SSL z automatu.

---

## 3. Stack Rekomendacja

```
┌─────────────────────────────────────────────────────────────┐
│                    BEATSPERMIND STACK                        │
├─────────────────────────────────────────────────────────────┤
│  Frontend:        React 18 + Vite                          │
│  Styling:         Tailwind CSS + shadcn/ui                  │
│  Routing:        React Router v6                           │
│  State:          useState + Context                        │
│  Audio:          HTML5 Audio + YouTube Embed               │
│  Data:           Static JSON + LocalStorage                 │
│  Hosting:        Vercel (free tier)                         │
├─────────────────────────────────────────────────────────────┤
│  SZACOWANY CZAS:  12-14h (z zapasem w 15h)                 │
│  KOSZT MIESIĘCZNY: 0€                                       │
│  MAINTENANCE:     0-1h/miesiąc                              │
└─────────────────────────────────────────────────────────────┘
```

**Uzasadnienie wyboru React + Vite + Tailwind + shadcn/ui:**

1. **TTI:** Vite start w 2 minuty, shadcn copy-paste komponentów
2. **OB:** Zero serverów, zero baz danych, zero maintenance
3. **CS:** Free tier Vercel wystarczy dla 10k+ miesięcznie odwiedzin
4. **DF:** Najpopularniejszy stack – łatwo znaleźć tutoriale, pomoc na StackOverflow

---

## 4. Red Lines – Czego unikać

| ❌ Unikać | Powód | Alternatywa |
|----------|-------|-------------|
| **Next.js** | Overkill dla SPA bez SSR, więcej plików konfiguracyjnych | React + Vite |
| **Firebase/Supabase** | Niepotrzebne bez backendu, vendor lock-in | Static JSON |
| **Redux Toolkit** | Overhead: 5 plików dla prostego state | Context API |
| **TypeScript** | Wymaga wiedzy, wydłuża setup dla początkującego | JavaScript (opcjonalnie) |
| **Spotify/YouTube API** | Wymaga OAuth, limitów, podwójnego auth flow | YouTube Embed (iframe) |
| **PostgreSQL/MongoDB** | Wymaga serwera, backup, konfiguracji | LocalStorage |
| **Docker/Kubernetes** | 10h na setup, niepotrzebne dla MVP | Vercel static |

---

## 5. Migration Path – Faza 2 (gdyby projekt się rozrósł)

```
Faza 1 (teraz)                 Faza 2 (gdy 100+ użytkowników)
┌─────────────────┐            ┌─────────────────┐
│ React + Vite    │     →      │ Next.js         │
│ Static JSON     │            │ Supabase        │
│ LocalStorage    │            │ Auth (Supabase) │
└─────────────────┘            └─────────────────┘
          │                             │
          ↓                             ↓
┌─────────────────┐            ┌─────────────────┐
│ YouTube Embed   │     →      │ Spotify API     │
│                 │            │ (gdy user pyta) │
└─────────────────┘            └─────────────────┘
```

**Dodaj w Fazie 2:**
- Supabase Auth (gdy dodamy konta użytkowników)
- Spotify API (gdy requested by users)
- Stripe (gdy freemium model)
- Vercel Analytics (gdy potrzeba insightów)

---

## 6. Tech Debt Warnings – Co monitorować

| ⚠️ Yellow Flags | Akcja |
|-----------------|-------|
| >3 warstwy zagnieżdżonych komponentów | Rozbij na mniejsze |
| Duplikacja w JSON danych | Wyodrębnij do wspólnych plików |
| Brak error boundary | Dodaj ErrorBoundary.tsx |
| Brak loading states | Dodaj Skeleton z shadcn |

| 🚨 Red Flags | Akcja |
|--------------|-------|
| Więcej niż 5 plików w /components | Dodaj podział na /features |
| Brak Key w mapowanych listach | Napraw natychmiast |
| Hardkodowane stringi | Wyodrębnij do constants/ |

---

## 7. Checklist – Gotowość do startu

- [ ] **Środowisko:** Node.js 18+ zainstalowane
- [ ] **Scaffold:** `npm create vite@latest beats-per-mind -- --template react`
- [ ] **Tailwind:** Zainstalowany według oficjalnego setup
- [ ] **shadcn/ui:** Zainicjowany (`npx shadcn-ui@latest init`)
- [ ] **Dodane komponenty shadcn:** Button, Card, Slider, Progress
- [ ] **Routing:** React Router zainstalowany
- [ ] **Data:** Plik `src/data/playlists.json` z 5-10 playlistami
- [ ] **Icons:** Lucide-react (domyślne z shadcn)
- [ ] **Hosting:** Konto Vercel podłączone do GitHub
- [ ] **Deploy:** Pierwszy build na Vercel

**Szacowany time-to-deploy:** 4-6 godzin (setup + Tier 1 features)

---

## 8. Podsumowanie

**BeatsPerMind jest idealnym candidate dla React + Vite stack** – prosty use case, jasne requirements, tight deadline. Każdy dodatkowy tool (Next.js, Supabase, Redux) to over-engineering.

**Zasada:** Kupiłeś rower – nie potrzebujesz ciężarówki. 🏍️

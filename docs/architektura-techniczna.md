# BeatsPerMind - Architektura Techniczna

**Wersja:** 2.0  
**Data:** Marzec 2026  
**Status:** MVP Ready  

---

## 1. Przegląd Systemu

### 1.1 Opis Projektu

**BeatsPerMind** to aplikacja webowa typu SaaS dla studentów (18-30 lat), która generuje spersonalizowane playlisty muzyczne dopasowane do aktywności i tempa pracy. Aplikacja łączy rekomendacje muzyczne oparte na BPM z narzędziami produktywności (Pomodoro Timer + dźwięki tła).

### 1.2 Główne Funkcje

| Funkcja | Opis | Priorytet |
|---------|------|-----------|
| **Kwestionariusz** | 3 pytania: aktywność, energia, typ muzyki | P0 |
| **Generowanie Playlist** | 8-10 playlist dopasowanych do BPM | P0 |
| **Odtwarzacz YouTube** | Embed z kontrolkami play/pause/skip | P0 |
| **Pomodoro Timer** | Presety 25/5 min z powiadomieniami | P0 |
| **Focus Mode** | Pełnoekranowy tryb z animacjami | P1 |
| **Dźwięki Tła** | White noise, deszcz, kawiarnia | P1 |
| **Rejestracja** | Email + password z Supabase Auth | P0 |
| **Dashboard** | Historia sesji i statystyki | P2 |

---

## 2. Stack Technologiczny

### 2.1 Frontend

| Technologia | Wersja | Cel |
|-------------|--------|-----|
| **React** | 18.2+ | Biblioteka UI |
| **Next.js** | 14.x (App Router) | Framework, SSR/SSG |
| **TypeScript** | 5.3+ | Typowanie statyczne |
| **Tailwind CSS** | 3.4+ | Styling |
| **Lucide React** | 0.312+ | Ikony |
| **class-variance-authority** | 0.7+ | Warianty komponentów |
| **clsx** | 2.1+ | Klasy warunkowe |
| **tailwind-merge** | 2.2+ | Merge klas Tailwind |

### 2.2 Backend

| Technologia | Wersja | Cel |
|-------------|--------|-----|
| **Supabase** | Latest | Baza danych + Auth |
| **PostgreSQL** | 15+ | Baza danych (via Supabase) |
| **Next.js API Routes** | 14.x | Endpointy API |
| **Stripe** | 14.14+ | Płatności |

### 2.3 Infrastruktura

| Technologia | Cel |
|-------------|-----|
| **Vercel** | Hosting + CI/CD |
| **Supabase Cloud** | Managed database |
| **Stripe** | Płatności subskrypcyjne |

---

## 3. Architektura Aplikacji

### 3.1 Diagram Architektury

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT (Browser)                         │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              Next.js App (React 18)                       │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐        │  │
│  │  │ Landing │ │Dashboard│ │  Timer  │ │  Focus  │        │  │
│  │  │  Page   │ │  Page   │ │  Page   │ │  Mode   │        │  │
│  │  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘        │  │
│  │       │           │           │           │              │  │
│  │       └───────────┴───────────┴───────────┘              │  │
│  │                       │                                   │  │
│  │              ┌────────┴────────┐                         │  │
│  │              │  React Context  │                         │  │
│  │              │  + Local State  │                         │  │
│  │              └────────┬────────┘                         │  │
│  └───────────────────────┼───────────────────────────────────┘  │
└──────────────────────────┼──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    NEXT.JS API LAYER                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │ /api/auth/*  │ │ /api/playlist│ │ /api/stripe  │            │
│  │ (Supabase)   │ │ (Generate)   │ │ (Payments)   │            │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘            │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
          ▼                ▼                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      SERVICES LAYER                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │  Supabase    │ │   Stripe     │ │   YouTube    │            │
│  │  (DB + Auth) │ │  (Payments)  │ │  (Embed API) │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Struktura Folderów

```
beatspermind/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Landing page
│   │   ├── globals.css               # Global styles
│   │   ├── login/
│   │   │   └── page.tsx              # Logowanie
│   │   ├── register/
│   │   │   └── page.tsx              # Rejestracja
│   │   ├── dashboard/
│   │   │   └── page.tsx              # Panel główny
│   │   ├── timer/
│   │   │   └── page.tsx              # Pomodoro Timer
│   │   ├── focus/
│   │   │   └── page.tsx              # Focus Mode
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...supabase]/
│   │       │       └── route.ts      # Supabase Auth callbacks
│   │       ├── playlist/
│   │       │   └── route.ts          # Generowanie playlist
│   │       └── stripe/
│   │           ├── checkout/
│   │           │   └── route.ts      # Stripe Checkout
│   │           └── webhook/
│   │               └── route.ts      # Stripe Webhooks
│   │
│   ├── components/
│   │   ├── ui/                       # Komponenty bazowe (Shadcn-like)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   ├── slider.tsx
│   │   │   └── badge.tsx
│   │   ├── layout/                   # Komponenty layoutu
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── playlist/                 # Komponenty playlist
│   │   │   ├── PlaylistCard.tsx
│   │   │   ├── Player.tsx
│   │   │   └── BPMIndicator.tsx
│   │   ├── timer/                    # Komponenty timera
│   │   │   ├── PomodoroTimer.tsx
│   │   │   ├── TimerControls.tsx
│   │   │   └── SoundPicker.tsx
│   │   └── questionnaire/            # Komponenty kwestionariusza
│   │       ├── QuestionStep.tsx
│   │       ├── ActivityPicker.tsx
│   │       ├── EnergySlider.tsx
│   │       └── MusicTypePicker.tsx
│   │
│   ├── lib/
│   │   ├── supabase.ts               # Klient Supabase
│   │   ├── supabase-server.ts        # Server-side Supabase
│   │   ├── playlists.ts              # Dane playlist (hardcoded)
│   │   ├── bpm-matcher.ts            # Algorytm dopasowania BPM
│   │   └── utils.ts                  # Utility functions
│   │
│   ├── hooks/
│   │   ├── useSupabase.ts            # Hook do Supabase
│   │   ├── useTimer.ts               # Hook do timera
│   │   ├── usePlaylist.ts            # Hook do playlist
│   │   └── useSound.ts               # Hook do dźwięków
│   │
│   ├── types/
│   │   ├── index.ts                  # Główne typy
│   │   ├── playlist.ts               # Typy playlist
│   │   ├── user.ts                   # Typy użytkownika
│   │   └── timer.ts                  # Typy timera
│   │
│   └── context/
│       ├── AuthContext.tsx            # Kontekst autentykacji
│       ├── PlaylistContext.tsx        # Kontekst playlist
│       └── TimerContext.tsx           # Kontekst timera
│
├── supabase/
│   └── migrations/
│       ├── 001_initial_schema.sql    # Tabele początkowe
│       ├── 002_playlists.sql         # Tabela playlist
│       └── 003_sessions.sql          # Tabela sesji
│
├── public/
│   ├── sounds/                       # Pliki audio
│   │   ├── white-noise.mp3
│   │   ├── rain.mp3
│   │   └── coffee-shop.mp3
│   └── images/                       # Obrazy
│
├── .env.local                        # Zmienne środowiskowe
├── .env.example                      # Przykład zmiennych
├── next.config.js                    # Konfiguracja Next.js
├── tailwind.config.ts                # Konfiguracja Tailwind
├── tsconfig.json                     # Konfiguracja TypeScript
├── postcss.config.js                 # Konfiguracja PostCSS
└── package.json                      # Dependencies
```

---

## 4. Model Danych

### 4.1 Diagram ERD

```
┌─────────────────────┐       ┌─────────────────────┐
│      profiles       │       │      playlists      │
├─────────────────────┤       ├─────────────────────┤
│ id (PK, FK)         │       │ id (PK)             │
│ email               │       │ name                │
│ full_name           │       │ activity_type       │
│ avatar_url          │       │ energy_level        │
│ subscription_status│       │ music_type          │
│ stripe_customer_id  │       │ bpm_min             │
│ created_at          │       │ bpm_max             │
│ updated_at          │       │ youtube_playlist_id │
└──────────┬──────────┘       │ track_count         │
           │                  │ created_at          │
           │                  └──────────┬──────────┘
           │                             │
           │         ┌───────────────────┘
           │         │
           ▼         ▼
┌─────────────────────────────────────┐
│            sessions                 │
├─────────────────────────────────────┤
│ id (PK)                             │
│ user_id (FK → profiles)             │
│ playlist_id (FK → playlists)        │
│ activity_type                       │
│ energy_level                        │
│ duration_minutes                    │
│ completed                           │
│ started_at                          │
│ ended_at                            │
└─────────────────────────────────────┘
```

### 4.2 Schemat SQL

```sql
-- Tabela profili użytkowników
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'premium')),
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela playlist
CREATE TABLE playlists (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('study', 'training', 'work', 'relax')),
  energy_level TEXT NOT NULL CHECK (energy_level IN ('low', 'medium', 'high')),
  music_type TEXT NOT NULL CHECK (music_type IN ('with_lyrics', 'instrumental')),
  bpm_min INTEGER NOT NULL,
  bpm_max INTEGER NOT NULL,
  youtube_playlist_id TEXT,
  track_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela sesji użytkownika
CREATE TABLE sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  playlist_id UUID REFERENCES playlists(id) ON DELETE SET NULL,
  activity_type TEXT NOT NULL,
  energy_level TEXT NOT NULL,
  duration_minutes INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  started_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ
);

-- Indeksy
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_started_at ON sessions(started_at);
CREATE INDEX idx_playlists_activity_energy ON playlists(activity_type, energy_level);

-- Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;

-- Polityki RLS
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view own sessions" ON sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions" ON sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Playlists are viewable by everyone" ON playlists
  FOR SELECT USING (true);
```

---

## 5. Kluczowe Komponenty

### 5.1 Algorytm Dopasowania BPM

```typescript
// src/lib/bpm-matcher.ts

interface MatchParams {
  activity: 'study' | 'training' | 'work' | 'relax';
  energy: number; // 1-10
  musicType: 'with_lyrics' | 'instrumental';
}

interface BPMRange {
  min: number;
  max: number;
}

const BPM_RANGES: Record<string, Record<string, BPMRange>> = {
  study: {
    low: { min: 60, max: 80 },
    medium: { min: 80, max: 100 },
    high: { min: 100, max: 120 },
  },
  training: {
    low: { min: 120, max: 130 },
    medium: { min: 130, max: 145 },
    high: { min: 145, max: 170 },
  },
  work: {
    low: { min: 70, max: 90 },
    medium: { min: 90, max: 110 },
    high: { min: 110, max: 130 },
  },
  relax: {
    low: { min: 50, max: 70 },
    medium: { min: 60, max: 80 },
    high: { min: 70, max: 90 },
  },
};

export function getEnergyLevel(energy: number): 'low' | 'medium' | 'high' {
  if (energy <= 3) return 'low';
  if (energy <= 7) return 'medium';
  return 'high';
}

export function matchBPM(params: MatchParams): BPMRange {
  const energyLevel = getEnergyLevel(params.energy);
  return BPM_RANGES[params.activity][energyLevel];
}

export function selectPlaylist(
  playlists: Playlist[],
  params: MatchParams
): Playlist | null {
  const targetBPM = matchBPM(params);
  
  // Filtruj playlisty według typu muzyki
  const filtered = playlists.filter(p => p.music_type === params.musicType);
  
  // Znajdź najlepsze dopasowanie BPM
  const matched = filtered.find(
    p => p.bpm_min >= targetBPM.min && p.bpm_max <= targetBPM.max
  );
  
  return matched || filtered[0] || null;
}
```

### 5.2 Hook do Timera Pomodoro

```typescript
// src/hooks/useTimer.ts

import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerConfig {
  workMinutes: number;
  breakMinutes: number;
  longBreakMinutes: number;
  sessionsBeforeLongBreak: number;
}

interface TimerState {
  minutes: number;
  seconds: number;
  isRunning: boolean;
  isBreak: boolean;
  sessionCount: number;
  totalSessions: number;
}

const DEFAULT_CONFIG: TimerConfig = {
  workMinutes: 25,
  breakMinutes: 5,
  longBreakMinutes: 15,
  sessionsBeforeLongBreak: 4,
};

export function useTimer(config: TimerConfig = DEFAULT_CONFIG) {
  const [state, setState] = useState<TimerState>({
    minutes: config.workMinutes,
    seconds: 0,
    isRunning: false,
    isBreak: false,
    sessionCount: 0,
    totalSessions: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const tick = useCallback(() => {
    setState(prev => {
      if (prev.seconds === 0) {
        if (prev.minutes === 0) {
          // Timer zakończony
          const isNowBreak = !prev.isBreak;
          const newSessionCount = isNowBreak 
            ? prev.sessionCount + 1 
            : prev.sessionCount;
          
          const isLongBreak = newSessionCount % config.sessionsBeforeLongBreak === 0;
          const nextMinutes = isNowBreak
            ? (isLongBreak ? config.longBreakMinutes : config.breakMinutes)
            : config.workMinutes;

          return {
            ...prev,
            minutes: nextMinutes,
            seconds: 0,
            isRunning: false,
            isBreak: isNowBreak,
            sessionCount: newSessionCount,
            totalSessions: isNowBreak ? prev.totalSessions + 1 : prev.totalSessions,
          };
        }
        return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      }
      return { ...prev, seconds: prev.seconds - 1 };
    });
  }, [config]);

  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(tick, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [state.isRunning, tick]);

  const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const reset = useCallback(() => {
    setState({
      minutes: config.workMinutes,
      seconds: 0,
      isRunning: false,
      isBreak: false,
      sessionCount: 0,
      totalSessions: 0,
    });
  }, [config]);

  const skip = useCallback(() => {
    setState(prev => ({
      ...prev,
      minutes: 0,
      seconds: 0,
    }));
  }, []);

  return {
    ...state,
    start,
    pause,
    reset,
    skip,
    progress: calculateProgress(state, config),
  };
}

function calculateProgress(state: TimerState, config: TimerConfig): number {
  const totalSeconds = state.isBreak
    ? (state.sessionCount % config.sessionsBeforeLongBreak === 0 
        ? config.longBreakMinutes 
        : config.breakMinutes) * 60
    : config.workMinutes * 60;
  
  const remainingSeconds = state.minutes * 60 + state.seconds;
  return ((totalSeconds - remainingSeconds) / totalSeconds) * 100;
}
```

### 5.3 Kontekst Autentykacji

```typescript
// src/context/AuthContext.tsx

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Pobierz początkową sesję
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Nasłuchuj zmian autentykacji
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });
    if (error) throw error;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
```

---

## 6. API Endpoints

### 6.1 Autentykacja

| Endpoint | Metoda | Opis | Auth |
|----------|--------|------|------|
| `/api/auth/callback` | GET | Callback Supabase | - |
| `/api/auth/signout` | POST | Wylogowanie | ✅ |

### 6.2 Playlisty

| Endpoint | Metoda | Opis | Auth |
|----------|--------|------|------|
| `/api/playlist/generate` | POST | Generowanie playlisty na podstawie kwestionariusza | ❌ |
| `/api/playlist/[id]` | GET | Pobieranie szczegółów playlisty | ❌ |

### 6.3 Sesje

| Endpoint | Metoda | Opis | Auth |
|----------|--------|------|------|
| `/api/sessions` | GET | Pobieranie historii sesji | ✅ |
| `/api/sessions` | POST | Tworzenie nowej sesji | ✅ |
| `/api/sessions/[id]` | PATCH | Aktualizacja sesji | ✅ |

### 6.4 Płatności (Stripe)

| Endpoint | Metoda | Opis | Auth |
|----------|--------|------|------|
| `/api/stripe/checkout` | POST | Tworzenie sesji Checkout | ✅ |
| `/api/stripe/webhook` | POST | Webhook Stripe | - |

---

## 7. Przepływ Użytkownika

### 7.1 Główny Flow

```
Landing Page
    │
    ├──► Kwestionariusz (3 pytania)
    │         │
    │         ▼
    │    Generowanie Playlisty
    │         │
    │         ▼
    │    Odtwarzacz + Timer
    │         │
    │         ▼
    │    Focus Mode (opcjonalnie)
    │
    ├──► Rejestracja / Logowanie
    │         │
    │         ▼
    │    Dashboard
    │         │
    │         ├──► Historia sesji
    │         ├──► Statystyki
    │         └──► Ustawienia
    │
    └──► Premium (Stripe Checkout)
              │
              ▼
         Subskrypcja aktywna
```

### 7.2 Flow Kwestionariusza

```
Krok 1: Wybierz aktywność
    │
    ├──► Nauka (Study)
    ├──► Trening (Training)
    ├──► Praca (Work)
    └──► Relaks (Relax)
    │
    ▼
Krok 2: Poziom energii (Slider 1-10)
    │
    ▼
Krok 3: Typ muzyki
    │
    ├──► Z tekstem (With Lyrics)
    └──► Instrumentalna (Instrumental)
    │
    ▼
Wynik: Playlist z dopasowanym BPM
```

---

## 8. Konfiguracja Środowiska

### 8.1 Zmienne Środowiskowe (.env.local)

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 8.2 Konfiguracja Next.js

```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
```

### 8.3 Konfiguracja Tailwind

```typescript
// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 9. Deployment

### 9.1 Vercel

1. Połącz repozytorium GitHub z Vercel
2. Skonfiguruj zmienne środowiskowe w Vercel Dashboard
3. Deployment automatyczny przy push do `main`

### 9.2 Supabase

1. Utwórz projekt na supabase.com
2. Uruchom migracje SQL
3. Skonfiguruj Auth providers (Email, Google)
4. Skonfiguruj Row Level Security

### 9.3 Stripe

1. Utwórz konto Stripe
2. Utwórz produkt "BeatsPerMind Premium"
3. Skonfiguruj webhook endpoint
4. Testuj z kartami testowymi

---

## 10. Metryki i Monitoring

### 10.1 Kluczowe Metryki (KPI)

| Metryka | Cel | Źródło |
|---------|-----|--------|
| **Rejestracje** | 100 w pierwszym miesiącu | Supabase Auth |
| **DAU** | 30% zarejestrowanych | Custom events |
| **Sesje/Użytkownik** | 3+ tygodniowo | Tabela sessions |
| **Konwersja Premium** | 5% | Stripe |
| **Retention D7** | 40% | Custom analytics |

### 10.2 Monitoring

- **Vercel Analytics** - Core Web Vitals
- **Supabase Dashboard** - Zapytania DB, Auth
- **Stripe Dashboard** - Płatności
- **Sentry** (opcjonalnie) - Błędy frontend

---

## 11. Bezpieczeństwo

### 11.1 Lista Kontrolna

- [x] Row Level Security w Supabase
- [x] HTTPS everywhere (Vercel)
- [x] Environment variables (nie w kodzie)
- [x] Input validation (Zod)
- [x] CORS skonfigurowany
- [x] Rate limiting na API routes
- [x] Stripe webhook signature verification
- [x] Supabase RLS policies

### 11.2 Autentykacja

- Email + Password (Supabase Auth)
- OAuth (Google) - opcjonalnie
- Session-based (cookies)
- JWT dla API routes

---

## 12. Ograniczenia MVP

### 12.1 Co NIE jest w MVP

- ❌ Własny odtwarzacz muzyki (tylko YouTube embed)
- ❌ Integracja ze Spotify API
- ❌ Własne pliki audio (tylko linki)
- ❌ Aplikacja mobilna (tylko responsive web)
- ❌ Social features (udostępnianie, znajomi)
- ❌ AI-generated playlists
- ❌ Offline mode

### 12.2 Znane Ograniczenia

- YouTube embed może zawierać reklamy
- Brak kontroli nad kolejnością utworów
- Ograniczona liczba playlist (8-10 hardcoded)
- Brak personalizacji na podstawie historii

---

## 13. Przyszłe Rozszerzenia (Post-MVP)

### 13.1 Faza 2

- [ ] Integracja Spotify API
- [ ] Więcej dźwięków tła
- [ ] Statystyki zaawansowane
- [ ] Eksport historii

### 13.2 Faza 3

- [ ] Aplikacja mobilna (React Native)
- [ ] AI playlist generator
- [ ] Social features
- [ ] Integracja z kalendarzem

---

## Podsumowanie

**BeatsPerMind MVP** to prosty, ale wartościowy produkt dla studentów. Architektura opiera się na:

1. **Next.js 14** - szybki development, SSR, API routes
2. **Supabase** - managed backend, auth, database
3. **Tailwind CSS** - szybkie prototypowanie
4. **Stripe** - gotowy system płatności

**Szacowany czas developmentu:** 15-20 godzin dla doświadczonego developera.

**Kluczowy sukces:** Szybkie time-to-value (< 30 sekund od rejestracji do pierwszej playlisty).

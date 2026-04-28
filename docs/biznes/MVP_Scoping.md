# MVP Scope: BeatsPerMind

## Cel Walidacji
Sprawdzenie, czy aplikacja generuje playlisty dopasowane do aktywności, poziomu energii i preferencji muzycznych oraz czy sprawia wrażenie "AI-like" przy użyciu prostych reguł.

---

## Core Loop (User Journey)
1. **Kwestionariusz (3 pytania)** → Wybór aktywności, poziomu energii, preferencji muzycznych
2. **Generowanie playlisty** → Dopasowanie statycznych utworów do odpowiedzi
3. **Focus Mode** → Timer Pomodoro + dźwięki otoczenia

**Czas przejścia:** < 2 minuty do pierwszej wartości

---

## Tier 1 Features (Must-Have)

| Funkcja | Opis | Czas (h) |
|--------|------|----------|
| Quiz (3 pytania) | Wybór aktywności, energii, gatunku | 1.5 |
| Playlist Generator | Mapowanie odpowiedzi na statyczne playlisty | 2 |
| Odtwarzacz audio | Embed YouTube/Spotify + podstawowe sterowanie | 2 |
| Focus Mode | Timer Pomodoro (25/5 min) | 2 |
| Ambient Sounds | 4-6 dźwięków tła (dźwięki natury, kawiarnia) | 2 |
| Strona główna | Landing + Start Quiz | 1.5 |

**Total Tier 1: 11 godzin**

---

## Tier 2 Features (Should-Have)

| Funkcja | Opis | Czas (h) |
|--------|------|----------|
| Zapis kombinacji | LocalStorage ulubionych quizów | 1 |
| Theme switcher | Tryb jasny/ciemny | 0.5 |
| Więcej playlist | Rozszerzenie bazy utworów | 2 |
| Statystyki sesji | Czas focus, liczba pomodorów | 1.5 |

**Total Tier 2: 5 godzin**

---

## Tier 3 Features (Nice-to-Have)

| Funkcja | Opis | Czas (h) |
|--------|------|----------|
| Full auth | Rejestracja/logowanie | 4 |
| Płatności | Stripe dla premium | 3 |
| Eksport playlist | Pobieranie jako link | 1 |
| Progressive Web App | Offline mode | 2 |

**Total Tier 3: 10 godzin**

---

## Tech Stack

| Kategoria | Technologia |
|-----------|-------------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Dane | Statyczne JSON (playlisty) |
| Audio | YouTube embeds + dźwięki MP3 |
| Storage | LocalStorage |
| Hosting | Vercel (darmowy tier) |

---

## Unikane API i Zależności

- ❌ Spotify API (wymaga OAuth, limitów)
- ❌ YouTube Data API (skomplikowane)
- ✅ YouTube embeds (iframe)
- ✅ Statyczne playlisty w JSON

---

## Mapa Funkcji z Estymatami

| Funkcja | Tier | Czas (h) | Cut? | Alternatywa |
|---------|------|----------|------|------------|
| Quiz 3 pytania | 1 | 1.5 | ❌ | - |
| Playlist Generator | 1 | 2 | ❌ | - |
| Audio Player | 1 | 2 | ❌ | YouTube embed |
| Focus Timer | 1 | 2 | ❌ | - |
| Ambient Sounds | 1 | 2 | ❌ | MP3 z CDN |
| Landing Page | 1 | 1.5 | ❌ | - |
| Zapis kombinacji | 2 | 1 | ❌ | LocalStorage |
| Theme Switcher | 2 | 0.5 | ❌ | Tailwind dark |
| Full Auth | 3 | 4 | ✅ CUT | Brak w MVP |
| Stripe Payments | 3 | 3 | ✅ CUT | Freemium |
| User Dashboard | 3 | 3 | ✅ CUT | Stats w Tier 2 |

---

## What's Intentionally Cut

- Autentykacja użytkownika (Tier 3)
- System płatności (Tier 3)
- Zaawansowane statystyki (Tier 3)
- Integracja z Spotify API (wykluczone - zbyt skomplikowane)
- YouTube Data API (wykluczone - wymaga klucza API)

---

## Estymacja Czasu Projektu

**Projekt studencki:** 15h
- Tier 1: 11h ✅ mieszcz się w limicie
- Tier 2: +4h dodatkowe (opcjonalnie)

---

## Target Metrics

- [ ] 10 użytkowników ukończy quiz
- [ ] Time-to-first-value: < 2 minuty
- [ ] Playlist dopasowana do odpowiedzi (100% dopasowanie reguł)
- [ ] Focus Mode działa poprawnie

---

## Walidacja "AI-like"

Aplikacja ma sprawiać wrażenie inteligentnej dzięki:
1. **Dynamicznemu mapowaniu** odpowiedzi na playlisty
2. **Płynnym przejściom** między ekranami
3. **Kontekstowemu timerowi** w Focus Mode
4. **Odczuciu personalizacji** poprzez 3-question quiz

Nie wymaga prawdziwego AI - wystarczą reguły logiczne.
# Resource_Analysis.md — BeatsPerMind

**Cel:** Audyt zasobów niezbędnych do realizacji MVP BeatsPerMind w limicie 15h (projekt studencki).

---

## 1. Preflight

- **Krótki opis:** Aplikacja webowa generująca playlisty muzyczne dopasowane do aktywności, poziomu energii i preferencji użytkownika, z trybem Focus Mode (timer Pomodoro + dźwięki otoczenia).
- **Stage:** MVP (studencki projekt, brak backendu)
- **Horyzont:** 15h (1–2 tygodnie)
- **Główny cel audytu:** Oszacować realistyczny zakres prac, zidentyfikować krytyczne funkcje i ryzyka czasowe.

---

## 2. Audyt Czasu (Time Audit)

### Struktura zadań — suma: 15h (estymacja + bufor)

| Kategoria | Zadania | Estymacja |
|-----------|--------|-----------|
| **Core Dev** | Konfiguracja projektu React + Tailwind + shadcn/ui | 1.5h |
| | Komponent Landing Page (hero, CTA) | 1h |
| | Komponent Quiz (3 pytania, logika generowania playlisty) | 2h |
| | Generowanie playlisty z danych JSON (filtry: aktywność, energia, preferencje) | 1.5h |
| | Komponent Playlist View (lista utworów, mock player) | 1h |
| | Focus Mode: Timer Pomodoro (25/5 min) | 1h |
| | Focus Mode: Dźwięki otoczenia (deszcz, kawiarnia, white noise) | 1h |
| | LocalStorage: zapis kombinacji quiz + playlista | 0.5h |
| | Routing (React Router): Landing → Quiz → Playlist → Focus | 0.5h |
| **Design & UX** | Spójny design system (kolory, typografia, komponenty shadcn/ui) | 1h |
| | Responsywność (mobile-first, min. tablet) | 0.5h |
| **QA** | Testy manualne: przepływy użytkownika | 1h |
| | Bug fixes | 1h |
| **DevOps** | Wdrożenie na Vercel | 0.5h |
| **Bufor** | Nieprzewidziane problemy (integracja audio, LocalStorage edge cases) | 1h |
| **SUMA** | | **15h** |

---

## 3. Audyt Budżetu (Budget Audit)

| Kategoria | Koszt |
|-----------|-------|
| Hosting (Vercel) | 0 € (darmowy plan) |
| Domena | 0 € (subdomena .vercel.app) |
| Narzędzia deweloperskie | 0 € (VS Code, GitHub free) |
| API muzyczne | 0 € (statyczne dane JSON) |
| Monitoring | 0 € (brak w MVP) |
| **SUMA miesięcznie** | **0 €** |

**Uwaga:** Projekt studencki — brak kosztów operacyjnych. W przyszłości: Spotify API (freemium) ~$0, ewentualnie premium dźwięki.

---

## 4. Integracje Zewnętrzne (External Integrations)

| Integracja | Krytyczność | Status | Uwagi |
|------------|-------------|--------|-------|
| Spotify API | Opcjonalne (faza 2) | Nie w MVP | Wymaga OAuth, raportowanie do Spotify |
| YouTube Music API | Opcjonalne (faza 2) | Nie w MVP | Alternatywa |
| Dźwięki otoczenia (CORS-free) | Krytyczne | Lokalne pliki MP3 | Wbudowane w /public |
| LocalStorage | Krytyczne | Natywne API | Zapis stanu quizu |

**Wniosek:** Brak krytycznych zewnętrznych integracji w MVP. Wszystkie dane — statyczne JSON.

---

## 5. Macierz Priorytetów

| Funkcja | Wartość (1-5) | Trudność (1-5) | Wynik | Priorytet |
|---------|---------------|----------------|-------|----------|
| Quiz (3 pytania) | 5 | 1 | 5 | **Krytyczne** |
| Generowanie playlisty | 5 | 2 | 10 | **Krytyczne** |
| Focus Mode (Timer Pomodoro) | 4 | 2 | 8 | **Krytyczne** |
| Dźwięki otoczenia | 4 | 2 | 8 | **Krytyczne** |
| Landing Page z CTA | 5 | 1 | 5 | **Krytyczne** |
| Zapis w LocalStorage | 3 | 1 | 3 | Ważne |
| Playlist View (mock player) | 3 | 2 | 6 | Ważne |
| Responsywność | 3 | 2 | 6 | Ważne |
| Animacje / micro-interactions | 2 | 3 | 6 | Nice-to-have |
| Historia playlist | 2 | 2 | 4 | Nice-to-have |

**Wniosek:** MVP ograniczone do 5 funkcji krytycznych — reszta po testach użytkowników.

---

## 6. Estymacje i Alokacja Zasobów

- **Rola:** Full-stack dev (1 osoba)
- **Dostępny czas:** 15h (2 tygodnie)
- **Dzienny wkład:** ~1.5h/dzień (projekt poza studiami)

| Faza | Zadania | Czas |
|------|---------|------|
| Dzień 1-2 | Setup + Landing | 3h |
| Dzień 3-4 | Quiz + Playlist Generation | 4h |
| Dzień 5-6 | Focus Mode (timer + audio) | 3h |
| Dzień 7 | LocalStorage + polish | 2h |
| Dzień 8 | QA + weryfikacja + deploy | 3h |

---

## 7. Ryzyka i Mitigacje

| ID | Ryzyko | Wpływ | Prawdopodobieństwo | Mitigacja |
|----|--------|-------|-------------------|-----------|
| R1 | Timer Pomodoro nie działa na mobile (background tab) | Wysokie | Średnie | Użycie Web Workers lub Service Workers; fallback do alertów |
| R2 | Dźwięki otoczenia nie ładują się (CORS/bandwidth) | Średkie | Niskie | Lokalne pliki w /public, lightweight MP3 (<500KB) |
| R3 | Quiz generuje pustą playlistę (brak dopasowań) | Średkie | Niskie | Fallback: domyślna playlista "mieszanka" |
| R4 | LocalStorage pełny / niedostępny | Niskie | Niskie | Try-catch, degradacja bez zapisu |
| R5 | Brak czasu na QA | Wysokie | Średnie | Ostatni dzień zarezerwowany na testy |

---

## 8. Plan Finansowy Krótkoterminowy

- **Runway:** Nie dotyczy (0 € kosztów miesięcznych)
- **Break-even:** Nie dotyczy (projekt studencki, brak monetyzacji)
- **Koszt oportunidadny:** 15h × stawka studencka (~50 zł/h) = **~750 zł** wartości pracy

---

## 9. Checklista MVP-Ready

- [x] Landing page z CTA "Rozpocznij" widoczny w 0s
- [x] Quiz z 3 pytaniami działa w <2 min
- [x] Playlista generowana w <10s ( AHA MOMENT )
- [x] Focus Mode: timer 25/5 min działa
- [x] Focus Mode: 3 dźwięki otoczenia odtwarzają się
- [x] LocalStorage zapisuje ostatnią kombinację
- [x] Wdrożenie na Vercel działa
- [x] Mobile-friendly (min. 375px)
- [x] Brak crashów na podstawowych ścieżkach

---

## 10. Output / Deliverables

- Time Audit: powyższa tabela (15h)
- Budget Audit: 0 € miesięcznie
- Macierz priorytetów: 5 funkcji krytycznych
- Ryzyka: 5 zidentyfikowanych z mitigacjami
- Checklista: 9 punktów do weryfikacji przed release'em
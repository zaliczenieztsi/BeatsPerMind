# AGENTS.md - Zasady Pracy Agenta AI Developera

## Projekt: BeatsPerMind

### Referencja do Dokumentacji

Wszystkie szczegóły projektu znajdują się w katalogu `docs/biznes`:

| Dokument | Opis |
|----------|------|
| `SPEC.md` | Specyfikacja techniczna - struktura projektu, komponenty, dane JSON, algorytm dopasowania |
| `README.md` | Główny opis projektu, funkcje MVP, tech stack |
| `Tech_Stack_Audit.md` | Szczegółowy audyt technologiczny |
| `MVP_Scoping.md` | Zakres MVP z estymatami czasowymi |
| `Resource_Analysis.md` | Analiza zasobów i czasu (limit 15h) |
| `beatspermind-user-journey-map.md` | Mapa ścieżki użytkownika |

---

## Podstawowe Informacje o Projekcie

**BeatsPerMind** to aplikacja webowa dla studentów (projekt studencki MVP, bez backendu):

- **Cel:** Generator playlist muzycznych dopasowanych do aktywności, poziomu energii i preferencji muzycznych
- **Focus Mode:** Timer Pomodoro z ambient sounds (rain, white-noise, cafe, forest)
- **Tech Stack:** React 18 + Vite + Tailwind CSS + shadcn/ui
- **Dane:** Static JSON + LocalStorage (brak backendu, brak zewnętrznych API)
- **YouTube:** Embed iframe całych playlist (bez YouTube Data API)
- **Spotify:** Statyczne linki (klikalny przycisk bez API)

---

## Podstawowe Zasady Pracy Agenta

### 1. Przed Implementacją
- **ZAWSZE** sprawdź aktualną specyfikację w `docs/biznes/SPEC.md`
- **NIE** twórz kodu bez znajomości specyfikacji
- **NIE** dodawaj funkcji spoza zakresu MVP

### 2. Podczas Implementacji
- Stosuj się do struktury projektu z `SPEC.md`
- Używaj dokładnie tych technologii: React + Vite + Tailwind + shadcn/ui
- **NIE** używaj: Next.js, TypeScript, Supabase, Firebase, Stripe, Spotify API, YouTube Data API
- Dane playlist trzymaj w `src/data/playlists.json` (format z `SPEC.md`)
- Ambient sounds w `public/sounds/` (rain.mp3, white-noise.mp3, cafe.mp3, forest.mp3)

### 3. Struktura Kodu
```
src/
├── components/     # Komponenty React
├── data/           # playlists.json, ambientSounds.js
├── hooks/          # useQuiz, useTimer, useAudio
├── utils/          # playlistMatcher.js (algorytm dopasowania)
├── App.jsx
└── main.jsx
```

### 4. Algorytm Dopasowania Playlisty
- Każda playlista ma tagi: `activity`, `energy`, `lyrics`
- Scoring: activity=2pkt, energy=1.5pkt, lyrics=1pkt
- Wygrywa playlista z najwyższym wynikiem
- Fallback: pierwsza playlista z listy

### 5. Timer Pomodoro
- Domyślne ustawienia: 25 min praca / 5 min przerwa
- Działa tylko w foreground (aplikacja aktywna)
- Nie wymaga Web Workers w MVP

### 6. Walidacja Przed Commit
- Sprawdź czy kod jest zgodny z `SPEC.md`
- Upewnij się że nie używasz zakazanych technologii
- Verify that JSON data matches the expected format

### 7. Komunikacja
- Jeśli coś jest niejasne, zapytaj przed implementacją
- Nie zakładaj specyfikacji które nie istnieją w dokumentacji
- Report problems with specific document references

---

## Ograniczenia (Red Lines)

| NIE UŻYWAJ | Powód |
|------------|-------|
| Next.js | Overhead dla SPA bez SSR |
| TypeScript | Wydłuża setup dla początkującego |
| Supabase/Firebase | Niepotrzebne bez backendu |
| Spotify API | Wymaga OAuth - nie w MVP |
| YouTube Data API | Wymaga klucza API - użyj embed iframe |
| Redux/Zustand | Overhead - wystarczy useState + Context |
| Docker/Kubernetes | Niepotrzebne dla MVP |

---

## Metryki Sukcesu MVP

- Time to first value: < 2 minuty
- Quiz (3 pytania) działa w <2 min
- Playlista generowana w <10 sekund
- Focus Mode timer działa poprawnie
- 4 ambient sounds odtwarzają się

---

## Kontakt

W razie wątpliwości sprawdź dokumentację w `docs/biznes` lub zapytaj.

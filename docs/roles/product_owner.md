# Product Owner - BeatsPerMind

## Vision

**Problem:** Studenci tracą 15-30 minut dziennie na szukanie odpowiedniej muzyki do nauki.

**Solution:** BeatsPerMind - aplikacja, która w 30 sekund generuje playlistę dopasowaną do:
- Aktywności (nauka, trening, praca, relaks)
- Poziomu energii (low → high slider)
- Preferencji muzycznych (tekst/instrumental)

**Value Proposition:** Oszczędność 6-10 godzin miesięcznie na szukaniu muzyki.

## Product Backlog

### Epic 1: Core MVP
| ID | Feature | Priority | Story Points | Status |
|----|---------|----------|--------------|--------|
| PO-001 | Landing Page z wejściem do quizu | High | 2 | ✅ Done |
| PO-002 | Quiz 3 pytań (activity, energy, lyrics) | High | 3 | ✅ Done |
| PO-003 | Algorytm dopasowania playlisty | High | 3 | ✅ Done |
| PO-004 | PlaylistView z YouTube embed | High | 3 | ✅ Done |

### Epic 2: Focus Mode
| ID | Feature | Priority | Story Points | Status |
|----|---------|----------|--------------|--------|
| PO-005 | Timer Pomodoro (25/5 min) | High | 3 | ✅ Done |
| PO-006 | Ambient sounds (4 dźwięki) | High | 2 | ✅ Done |
| PO-007 | Integracja z PlaylistView | Medium | 1 | ✅ Done |

### Epic 3: UX Polish
| ID | Feature | Priority | Story Points | Status |
|----|---------|----------|--------------|--------|
| PO-008 | Feature Cards w LearnMore | Medium | 2 | ✅ Done |
| PO-009 | Dark Mode z glow | Low | 2 | ✅ Done |
| PO-010 | Organic Breathing Visualizer | Low | 2 | ✅ Done |

## Priorities (MoSCoW)

### Must Have (MVP)
1. Quiz 3 pytania → dopasowanie playlisty
2. YouTube embed odtwarzanie
3. Timer Pomodoro
4. 4 ambient sounds

### Should Have
1. Dark Mode
2. Feature Cards edukacyjne

### Could Have
1. Personalizowane LearnMore z BPM
2. Cover z przyciskiem Play

### Won't Have (Future)
1. Użytkownicy z kontami
2. Spotify API
3. YouTube Data API
4. Persistence na serwerze

## Success Metrics

| Metryka | Cel | Status |
|---------|-----|--------|
| Time to first value | < 2 minuty | ✅ OK |
| Quiz flow | < 2 minuty | ✅ OK |
| Playlist generation | < 10 sekund | ✅ OK |
| Timer accuracy | 25/5 min | ✅ OK |
| Ambient sounds | 4 working | ✅ OK |
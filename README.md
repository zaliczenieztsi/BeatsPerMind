# BeatsPerMind 🎵🧠

**Twoja playlista do nauki w 30 sekund - dopasowana do BPM i Twojego nastroju.**

---

## 📋 Opis Projektu

BeatsPerMind to aplikacja webowa dla studentów, która generuje playlisty muzyczne dopasowane do:
- **Aktywności** (nauka, trening, praca, relaks)
- **Poziomu energii** (slider Low → High)
- **Preferencji muzycznych** (z tekstem / instrumentalna)

Dodatkowo aplikacja oferuje **Focus Mode** - timer Pomodoro z wbudowanymi dźwiękami tła (white noise, deszcz, kawiarnia).

---

## 📁 Struktura Plików z Dokumentacją

| # | Dokument | Opis |
|---|----------|------|
| 1 | [`README.md`](README.md) | Main README - podsumowanie projektu |
| 2 | [`beatspermind-business-plan.md`](docs/beatspermind-business-plan.md) | Pełna analiza biznesowa |
| 3 | [`beatspermind-product-spec.md`](beatspermind/beatspermind-product-spec.md) | Specyfikacja produktu |
| 4 | [`beatspermind-ice-ranking.md`](beatspermind/beatspermind-ice-ranking.md) | Ranking pomysłów metodą ICE |
| 5 | [`beatspermind-kill-the-idea.md`](beatspermind/beatspermind-kill-the-idea.md) | Analiza ryzyka - werdykt PIVOT |
| 6 | [`beatspermind-competitor-audit.md`](beatspermind/beatspermind-competitor-audit.md) | Analiza 8 konkurentów |
| 7 | [`beatspermind-icp-persona.md`](beatspermind/beatspermind-icp-persona.md) | Profil idealnego klienta |
| 8 | [`beatspermind-job-to-be-done.md`](beatspermind/beatspermind-job-to-be-done.md) | Analiza potrzeb użytkownika |
| 9 | [`beatspermind-mvp-scoping.md`](beatspermind/beatspermind-mvp-scoping.md) | Zakres MVP - 5 funkcji |
| 10 | [`beatspermind-monetization-strategy.md`](beatspermind/beatspermind-monetization-strategy.md) | Model cenowy Free/$4.99/$9.99 |
| 11 | [`beatspermind-tech-stack-audit.md`](beatspermind/beatspermind-tech-stack-audit.md) | Rekomendowane technologie |
| 12 | [`beatspermind-resource-analysis.md`](beatspermind/beatspermind-resource-analysis.md) | Analiza budżetu i zasobów |
| 13 | [`beatspermind-gtm-strategy.md`](beatspermind/beatspermind-gtm-strategy.md) | Strategia Go-To-Market |
| 14 | [`beatspermind-user-journey-map.md`](beatspermind/beatspermind-user-journey-map.md) | Mapa ścieżki użytkownika |

---

## 🎯 Problem i Rozwiązanie

| Problem | Rozwiązanie |
|---------|-------------|
| Studenci tracą 15-30 min dziennie na szukanie muzyki | Playlist generowany w 30 sekund |
| Brak integracji timer + muzyka | Focus Mode = Pomodoro + sounds |
| Muzyka z reklamami YouTube | Bez reklam, bez przerw |

---

## 👥 Docelowa Grupa (ICP)

**Studenci 18-25 lat** na kierunkach humanistycznych i ścisłych w Polsce i UE.

**Ból:** Traci 15-30 minut dziennie na szukanie odpowiedniej muzyki do nauki.
**Wartość:** Oszczędza 6-10 godzin miesięcznie.

---

## 🏆 Kluczowe Funkcje MVP

1. **Generator Playlist** - 3 pytania → playlist w 30 sekund
2. **BPM Display** - wyświetlanie tempa muzycznego
3. **YouTube Integration** - odtwarzanie bezpośrednio w aplikacji
4. **Focus Mode** - timer Pomodoro (25/5 min)
5. **Background Sounds** - white noise, deszcz, kawiarnia

---

## 💰 Model Monetyzacji

| Plan | Cena | Funkcje |
|------|------|---------|
| **Free** | $0 | 5 playlist/dzień, YouTube player |
| **Starter** | $4.99/mies. | Nieograniczone playlisty, link do Spotify |
| **Pro** | $9.99/mies. | + Focus Mode, + Background Sounds, + Export |

**Cel:** 100 płatnych użytkowników w 6 miesięcy.

---

## 🔧 Tech Stack

| Warstwa | Technologia |
|---------|-------------|
| Frontend | Next.js + TypeScript + Tailwind CSS |
| Backend | Supabase (PostgreSQL + Auth) |
| Płatności | Stripe |
| Hosting | Vercel |
| Email | Resend |
| API | YouTube Data API v3 |

**Estymacja developmentu:** 21 godzin (3 dni)

---

## 📊 Kanały Marketingu (GTM)

| Kanał | Strategia |
|-------|-----------|
| TikTok/Reels | "Get your study playlist in 30 seconds" |
| Reddit | r/study, r/college - posty z value |
| Micro-influencer | Studenccy influencerzy (500-2000 PLN/post) |
| Discord | Studenckie serwery |

**Budżet:** $450 w 6 miesięcy

---

## ⚠️ Ryzyka (Kill The Idea Analysis)

| Ryzyko | Poziom | Mitigation |
|--------|--------|------------|
| **Zero-Moat** | 🔴 Wysoki | Spotify może skopiować w 2 tygodnie |
| **Support Trap** | 🟡 Średni | Self-service FAQ + video tutorials |
| **Distribution Hell** | 🟢 Niski | TikTok + Reddit działają dla tej grupy |

**Verdykt:** PIVOT wymagany dla komercyjnego sukcesu - rozważ B2B API jako defence.

---

## 🚀 Jak Uruchomić

1. **Sklonuj repozytorium**
2. **Zainstaluj zależności:** `npm install`
3. **Skonfiguruj zmienne środowiskowe** (Supabase, Stripe, YouTube API)
4. **Uruchom dev server:** `npm run dev`
5. **Build na produkcję:** `npm run build`

---

## 📈 Metryki Sukcesu

| Metryka | Cel |
|---------|-----|
| Landing → Sign-up | >5% |
| Sign-up → First Output | >70% |
| Time to Aha Moment | <5 minut |
| Day-7 Return Rate | >30% |
| Trial → Paid | >3% |
| Churn Rate | <5%/miesiąc |

---

## 📞 Kontakt

W razie pytań: skontaktuj się z autorem.

---

**License:** MIT
**Version:** 1.0.0
**Last Updated:** 2026-03-23

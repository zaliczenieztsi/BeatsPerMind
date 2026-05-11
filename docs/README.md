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
| 2 | [`beatspermind-business-plan.md`](docs/biznes/beatspermind-business-plan.md) | Pełna analiza biznesowa |
| 3 | [`beatspermind-product-spec.md`](docs/biznes/beatspermind-product-spec.md) | Specyfikacja produktu |
| 4 | [`beatspermind-kill-the-idea.md`](docs/biznes/beatspermind-kill-the-idea.md) | Analiza ryzyka - werdykt PIVOT |
| 5 | [`beatspermind-competitor-audit.md`](docs/biznes/beatspermind-competitor-audit.md) | Analiza 8 konkurentów |
| 6 | [`beatspermind-icp-persona.md`](docs/biznes/beatspermind-icp-persona.md) | Profil idealnego klienta |
| 7 | [`beatspermind-job-to-be-done.md`](docs/biznes/beatspermind-job-to-be-done.md) | Analiza potrzeb użytkownika |
| 8 | [`beatspermind-mvp-scoping.md`](docs/biznes/beatspermind-mvp-scoping.md) | Zakres MVP - 5 funkcji |
| 9 | [`beatspermind-monetization-strategy.md`](docs/biznes/beatspermind-monetization-strategy.md) | Model cenowy Free/$4.99/$9.99 |
| 10 | [`beatspermind-tech-stack-audit.md`](docs/biznes/beatspermind-tech-stack-audit.md) | Rekomendowane technologie |
| 11 | [`beatspermind-resource-analysis.md`](docs/biznes/beatspermind-resource-analysis.md) | Analiza budżetu i zasobów |
| 12 | [`beatspermind-gtm-strategy.md`](docs/biznes/beatspermind-gtm-strategy.md) | Strategia Go-To-Market |
| 13 | [`beatspermind-user-journey-map.md`](docs/biznes/beatspermind-user-journey-map.md) | Mapa ścieżki użytkownika |

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

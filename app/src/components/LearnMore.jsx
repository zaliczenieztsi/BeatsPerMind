import { useState } from 'react'
import {
  Brain,
  Clock,
  Music2,
  Activity,
  Headphones,
  Sparkles,
  Target,
  Wind,
  Zap,
  Moon,
} from 'lucide-react'

const allFeatures = [
  {
    icon: Brain,
    title: 'Personalizacja',
    description:
      'Dopasowujemy muzykę do Twojej aktywności, poziomu energii i nastroju.',
  },
  {
    icon: Clock,
    title: 'Optymalne tempo',
    description:
      'BPM pomaga dobrać prędkość muzyki do rodzaju zadania – od relaksu po trening.',
  },
  {
    icon: Music2,
    title: 'Inteligentne dopasowanie',
    description:
      'Algorytm analizuje Twoje preferencje i tworzy playlistę idealnie dopasowaną do Ciebie.',
  },
  {
    icon: Activity,
    title: 'Nauka i trening',
    description:
      'Niższe tempo wspomaga koncentrację, wyższe daje energię podczas treningu.',
  },
  {
    icon: Headphones,
    title: 'Ambient Sounds',
    description:
      'Deszcz, biały szum, kawiarnia i las – idealne do nauki i relaksu.',
  },
  {
    icon: Sparkles,
    title: 'Focus Mode',
    description:
      'Timer Pomodoro z ambient sounds zwiększa Twoją efektywność nawet o 40%.',
  },
]

const bpmCategories = [
  {
    range: 'low',
    icon: Moon,
    title: 'Niskie BPM (40–60)',
    description:
      'Muzyka o tempie 40–60 BPM pozytywnie wpływa na koncentrację, redukcję stresu i wyciszenie organizmu. Jej spokojny rytm pomaga utrzymać skupienie podczas nauki, pracy czy czytania, a także wspiera relaks, medytację i przygotowanie do snu. Niskie BPM najlepiej sprawdza się przy aktywnościach wymagających spokoju, cierpliwości i równowagi, takich jak joga, spacer, stretching czy kreatywna praca.',
  },
  {
    range: 'medium',
    icon: Target,
    title: 'Średnie BPM (60–100)',
    description:
      'Tempo 60–100 BPM jest idealnym zakresem do utrzymania koncentracji i produktywności podczas nauki i pracy umysłowej. Umiarkowany rytm pomaga utrzymać stabilny poziom energii bez przytłaczania, jednocześnie wspierając przyswajanie informacji i dłuższe okresy skupienia. Średnie BPM doskonale dopasowują się do sesji nauki, pracy biurowej czy czytania wymagających tekstów.',
  },
  {
    range: 'high',
    icon: Zap,
    title: 'Wysokie BPM (100–160)',
    description:
      'Muzyka o wyższym tempie 100–160 BPM daje energię i motywację – to idealny wybór do treningu, biegania czy intensywnej aktywności fizycznej. Dynamiczny rytm przyspiesza bicie serca, zwiększa wytrzymałość i pomaga utrzymać wysoki poziom energii przez cały trening. Wysokie BPM świetnie motywują także podczas sprzątania, gotowania czy innych aktywności wymagających dynamiki.',
  },
]

function getBpmRangeCategory(bpmString) {
  if (!bpmString) return 'medium'
  const match = bpmString.match(/(\d+)/g)
  if (!match) return 'medium'
  const bpm = parseInt(match[0], 10)
  if (bpm <= 60) return 'low'
  if (bpm <= 100) return 'medium'
  return 'high'
}

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card flex flex-col items-center gap-3 rounded-2xl bg-background/20 backdrop-blur-sm border border-border p-5 transition-all duration-300 hover:bg-background/30 hover:shadow-[0_8px_25px_-5px_rgba(129,178,154,0.15)] hover:scale-[1.02] dark:bg-[oklch(0.15_0.005_260/0.5)] dark:border-[oklch(1_0_0/10%)] dark:hover:bg-[oklch(0.18_0.008_260/0.7)] dark:hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.4)] dark:hover:border-[oklch(0.5_0.15_150/0.3)]">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent-foreground dark:bg-[oklch(0.2_0.08_150/0.25)] dark:text-[oklch(0.5_0.15_150)] dark:border dark:border-[oklch(0.5_0.15_150/0.3)]">
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
    <div className="text-center">
      <h4 className="text-base font-semibold text-foreground mb-1 leading-tight dark:text-[oklch(0.95_0.01_260)]">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed dark:text-[oklch(0.75_0.01_260)]">{description}</p>
    </div>
  </div>
)

export default function LearnMore({ bpmRange } = {}) {
  const [isOpen, setIsOpen] = useState(false)

  const category = getBpmRangeCategory(bpmRange)
  const matchedCategory = bpmCategories.find((c) => c.range === category)

  return (
    <div className="w-full max-w-2xl mx-auto mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-background/30 backdrop-blur-sm border border-border text-left hover:bg-background/40 transition-all duration-300 dark:bg-[oklch(0.15_0.005_260/0.5)] dark:border-[oklch(1_0_0/10%)] dark:hover:bg-[oklch(0.18_0.008_260/0.7)] group"
      >
        <span className="font-medium text-foreground dark:text-[oklch(0.95_0.01_260)]">
          {bpmRange
            ? `Twój dobór: ${bpmRange} BPM – dowiedz się więcej`
            : 'Dowiedz się więcej'}
        </span>
        <svg
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} dark:text-[oklch(0.65_0.01_260)]`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`${
          isOpen
            ? 'max-h-[800px] opacity-100 mt-4'
            : 'max-h-0 opacity-0'
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="pt-3 px-2 pb-4 rounded-xl bg-background/20 backdrop-blur-sm border border-border space-y-4 dark:bg-[oklch(0.12_0.008_260/0.6)] dark:border-[oklch(1_0_0/10%)] inner-glow">
          {!bpmRange ? (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground text-sm mb-3 dark:text-[oklch(0.95_0.01_260)]">
                Jak działa dopasowywanie muzyki?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allFeatures.map((f, i) => (
                  <FeatureCard key={i} {...f} />
                ))}
              </div>
            </div>
            ) : (
            <div className="space-y-4">
              <h3 className="font-medium text-foreground text-sm mb-3 dark:text-[oklch(0.95_0.01_260)]">
                Twój dobór: {bpmRange} BPM
              </h3>
              {matchedCategory && (
                <div className="grid gap-3">
                  <FeatureCard
                    icon={matchedCategory.icon}
                    title={matchedCategory.title}
                    description={matchedCategory.description}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
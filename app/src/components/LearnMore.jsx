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
    icon: Moon,
    title: 'Niskie BPM (40–60)',
    description: 'Idealne do relaksu, medytacji i lekkiego odpoczynku.',
    range: 'low',
  },
  {
    icon: Target,
    title: 'Średnie BPM (60–100)',
    description: 'Doskonałe do nauki, pracy i utrzymania koncentracji.',
    range: 'medium',
  },
  {
    icon: Zap,
    title: 'Wysokie BPM (100–160)',
    description: 'Dają energię i motywację – świetne do treningu.',
    range: 'high',
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
  <div className="feature-card flex gap-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-5 transition-all duration-300 hover:bg-white/30 hover:shadow-[0_8px_25px_-5px_rgba(129,178,154,0.15)] hover:scale-[1.02]">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-bg text-accent-foreground">
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
    <div>
      <h4 className="text-sm font-medium text-foreground/90 mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function LearnMore({ bpmRange } = {}) {
  const [isOpen, setIsOpen] = useState(false)

  const category = getBpmRangeCategory(bpmRange)
  const matchedCategory = bpmCategories.find((c) => c.range === category)

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 text-left hover:bg-white/40 transition-all duration-300"
      >
        <span className="font-medium text-foreground/80">
          {bpmRange
            ? `Twój dobór: ${bpmRange} BPM – dowiedz się więcej`
            : 'Dowiedz się więcej'}
        </span>
        <svg
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[50rem] mt-4' : 'max-h-0'}`}>
        <div className="px-2 py-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 space-y-5">
          {!bpmRange ? (
            <div className="space-y-1">
              <h3 className="font-medium text-foreground/90 text-sm mb-3">
                Jak działa dopasowywanie muzyki?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allFeatures.map((f, i) => (
                  <FeatureCard key={i} {...f} />
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              <h3 className="font-medium text-foreground/90 text-sm mb-3">
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
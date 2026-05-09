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
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Personalizacja',
    description:
      'Dopasowujemy muzykę do Twojej aktywności, poziomu energii i nastroju, aby maksymalizować Twoją produktywność.',
  },
  {
    icon: Clock,
    title: 'Optymalne tempo',
    description:
      'BPM (Beats Per Minute) pomaga dobrać prędkość muzyki do rodzaju zadania – od relaksu po intensywny trening.',
  },
  {
    icon: Music2,
    title: 'Inteligentne dopasowanie',
    description:
      'Nasz algorytm analizuje Twoje preferencje i tworzy playlistę idealnie dopasowaną do Twoich potrzeb.',
  },
  {
    icon: Activity,
    title: 'Nauka i trening',
    description:
      'Stabilne, niższe tempo wspomaga koncentrację przy nauce, a wyższe BPM dają energię podczas treningu.',
  },
  {
    icon: Headphones,
    title: 'Ambient Sounds',
    description:
      'Odkryj bibliotekę ambient sounds – deszcz, biały szum, kawiarnia i las – idealne do nauki i relaksu.',
  },
  {
    icon: Sparkles,
    title: 'Focus Mode',
    description:
      'Włącz Timer Pomodoro z ambient sounds i zwiększ swoją efektywność nawet o 40%.',
  },
]

const bpmCardContent = [
  {
    icon: Target,
    title: 'Niskie BPM (40–60)',
    description: 'Idealne do relaksu, medytacji i lekkiego odpoczynku.',
  },
  {
    icon: Wind,
    title: 'Średnie BPM (60–100)',
    description: 'Doskonałe do nauki, pracy i utrzymania koncentracji.',
  },
  {
    icon: Sparkles,
    title: 'Wysokie BPM (100–160)',
    description: 'Dają energię i motywację – świetne do treningu i aktywności fizycznej.',
  },
]

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="feature-card flex gap-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 p-5 transition-all duration-300 hover:bg-white/30 hover:shadow-[0_8px_25px_-5px_rgba(129,178,154,0.15)] hover:scale-[1.02]">
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

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 text-left hover:bg-white/40 transition-all duration-300"
      >
        <span className="font-medium text-foreground/80">
          {bpmRange ? `Twój dobór: ${bpmRange} BPM – dowiedz się więcej` : 'Dowiedz się więcej'}
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

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[45rem] mt-4' : 'max-h-0'}`}>
        <div className="px-2 py-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 space-y-5">
          {!bpmRange ? (
            <div className="space-y-1">
              <h3 className="font-medium text-foreground/90 text-sm mb-3">
                Jak działa dopasowywanie muzyki?
              </h3>
              <div className="grid gap-3">{features.map((f, i) => <FeatureCard key={i} {...f} />)}</div>
            </div>
          ) : (
            <div className="space-y-1">
              <h3 className="font-medium text-foreground/90 text-sm mb-3">
                Twój dobór: {bpmRange} BPM
              </h3>
              <div className="grid gap-3">
                {bpmCardContent.map((c, i) => <FeatureCard key={i} {...c} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'

export default function LearnMore({ bpmRange } = {}) {
  const [isOpen, setIsOpen] = useState(false)

  const renderBpmContent = () => {
    // Nếu podano konkretny zakres BPM, generuj spersonalizowaną treść
    if (bpmRange) {
      return (
        <div>
          <h3 className="font-medium text-foreground/90 mb-2">Twój dobór: {bpmRange} BPM</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ten zakres tempa został dobrany specjalnie do Twojej aktualnej aktywności, poziomu energii i preferencji muzycznych. Muzyka w tym tempie najlepiej sprawdzi się podczas wykonywania Twoich zadań.
          </p>
        </div>
      )
    }
    // Wersja ogólna (dla strony głównej)
    return (
      <div>
        <h3 className="font-medium text-foreground/90 mb-2">Optymalne BPM dla aktywności</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• <strong>Niska aktywność</strong> (relaks) - 40-60 BPM</li>
          <li>• <strong>Średnia aktywność</strong> (nauka) - 60-80 BPM</li>
          <li>• <strong>Wysoka aktywność</strong> (siłownia) - 120-140 BPM</li>
        </ul>
      </div>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 text-left hover:bg-white/40 transition-all duration-300"
      >
        <span className="font-medium text-foreground/80">Dowiedz się więcej</span>
        <svg
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[28rem] mt-4' : 'max-h-0'}`}>
        <div className="px-6 py-5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 space-y-4">
          <div>
            <h3 className="font-medium text-foreground/90 mb-2">Czym jest BPM?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              BPM (Beats Per Minute) to tempoczęstotliwość rytmu muzycznego. W aplikacji pomaga dopasować prędkość muzyki do Twojej aktywności i potrzeb koncentracji.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-foreground/90 mb-2">Jak BPM wpływa na koncentrację?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rytm muzyczny oddziałuje na nasze tempa serca i mózgowe fale. Właściwe tempo może wspomóc utrzymanie uwagi i zmniejszyć rozproszenie.
            </p>
          </div>

          {renderBpmContent()}

          <div>
            <h3 className="font-medium text-foreground/90 mb-2">Aktywność fizyczna vs skupienie</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fizyczna aktywność wymaga wyższego tempa dla energii, natomiast głęboka praca kojarzy się z niższym, stabilnym rytmem wspierającym koncentrację.
            </p>
          </div>

          <p className="text-sm text-foreground/70 italic pt-2 border-t border-white/30">
            Tempo pracy wpływa na jakość skupienia.
          </p>
        </div>
      </div>
    </div>
  )
}

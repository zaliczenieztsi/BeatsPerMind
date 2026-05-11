import { useQuiz } from '../hooks/useQuiz'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export default function Quiz() {
  const navigate = useNavigate()
  const {
    questions,
    currentStep,
    answers,
    selectAnswer,
    nextStep,
    prevStep,
    isComplete
  } = useQuiz()

  const currentQuestion = questions[currentStep]
  const selectedValue = answers[currentQuestion.id]

  const handleSelect = (value) => {
    selectAnswer(value)
  }

  const handleNext = () => {
    if (isComplete) {
      localStorage.setItem('quizAnswers', JSON.stringify(answers))
      navigate('/playlist')
    } else {
      nextStep()
    }
  }

   return (
     <div className="max-w-xl mx-auto px-6 py-12">
       <div className="mb-10 animate-fade-in-up">
         <div className="flex justify-between items-center mb-3">
           <span className="text-xs uppercase tracking-widest text-muted-foreground dark:text-[oklch(0.65_0.01_260)]">
             Pytanie {currentStep + 1} z {questions.length}
           </span>
           <span className="text-xs text-muted-foreground dark:text-[oklch(0.65_0.01_260)]">
             {Math.round(((currentStep + 1) / questions.length) * 100)}%
           </span>
         </div>
         <div className="h-2 bg-secondary/50 rounded-full overflow-hidden dark:bg-[oklch(0.18_0.008_260/0.6)] dark:border dark:border-[oklch(1_0_0/8%)]">
           <div
             className="h-full bg-[oklch(0.55_0.05_160)] transition-all duration-700 ease-out rounded-full dark:bg-[oklch(0.55_0.15_150)] dark:shadow-[0_0_12px_oklch(0.55_0.15_150/0.4)]"
             style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
           />
         </div>
       </div>

       <div className="p-10 rounded-3xl bg-background/50 backdrop-blur-md border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mb-8 animate-scale-in dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4),0_0_40px_rgba(20,184,166,0.12)] dark:backdrop-blur-xl">
         <h2 className="text-2xl font-light text-center leading-relaxed mb-10 dark:text-[oklch(0.95_0.01_260)]">
           {currentQuestion.question}
         </h2>

         <div className="space-y-4">
           {currentQuestion.options.map((option, index) => (
             <Button
               key={option.value}
               variant={selectedValue === option.value ? 'default' : 'outline'}
               className="w-full h-auto py-5 px-6 rounded-2xl justify-start text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
               style={{ animationDelay: `${index * 0.1}s` }}
               onClick={() => handleSelect(option.value)}
             >
               {option.label}
             </Button>
           ))}
         </div>
       </div>

       <div className="flex gap-4 px-2 animate-fade-in-up stagger-2">
         {currentStep > 0 && (
           <Button 
             variant="ghost" 
             onClick={prevStep} 
             className="flex-1 rounded-2xl py-6 hover:bg-secondary/50 transition-all duration-300 dark:hover:bg-[oklch(0.18_0.008_260/0.8)] dark:text-[oklch(0.9_0.01_260)]"
           >
             Wstecz
           </Button>
         )}
         <Button
           onClick={handleNext}
           disabled={!selectedValue}
           className="flex-1 rounded-2xl py-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
         >
           {isComplete ? 'Zobacz playlistę' : 'Dalej'}
         </Button>
       </div>
     </div>
   )
}
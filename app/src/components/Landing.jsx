import { Link } from 'react-router-dom'
import LearnMore from './LearnMore'

export default function Landing() {
   return (
     <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4">
       <div className="text-center space-y-7 p-14 rounded-3xl bg-background/50 backdrop-blur-md border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] animate-scale-in dark:card-depth-2 dark:backdrop-blur-xl">
         <h1 className="text-6xl font-extralight tracking-wider text-foreground/90 animate-fade-in-up">
           BeatsPerMind
         </h1>
         <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in-up stagger-1">
           Odkryj muzykę dopasowaną do Twojej aktywności,
           poziomu energii i preferencji muzycznych.
         </p>
         <Link
           to="/quiz"
           className="mt-10 inline-flex items-center justify-center px-11 py-4 rounded-2xl bg-[oklch(0.55_0.05_160)] text-white font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_-10px_rgba(129,178,154,0.5)] dark:hover:shadow-[0_15px_40px_-10px_rgba(129,178,154,0.5),0_0_30px_rgba(129,178,154,0.2)] active:scale-95 relative overflow-hidden group dark:btn-glow"
         >
           <span className="relative z-10">Rozpocznij quiz</span>
           <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
         </Link>
       </div>
       <LearnMore />
     </div>
   )
}
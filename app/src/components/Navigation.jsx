import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  return (
    <header className="border-b border-border bg-background/30 backdrop-blur-sm sticky top-0 z-50 dark:border-[oklch(1_0_0/10%)] dark:bg-[oklch(0.1_0.005_260/0.7)] dark:backdrop-blur-xl">
      <div className="max-w-2xl mx-auto px-4 py-2.5 flex items-center justify-between">
        <NavLink to="/" className="font-light text-lg tracking-wide dark:text-[oklch(0.95_0.01_260)]">
          BeatsPerMind
        </NavLink>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium dark:text-[oklch(0.95_0.01_260)]' : 'font-normal text-muted-foreground dark:text-[oklch(0.65_0.01_260)]'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) => 
                `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium dark:text-[oklch(0.95_0.01_260)]' : 'font-normal text-muted-foreground dark:text-[oklch(0.65_0.01_260)]'}`
              }
            >
              Quiz
            </NavLink>
            <NavLink
              to="/playlist"
              className={({ isActive }) => 
                `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium dark:text-[oklch(0.95_0.01_260)]' : 'font-normal text-muted-foreground dark:text-[oklch(0.65_0.01_260)]'}`
              }
            >
              Playlist
            </NavLink>
            <NavLink
              to="/focus"
              className={({ isActive }) => 
                `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium dark:text-[oklch(0.95_0.01_260)]' : 'font-normal text-muted-foreground dark:text-[oklch(0.65_0.01_260)]'}`
              }
            >
              Focus
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}
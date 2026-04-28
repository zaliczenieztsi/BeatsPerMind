import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className="border-b border-white/30 bg-white/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-light text-lg tracking-wide">
          BeatsPerMind
        </NavLink>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => 
              `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium' : 'font-normal text-muted-foreground'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) => 
              `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium' : 'font-normal text-muted-foreground'}`
            }
          >
            Quiz
          </NavLink>
          <NavLink
            to="/playlist"
            className={({ isActive }) => 
              `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium' : 'font-normal text-muted-foreground'}`
            }
          >
            Playlist
          </NavLink>
          <NavLink
            to="/focus"
            className={({ isActive }) => 
              `text-sm transition-all duration-300 hover:opacity-70 ${isActive ? 'font-medium' : 'font-normal text-muted-foreground'}`
            }
          >
            Focus
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
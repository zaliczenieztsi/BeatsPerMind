# Developer - BeatsPerMind

## Standardy Kodu

### JavaScript/JSX Conventions
```javascript
// ✅ Good
const [isActive, setIsActive] = useState(false)
const handleClick = () => setIsActive(true)

// ❌ Bad
let active = false
function click() { active = true }

// Component naming - PascalCase
function TimerDisplay() {}

// Function naming - camelCase
function calculatePlaylistMatch() {}

// Constants - UPPER_SNAKE_CASE
const WORK_DURATION = 25 * 60
```

### File Structure
```
src/
├── components/     # React components
├── data/           # Static JSON, ambientSounds.js
├── hooks/          # Custom hooks (useQuiz, useTimer, useAudio)
├── utils/          # playlistMatcher.js
├── App.jsx
└── main.jsx
```

### Import Order
```javascript
// 1. React imports
import { useState, useEffect } from 'react'

// 2. Third-party
import { Button } from '@/components/ui/button'

// 3. Local components
import { Quiz } from './Quiz'

// 4. Utils/Hooks
import { useQuiz } from '@/hooks/useQuiz'
```

## Konwencje

### Tailwind CSS
```jsx
// ✅ Group by type: layout, spacing, visual, interactive
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg">

// ✅ Dark mode variants
<div className="bg-white dark:bg-slate-900">
```

### State Management
```javascript
// Quiz state shape
const initialQuizState = {
  currentStep: 0,
  answers: {
    activity: null,
    energy: null,
    lyrics: null
  },
  bestPlaylist: null
}

// Timer state shape
const initialTimerState = {
  mode: 'work',      // work | break
  timeLeft: 25 * 60,
  isRunning: false,
  pomodoroCount: 0
}
```

### Component Props
```jsx
// Destructure props
function PlaylistCard({ playlist, onSelect }) {
  return (
    <Card onClick={() => onSelect(playlist)}>
      <h3>{playlist.title}</h3>
    </Card>
  )
}
```

## Workflow Implementacji

### Development Process
1. **Branch:** `feature/nazwa-funkcjonalnosci`
2. **Implement:** Follow checklist in plan
3. **Test:** `npm run dev` - manual testing
4. **Build:** `npm run build` - verify no errors
5. **Commit:** Clear message referencing plan

### Commands
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint (if configured)
npm run lint
```

### Implementation Checklist
- [ ] Read SPEC.md for requirements
- [ ] Check existing components for patterns
- [ ] Create/update components
- [ ] Test in dev server
- [ ] Run production build
- [ ] Update plan file

### Error Handling
```javascript
// Console log errors during dev
useEffect(() => {
  if (error) {
    console.error('Quiz error:', error)
  }
}, [error])
```

### Performance Considerations
- Use `React.memo` for expensive components
- Debounce search/filter inputs
- Lazy load YouTube iframe
- Keep bundle small (no heavy libraries)
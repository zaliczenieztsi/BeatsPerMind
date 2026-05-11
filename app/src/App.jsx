import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Landing from './components/Landing'
import Quiz from './components/Quiz'
import PlaylistView from './components/PlaylistView'
import FocusMode from './components/FocusMode'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/playlist" element={<PlaylistView />} />
            <Route path="/focus" element={<FocusMode />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App

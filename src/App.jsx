import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import CoffeeCup from './components/CoffeeCup'
import Analytics from './components/Analytics'
import { loadSessions } from './services/storage'

export default function App() {
  const [focusMode, setFocusMode] = useState(false)
  const [sessions, setSessions] = useState(() => loadSessions())

  return (
    <div className={`app ${focusMode ? 'timer-active' : ''}`}>
      <button className="demo-button" onClick={() => setFocusMode((s) => !s)}>
        Toggle Focus Mode
      </button>

      <Sidebar setSessions={setSessions} sessions={sessions} />

      <main className="main-content">
        <div className="coffee-visualization">
          <CoffeeCup onFinish={(session) => setSessions((prev) => [session, ...prev])} />
          <Analytics sessions={sessions} />
        </div>
      </main>
    </div>
  )
}
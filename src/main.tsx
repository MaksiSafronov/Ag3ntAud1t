import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import { App } from './App'
import { createAppStore } from './features/audits/state'
import './workspace.css'

const base = import.meta.env.BASE_URL
const { pathname, hash, origin } = window.location
// Keep bookmarks from the previous hash-based router working.
if (pathname === base && hash.startsWith('#/')) {
  window.history.replaceState(null, '', origin + base + hash.slice(2))
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={createAppStore()}>
      <BrowserRouter basename={base}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

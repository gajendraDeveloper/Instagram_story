import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoryProvider } from './context/storyContext.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StoryProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </StoryProvider>
  </StrictMode>,
)

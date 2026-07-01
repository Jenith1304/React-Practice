import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AccordionProvider from './context/AccordionProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccordionProvider>
      <App />
    </AccordionProvider>
  </StrictMode>,
)

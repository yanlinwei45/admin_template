import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import suppressWarnings from './utils/suppressWarnings'

// 抑制已知的兼容性警告
suppressWarnings();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

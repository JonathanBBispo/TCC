import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'

// Acorda o back-end (o plano grátis do Render hiberna após 15 min sem tráfego) enquanto a tela carrega.
// Usa /docs porque o back-end ainda não tem uma rota de health check.
fetch('/api/docs', { cache: 'no-store' }).catch(() => {})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
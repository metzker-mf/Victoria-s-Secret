import App from '@/app/App'
import { ModalProvider } from '@/app/contexts'
import { GlobalStyle } from '@/shared'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <HashRouter>
      <ModalProvider>
        <GlobalStyle />
        <App />
      </ModalProvider>
    </HashRouter>
  </React.StrictMode>
)
reportWebVitals(console.log)

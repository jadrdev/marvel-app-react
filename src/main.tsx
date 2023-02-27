import React from 'react'
import ReactDOM from 'react-dom/client'

import { MarvelContextProvider } from './context/MarvelContext'
import AppRoutes from './routes/AppRoutes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MarvelContextProvider>
      <AppRoutes />
    </MarvelContextProvider>
  </React.StrictMode>,
)

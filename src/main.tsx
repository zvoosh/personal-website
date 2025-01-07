import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter basename='https://zvoosh.github.io/personal-website/'> */}
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true}}>
      <App />
    </HashRouter>
  </React.StrictMode>,
)


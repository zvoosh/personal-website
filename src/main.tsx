import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <BrowserRouter basename='https://zvoosh.github.io/personal-website/'> */}
    <BrowserRouter basename='/personal-website/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; // Fix: Import the default export 'App' from './App' module
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tours from './components/Tours/Tours.jsx'
import Reviews from './components/Reviews/Reviews.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reviews/>
    <Tours/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Tours from './components/Tours/Tours.jsx'
import Reviews from './components/Reviews/Reviews.jsx'
import Accordions from './components/Accordion/Accordions.jsx'
import Menus from './components/Menu/Menus.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menus/>
    <Accordions/>
    <Reviews/>
    <Tours/>
  </React.StrictMode>,
)

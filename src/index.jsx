import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Counter from './Counter.jsx'
import Toggle from './Toggle.jsx'
import Nav from './Nav.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header heading="Saaqi Practices React"/>
    <Toggle />
    <Counter />
  </React.StrictMode>,
)

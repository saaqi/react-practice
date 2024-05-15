import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Counter from './Counter.jsx'
import Toggle from './Toggle.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Nav from './Nav.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Header heading="Saaqi Practices React" />
      <Routes>
        <Route path="/toggle-button" element={<Toggle />} />
        <Route path="/counter-button" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

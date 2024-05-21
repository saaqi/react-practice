import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import Counter from './components/CounterButton.jsx'
import Toggle from './components/ToggleButton.jsx'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="min-vh-100 align-items-center d-flex justify-content-center">
        <div className="container my-4 text-center">
          <Nav />
          <Header heading="Saaqi Practices React" />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/toggle-button" element={<Toggle />} />
            <Route path="/counter-button" element={<Counter />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import CounterButton from './components/CounterButton.jsx'
import { ThemeProvider } from './components/context/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton.jsx'
import NotFound from './components/NotFound.jsx'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="min-vh-100 align-items-center d-flex justify-content-center">
        <div className="container my-4 text-center">
          <Header heading="Saaqi Practices React" />
          <Nav />
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/counter-button" element={<CounterButton />} />
            <Route path="/theme-toggle-button" element={
              <ThemeProvider>
                <ThemeToggleButton text="Toggle Color"/>
              </ThemeProvider>
            } />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
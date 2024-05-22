import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import CounterButton from './components/CounterButton.jsx'
import { ThemeProvider } from './components/context/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton.jsx'
import Calculator from './components/Calculator.jsx'
import NotFound from './components/NotFound.jsx'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Nav />

        <main className="align-items-center d-flex justify-content-center my-5">
          <div className="container my-4 text-center">

            {/* Navigation */}

            <Routes>

              {/* Home */}
              <Route path="/react-practice/" element={
                <Home
                  heading="Practice Project for React Basic Course."
                  // documentTitle="nyet"
                  // documentDescription=""
                  // documentURL="/counter-button"
                />
              } />

              {/* Counter Button */}
              <Route path="/react-practice/counter-button" element={
                <CounterButton
                  // documentTitle="nyet"
                  // documentDescription=""
                  // documentURL="/counter-button"
                />
              } />

              {/* Theme Toggle Button */}
              <Route path="/react-practice/theme-toggle-button" element={
                <ThemeProvider>
                  <ThemeToggleButton
                    text="Toggle Theme"
                    // documentTitle=""
                    // documentDescription=""
                    // documentURL="/theme-toggle-button"
                  />
                </ThemeProvider>
              } />

              {/* Calculator */}
              <Route path="/react-practice/calculator" element={
                  <Calculator
                    // documentTitle=""
                    // documentDescription=""
                    // documentURL="/theme-toggle-button"
                  />
              } />

              {/* 404 Page */}
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

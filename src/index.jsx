import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import { ThemeProvider } from './components/context/ThemeContext'
import Calculator from './components/Calculator.jsx'
import NotFound from './components/NotFound.jsx'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          {/* Navigation */}
          <Nav />
          <main className="align-items-center d-flex justify-content-center my-5">
            <div className="container my-4 text-center">
              <Routes>
                {/* Home */}
                <Route path="/" element={<Home heading="Practice Project for React." />} />
                {/* Calculator */}
                <Route path="/calculator" element={<Calculator />} />
                {/* 404 Page */}
                <Route path='*' element={<NotFound />}/>
              </Routes>
            </div>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

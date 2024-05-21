import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
import CounterButton from './components/CounterButton.jsx'
import { ThemeProvider } from './components/context/ThemeContext'
import ThemeToggleButton from './components/ThemeToggleButton.jsx'
import NotFound from './components/NotFound.jsx'

import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <main className="min-vh-100 align-items-center d-flex justify-content-center">
          <div className="container my-4 text-center">
            <Nav />
            <Routes>
              <Route path="/" element={
                <>
                <Helmet>
                  <title>Practice Project for React Basic Course.</title>
                    <meta
                      name='description'
                      content='page for practicing react for Saqib Islam.'
                    />
                  <link rel="canonical" href="/" />
                </Helmet>
                <Header heading="Practice Project for React Basic Course." />
              </>
              } />
              <Route path="/counter-button" element={
                <CounterButton
                  // documentTitle="nyet"
                  // documentDescription=""
                  // documentURL="/counter-button"
                />
              } />
              <Route path="/theme-toggle-button" element={
                <ThemeProvider>
                  <ThemeToggleButton
                    text="Toggle Theme"
                    // documentTitle=""
                    // documentDescription=""
                    // documentURL="/theme-toggle-button"
                  />
                </ThemeProvider>
              } />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

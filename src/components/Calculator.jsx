import { useState, useContext, useRef } from 'react'
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, webSiteTitle } from './DefaultData'
import { ThemeContext } from './context/ThemeContext'

import './Calculator.css'


const Calculator = props => {
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)
  const [memory, setMemory] = useState(0)

  // Consume the theme context using useContext hook
  const { theme } = useContext(ThemeContext)
  // Style the button based on the current theme
  const buttonStyle = theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'
  const calculateButtonStyle = theme === 'light' ? 'btn-warning border-dark' : 'btn-success'

  const plus = e => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    const newMemory = result === 0 ? inputValue : result + inputValue;
    setResult(newMemory);
    setMemory(newMemory);
    inputRef.current.value = null; // Clear input field
  }

  const minus = e => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    const newMemory = result === 0 ? inputValue : result - inputValue;
    setResult(newMemory);
    setMemory(newMemory);
    inputRef.current.value = null; // Clear input field
  }

  const times = e => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    const newMemory = result === 0 ? inputValue : result * inputValue;
    setResult(newMemory);
    setMemory(newMemory);
    inputRef.current.value = null; // Clear input field
  }

  const divide = e => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    const newMemory = result === 0 ? inputValue : result / inputValue;
    setResult(newMemory);
    setMemory(newMemory);
    inputRef.current.value = null; // Clear input field
  }

  const resetInput = e => {
    e.preventDefault();
    inputRef.current.value = null;
    // inputRef.current.focus();
  }

  const resetResult = e => {
    e.preventDefault();
    setResult(0);
    // inputRef.current.focus();
  }

  const resetAll = e => {
    e.preventDefault();
    resetInput(e);
    resetResult(e);
  };

  return (
    <>
      <Helmet>
        <title>{props.documentTitle ? props.documentTitle : 'Calculator App - ' + webSiteTitle}</title>
        <meta
          name='description'
          content={
            props.documentDescription ?
            props.documentDescription :
            'This page is written by Saqqi for Calculator app.'
          }
        />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation()} />
      </Helmet>


      <div className="App text-center d-flex flex-column align-items-center">
        <h1 className="fs-2">Calculator:</h1>
        <form className="d-flex flex-column gap-2">
          <p className='result py-1 mt-4 rounded shadow-sm bg-info text-bg-info fw-medium fs-2' ref={resultRef}>
            {result}
          </p>
          <input
            className="input-field fs-5 fw-medium form-control border-primary-subtle mb-2"
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div className="input__container">
            <div className="digit__buttons">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
                <button
                  key={number}
                  className={'btn fs-4 px-4 ' + buttonStyle}
                  onClick={(e) => {
                    e.preventDefault()
                    inputRef.current.value = inputRef.current.value + number
                  }}
                >
                  {number}
                </button>
              ))}
              <button className="btn btn-danger" onClick={resetInput}>CE</button>
              <button className="btn btn-danger" onClick={resetAll}>AC</button>
            </div>
            <div className="calculate__buttons">
              <button className={"btn fs-4 " + calculateButtonStyle} onClick={divide}>/</button>
              <button className={"btn fs-4 " + calculateButtonStyle} onClick={times}>X</button>
              <button className={"btn fs-4 " + calculateButtonStyle} onClick={minus}>-</button>
              <button className={"btn fs-4 " + calculateButtonStyle} onClick={plus}>+</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Calculator;
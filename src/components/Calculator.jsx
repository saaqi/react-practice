import { useState, useContext, useRef } from 'react'
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, webSiteTitle } from './DefaultData'
import { ThemeContext } from './context/ThemeContext'

import './Calculator.css'


function Calculator(props) {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // Consume the theme context using useContext hook
  const { theme } = useContext(ThemeContext);
  // Style the button based on the current theme
  const buttonStyle = theme === 'light' ? 'btn-outline-dark' : 'btn-outline-light'
  const calculateButtonStyle = theme === 'light' ? 'btn-warning border-dark' : 'btn-success'

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value))
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result ? result * Number(inputRef.current.value) : Number(inputRef.current.value))
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result ? result / Number(inputRef.current.value) : Number(inputRef.current.value))
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
    // inputRef.current.focus();
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    // inputRef.current.focus();
  };

  function resetAll(e) {
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
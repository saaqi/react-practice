import { useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, webSiteTitle } from './DefaultData'



function Calculator(props) {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result ? result / Number(inputRef.current.value): 0);
  };

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = null;
    inputRef.current.focus();
  };

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.focus();
  };

  function resetAll(e) {
    e.preventDefault();
    resetInput(e);
    resetResult(e);
  };


  const styles = {
    maxWidth: '500px'
  }
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
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation() } />
      </Helmet>


      <div className="App text-center d-flex flex-column align-items-center">
        <h1 className="fs-2">Saaqi's React Calculator App.</h1>
        <form style={styles} className="d-flex flex-column gap-2">
          <p
            className='result py-1  mt-4 rounded shadow-sm bg-info text-bg-info fw-medium fs-2'
            ref={resultRef}
          >
            {result}
          </p>
          <input
            className="input-field w-100"
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div className="btn-group mt-4 shadow-sm">
            <button className="btn btn-outline-primary fs-4 px-4" onClick={plus}>+</button>
            <button className="btn btn-outline-primary fs-4 px-4" onClick={minus}>-</button>
            <button className="btn btn-outline-primary fs-4 px-4" onClick={times}>X</button>
            <button className="btn btn-outline-primary fs-4 px-4" onClick={divide}>/</button>
          </div>
          <div className="btn-group mt-4 shadow-sm">
            <button className="btn btn-danger border-dark" onClick={resetInput}>Reset Input</button>
            <button className="btn btn-danger border-dark" onClick={resetResult}>Reset Result</button>
            <button className="btn btn-danger border-dark" onClick={resetAll}>Reset All</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Calculator;
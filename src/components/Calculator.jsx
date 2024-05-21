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
    setResult((result) => result / Number(inputRef.current.value));
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

  return (
    <>
      <Helmet>
        <title>{
          props.documentTitle ?
            props.documentTitle :
            'Calculator App - ' + webSiteTitle
        }</title>
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
      <div className="App">
        <h1 className="fs-2">Saaqi's React Calculator App.</h1>
        <form>
          <p
            className='result py-1 my-4 rounded shadow-sm bg-warning text-bg-warning fw-medium fs-2'
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
            <button className="btn btn-outline-dark" onClick={plus}>Add +</button>
            <button className="btn btn-outline-dark" onClick={minus}>Minus -</button>
            <button className="btn btn-outline-dark" onClick={times}>Times *</button>
            <button className="btn btn-outline-dark" onClick={divide}>Divide /</button>
          </div>
          <br />
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
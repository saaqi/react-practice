import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { WebSiteLocation, WebSiteTitle } from './DefaultData'

function CounterButton(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Helmet>
        <title>{
          props.documentTitle ?
            props.documentTitle :
            'Press Counter Button - ' + WebSiteTitle()
        }</title>
        <meta
          name='description'
          content={
            props.documentDescription ?
            props.documentDescription :
            'This page is written by Saqqi for press counter button.'
          }
        />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation() } />
      </Helmet>
      <button className="btn btn-lg btn-outline-primary" onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default CounterButton

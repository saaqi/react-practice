import { WebSiteLocation } from './DefaultData'
import { Helmet } from 'react-helmet-async';

function Home(props) {
  return (
    <>
      <Helmet>
        <title>
          {
            props.documentTitle ?
            props.documentTitle :
            'Practice Project for React Basic Course.'
          }
        </title>
        <meta
          name='description'
          content={
            props.documentDescription ?
            props.documentDescription :
            'page for practicing react for Saqib Islam.'
          }
          />
        <link rel="canonical" href={props.documentURL ? props.documentURL : WebSiteLocation() } />
      </Helmet>

      <h1>{props.heading ? props.heading : 'Practice Project for React Basic Course.'}</h1>

    </>
  )
}

export default Home

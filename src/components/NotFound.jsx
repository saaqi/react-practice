import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Error - Page not found.</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="contianer" style={{display:'grid',justifyContent:'center'}}>
        <div id="notfound text-center" style={{maxWidth:'600px'}}>
          <div className="notfound">
            <h1 className="display-1 fw-medium mb-3">Oops!</h1>
            <h2>404 - Page not found</h2>
            <p>Uh-oh! It seems the page you're looking for has either been removed, relocated, or may not exist at all. Before you venture further, double-check the URL in your browser. If all seems well, consider navigating back to our homepage to explore anew. Thanks for your understanding!</p>
            <a className="btn btn-dark" href="/">Go To Homepage</a>
          </div>
        </div>
      </div>
    </>
  )
}
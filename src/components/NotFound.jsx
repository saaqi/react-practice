export default function NotFound() {
  return (
    <div className="contianer">
      <div id="notfound">
        <div className="notfound">
          <h1 className="display-1 fw-medium mb-3">Oops!</h1>
          <h2>404 - Page not found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <a className="btn btn-dark" href="/">Go To Homepage</a>
        </div>
      </div>
    </div>
  )
}
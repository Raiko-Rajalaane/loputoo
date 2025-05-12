import { Link } from "react-router-dom"

function About() {
  return (
    <div 
    className="d-flex flex-column justify-content-center align-items-center"
    style={{ minHeight: '85vh' }}
  >
    <h1 className="text-center">If you can read this, then you must hire me.</h1>
    <p className="lead text-center">I've got no experience, but also very little talent...</p>
    <Link to="/contact"><button>Hire me now</button></Link>
  </div>
  )
}

export default About

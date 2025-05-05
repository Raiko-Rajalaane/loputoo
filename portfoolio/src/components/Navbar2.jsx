import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <Link to="/"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/projects"><button>Projects</button></Link>
      <Link to="/contact"><button>Contact</button></Link>
    </div>
  )
}

export default Navbar

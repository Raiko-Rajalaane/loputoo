
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NavigationBar from './components/NavigationBar'
import { Container } from 'react-bootstrap'


function App() {


  return (
    <div>
      <NavigationBar />

      <Container>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> }/>
          <Route path="/projects" element={ <Projects /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </Container>
    </div>
  )
}

export default App

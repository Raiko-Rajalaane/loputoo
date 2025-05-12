import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import i18n from "../i18n";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Courses & Stack
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            <div
              style={{
                position: "fixed",
                bottom: 10,
                left: 10,
                display: "flex",
                gap: 8,
                zIndex: 999,
              }}
            >
              <button
                onClick={() => i18n.changeLanguage("en")}
                style={{
                  fontSize: 24,
                  border: 0,
                  background: "none",
                  cursor: "pointer",
                }}
              >
                🇬🇧
              </button>
              <button
                onClick={() => i18n.changeLanguage("et")}
                style={{
                  fontSize: 24,
                  border: 0,
                  background: "none",
                  cursor: "pointer",
                }}
              >
                🇪🇪
              </button>
            </div>

            <button
              onClick={() => document.body.classList.toggle("dark")}
              style={{
                position: "fixed",
                bottom: 10,
                right: 10,
                fontSize: 24,
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              aria-label="Toggle dark mode"
            >
              🌙
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

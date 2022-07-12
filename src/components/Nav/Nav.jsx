import { useUpdateMainContext } from '../../contexts/MainContext';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { useState } from 'react';
import styles from './Nav.module.css'

const NavComponent = () => {

  const {changeView, openOffersView} = useUpdateMainContext();
  const [expanded, setExpanded] = useState(false)

  const setView = (view, callback) => {
    setExpanded(false)
    callback(view)
  }

  return (
    <Navbar bg="dark" expand="sm" variant="dark" expanded={expanded}>
      <Container className="py-3" fluid>
        <Navbar.Brand href="/">SinaArtz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item onClick={() => setView('home', changeView)}>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Services" className={styles.DropDown}>
              <NavDropdown.Item onClick={() => setView("Abstract Art", openOffersView)}>Abstract Art</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setView("Abstract Painting", openOffersView)}>Abstract Painting</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setView("Face Art", openOffersView)}>Face Art</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item onClick={() => setView('about', changeView)}>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => setView('contact', changeView)}>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavComponent
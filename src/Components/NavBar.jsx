import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({setSelectedCategory, setSelectedCountry}) => {
  return (
    <div>
        <Navbar   expand="lg" className="bg-body-tertiary sticky-top" bg="dark" data-bs-theme="dark"  >
      <Container>
        <Navbar.Brand href="#home" className='mt-0'><h2 className='fs-4'><Badge bg="warning" text="dark">NEWS APP</Badge></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="Country" id="basic-nav-dropdown" className="justify-content-end">
              
              
              <NavDropdown.Item onClick={()=>setSelectedCountry("in")}>India</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>setSelectedCountry("us")}>United States</NavDropdown.Item>
              
              
              <NavDropdown.Divider />
              
            </NavDropdown>

            <Nav.Link onClick={()=>setSelectedCategory("general")}>General</Nav.Link>
            <Nav.Link onClick={()=>setSelectedCategory("entertainment")}>Entertainment</Nav.Link>
            <Nav.Link onClick={()=>setSelectedCategory("science")}>Science</Nav.Link>
            <Nav.Link onClick={()=>setSelectedCategory("sports")}>Sports</Nav.Link>
            <Nav.Link onClick={()=>setSelectedCategory("technology")}>Technology</Nav.Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBar;

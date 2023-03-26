import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink  ,  Link } from 'react-router-dom';
import './css/NavBarX.css';


function NavBarx() {
  return (
    <>
      { <Navbar bg="Cornsilk" variant="Cornsilk" className='NavTitle'>
        <Container>
          <Navbar.Brand  to="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Pictures">Pictures</NavLink>
            <NavLink to="/Book Now">Book Now</NavLink>
          </Nav>
        </Container>
      </Navbar>
     
    
    }


    </>
  );
}

export default NavBarx;
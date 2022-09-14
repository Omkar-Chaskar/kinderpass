import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className='m-auto d-flex justify-content-between'>
          <Link to="/" className='d-flex align-items-center'><Navbar.Brand><h1>KinderPass</h1></Navbar.Brand></Link>
          <Nav>
            <Link to="login" className=''><Nav.Link >LogIn</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

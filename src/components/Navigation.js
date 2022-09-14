import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className='m-0 d-flex justify-content-between'>
          <Navbar.Brand href=""><h1>Navbar</h1></Navbar.Brand>
          <Nav>
            <Nav.Link href="login">LogIn</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

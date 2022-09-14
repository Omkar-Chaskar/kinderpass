import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from "../context";

export default function Navigation() {
  const { logOutHandler, user } = useAuth();
  const { loginStatus } = user;
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container className='m-0 d-flex justify-content-between'>
          <Navbar.Brand href=""><h1>Navbar</h1></Navbar.Brand>
          <Nav>
            {loginStatus ? (
              <button className='btn btn-primary fw-bolder text-uppercase'
              onClick={(e) => {logOutHandler()}}>Log Out</button>
            ):(
              <Link to="/" className='text-light text-decoration-none fw-bolder text-uppercase'>LogIn</Link>
            )}
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

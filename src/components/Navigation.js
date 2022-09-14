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
        <Container className='m-auto d-flex justify-content-between'>
          <Link to="/" className='d-flex align-items-center'><Navbar.Brand><h1>KinderPass</h1></Navbar.Brand></Link>
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

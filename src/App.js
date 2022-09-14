import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from './components/Navigation';
import { useAuth } from "./context";

function App() {
  const { user } = useAuth();
  const { loginStatus } = user;

  return (
    <div>
      <Navigation />
      <Container className="d-grid h-100 justify-content-center m-auto p-2">
        {loginStatus ? (
          <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        ):(
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        )}
      </Container>
    </div>
  );
}

export default App  
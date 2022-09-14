import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Container className="d-grid h-100 container-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signip" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App  
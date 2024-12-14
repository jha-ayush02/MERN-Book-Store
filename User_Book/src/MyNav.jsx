import { Navbar, Container, Nav, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Login from "./Login";
import Logo from "./assets/Logo.png";
function MyNav() {
  let [showModal, setShowModal] = useState(false);

  return (
    <Container fluid>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Img src='../public/Logo.png'></Img> */}
          <Navbar.Brand>
            <img src={ Logo } width="50" height="40"></img>
            {/* <i className=" fs-4 bi bi-shop"></i> */}
            Book Store
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
          <Button variant="light" onClick={ ()=>setShowModal(true) }>Login/SignUp</Button>
        </Container>
      </Navbar>
        {
          showModal && <Login />
        }

    </Container>
  );
}

export default MyNav;

import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // Import an icon for the cart

function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link}>
              Product
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Enhanced My Bag Cart Link */}
        <Navbar.Text>
          <Nav.Link
            to="/cart"
            as={Link}
            className="d-flex align-items-center position-relative"
          >
            <FaShoppingCart size={20} className="me-1" />
            {cartProducts.length > 0 && (
              <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                {cartProducts.length}
              </span>
            )}
          </Nav.Link>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;

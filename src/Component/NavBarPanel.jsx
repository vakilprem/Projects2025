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
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import "./NavBar.css"; // Import the CSS file

function NavBarPanel() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="custom-navbar shadow-sm py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-logo">
          <span className="brand-text">Redux Shop</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/#" className="nav-link-custom mx-2">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/#" className="nav-link-custom mx-2">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/#" className="nav-link-custom mx-2">
              Deals
            </Nav.Link>
          </Nav>
          
          <div className="d-flex align-items-center">
            <Button variant="outline-secondary" className="search-btn me-3">
              <FaSearch to="#"/>
            </Button>
            
            <Button variant="outline-secondary" className="account-btn me-3">
              <FaUser />
            </Button>
            
            <Link to="/cart" className="cart-icon-container">
              <div className="cart-icon-wrapper">
                <FaShoppingCart size={20} />
                {cartProducts.length > 0 && (
                  <span className="cart-badge">
                    {cartProducts.length}
                  </span>
                )}
              </div>
              <span className="ms-2 d-none d-sm-inline cart-text">
                Cart
              </span>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPanel;


//  Using React Bootstrap (what you're currently using)
// import React from "react";
// import { Container, Nav, Navbar, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
// import "./NavBar.css";

// function NavBarPanel() {
//   const cartProducts = useSelector((state) => state.cart);

//   return (
//     <Navbar bg="white" expand="lg" className="shadow-sm py-3">
//       <Container>
//         <Navbar.Brand as={Link} to="/" className="fw-bold">Redux Toolkit Shop</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="mx-auto">
//             <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
//             <Nav.Link as={Link} to="/products" className="mx-2">Products</Nav.Link>
//             <Nav.Link as={Link} to="/categories" className="mx-2">Categories</Nav.Link>
//           </Nav>
//           <div className="d-flex align-items-center">
//             <Button variant="light" className="rounded-circle me-2">
//               <FaSearch />
//             </Button>
//             <Button variant="light" className="rounded-circle me-2">
//               <FaUser />
//             </Button>
//             <Link to="/cart" className="position-relative d-flex align-items-center text-decoration-none text-dark">
//               <FaShoppingCart size={20} />
//               {cartProducts.length > 0 && (
//                 <span className="position-absolute translate-middle badge rounded-pill bg-danger cart-badge">
//                   {cartProducts.length}
//                 </span>
//               )}
//               <span className="ms-2 d-none d-sm-inline">Cart</span>
//             </Link>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
// export default NavBarPanel;





// Using Tailwind CSS
// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";

// function NavBarPanel() {
//   const cartProducts = useSelector((state) => state.cart);

//   return (
//     <nav className="bg-white shadow-sm py-4">
//       <div className="container mx-auto px-4 flex items-center justify-between">
//         <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
//           Redux Shop
//         </Link>
        
//         <div className="hidden lg:flex space-x-8">
//           <Link to="/" className="font-medium hover:text-blue-600 transition-colors relative group">
//             Home
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
//           </Link>
//           <Link to="/products" className="font-medium hover:text-blue-600 transition-colors relative group">
//             Products
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
//           </Link>
//           <Link to="/categories" className="font-medium hover:text-blue-600 transition-colors relative group">
//             Categories
//             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
//           </Link>
//         </div>
        
//         <div className="flex items-center space-x-4">
//           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <FaSearch />
//           </button>
//           <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
//             <FaUser />
//           </button>
//           <Link to="/cart" className="flex items-center text-gray-800 hover:text-blue-600 transition-colors">
//             <div className="relative">
//               <FaShoppingCart size={20} />
//               {cartProducts.length > 0 && (
//                 <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-gradient-to-r from-red-400 to-red-600 text-white text-xs font-bold border-2 border-white animate-pulse">
//                   {cartProducts.length}
//                 </span>
//               )}
//             </div>
//             <span className="ml-2 hidden sm:block font-medium">Cart</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
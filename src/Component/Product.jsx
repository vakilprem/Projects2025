// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Card, Button } from "react-bootstrap"; // Import Card and Button from react-bootstrap
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../store/cartSlice";
// import { getProducts } from "../store/productSlice";
// // import { add } from "../store/store";
// function Product() {
//   //   const [products, setProducts] = useState([]);
//   const disptch = useDispatch();
//   const { data: products } = useSelector((state) => state.products);

//   useEffect(() => {
//     disptch(getProducts());
//     // async function fetchProduct() {
//     //   try {
//     //     const response = await axios.get("https://fakestoreapi.com/products");
//     //     setProducts(response?.data);
//     //     console.log(response.data);
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // }
//     // fetchProduct();
//   }, []);

//   const AddToCart = (product) => {
//     // dispach the action => add action
//     // disptch(add(product));
//     disptch(add(product));
//   };

//   const cart = products.map((product) => (
//     <div className="col-md-3" key={product.id}>
//       <Card style={{ width: "18rem" }}>
//         <div style={{ textAlign: "center" }}>
//           <Card.Img
//             variant="top"
//             src={product.image}
//             style={{ width: "100px", height: "130px" }}
//           />
//         </div>
//         {/* Use product image URL */}
//         <Card.Body style={{ textAlign: "center" }}>
//           <Card.Title>{product.title}</Card.Title> {/* Display product title */}
//           <Card.Text>INR{product.price}</Card.Text>{" "}
//           {/* Display product description */}
//         </Card.Body>
//         <Card.Footer style={{ textAlign: "center" }}>
//           <Button onClick={() => AddToCart(product)} variant="primary">
//             Add to Cart
//           </Button>
//         </Card.Footer>
//       </Card>
//     </div>
//   ));

//   return (
//     <>
//       <div
//         className="text-center"
//         style={{ marginTop: "20px", marginBottom: "20px" }}
//       >
//         {/* "Product Details page" centered at the top */}
//         <h1>Product Details Page</h1>
//       </div>
//       <div className="row">{cart}</div>
//     </>
//   );
// }

// export default Product;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import { FiShoppingCart, FiHeart, FiStar } from "react-icons/fi";
import "./Product.css"; // We'll create this CSS file next

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
    // You could add a toast notification here
  };

  // Loading state
  if (status === "loading") {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  // Error state
  if (status === "error") {
    return (
      <Container className="py-5 text-center">
        <div className="alert alert-danger">
          Failed to load products. Please try again later.
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="product-container">
      <Row className="mb-4">
        <Col>
          <div className="shop-header text-center">
            <h1 className="display-4">Our Collection</h1>
            <p className="lead text-muted">Discover our premium selection of products</p>
          </div>
        </Col>
      </Row>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <Card className="product-card h-100">
              <div className="product-badge">
                {product.id % 3 === 0 && <Badge bg="danger">Sale</Badge>}
                {product.id % 4 === 0 && <Badge bg="success">New</Badge>}
              </div>
              <div className="wishlist-icon">
                <FiHeart />
              </div>
              <div className="product-img-wrapper">
                <Card.Img variant="top" src={product.image} className="product-img" />
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="product-category text-muted small mb-1">
                  {product.category}
                </div>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <div className="product-rating mb-2">
                  {[...Array(Math.floor(product.rating?.rate || 4))].map((_, i) => (
                    <FiStar key={i} className="filled" />
                  ))}
                  {[...Array(5 - Math.floor(product.rating?.rate || 4))].map((_, i) => (
                    <FiStar key={i} />
                  ))}
                  <span className="ms-1 small">({product.rating?.count || 0})</span>
                </div>
                <Card.Text className="product-price mt-auto">
                  <span className="current-price">${product.price}</span>
                  {product.id % 3 === 0 && (
                    <span className="original-price">${(product.price * 1.2).toFixed(2)}</span>
                  )}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="bg-transparent border-top-0">
                <Button 
                  variant="primary" 
                  className="w-100 add-to-cart-btn"
                  onClick={() => addToCart(product)}
                >
                  <FiShoppingCart className="me-2" /> Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
import React from "react";
import { Button, Card, Container, Row, Col, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import { FiTrash2, FiShoppingBag, FiMinus, FiPlus } from "react-icons/fi";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const total = (parseFloat(subtotal) + shipping).toFixed(2);

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <Container className="cart-container text-center py-5">
        <div className="empty-cart">
          <FiShoppingBag size={60} className="text-muted mb-4" />
          <h2>Your cart is empty</h2>
          <p className="text-muted mb-4">Looks like you haven't added any products to your cart yet.</p>
          <Button variant="primary" href="/" className="continue-shopping-btn">
            Continue Shopping
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="cart-container py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="cart-heading">Your Shopping Cart</h1>
          <p className="text-muted">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <div className="cart-items-container">
            {cartItems.map((product) => (
              <Card key={product.id} className="cart-item mb-3">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={3} md={2}>
                      <div className="cart-item-img-wrapper">
                        <img src={product.image} alt={product.title} className="cart-item-img" />
                      </div>
                    </Col>
                    <Col xs={9} md={4}>
                      <div className="cart-item-details">
                        <h5 className="cart-item-title">{product.title}</h5>
                        <p className="cart-item-category text-muted small">
                          {product.category}
                        </p>
                      </div>
                    </Col>
                    <Col xs={6} md={2} className="mt-3 mt-md-0">
                      <div className="cart-item-quantity">
                        <Button variant="light" size="sm" className="quantity-btn">
                          <FiMinus size={14} />
                        </Button>
                        <span className="mx-2">1</span>
                        <Button variant="light" size="sm" className="quantity-btn">
                          <FiPlus size={14} />
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={2} className="text-end mt-3 mt-md-0">
                      <div className="cart-item-price">${product.price}</div>
                    </Col>
                    <Col xs={12} md={2} className="text-end mt-3 mt-md-0">
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <FiTrash2 className="me-1" /> Remove
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
        
        <Col md={4}>
          <Card className="order-summary">
            <Card.Header className="bg-white">
              <h5 className="mb-0">Order Summary</h5>
            </Card.Header>
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3">
                <strong>Total</strong>
                <div className="text-primary">
                  <strong>${total}</strong>
                  <div className="small text-muted">including VAT</div>
                </div>
              </div>
              <Button variant="primary" className="checkout-btn w-100">
                Proceed to Checkout
              </Button>
            </Card.Body>
            <Card.Footer className="bg-white border-top-0">
              <div className="promo-code-container">
                <span className="promo-label">Have a promo code?</span>
                <div className="d-flex mt-2">
                  <input 
                    type="text" 
                    className="form-control form-control-sm me-2" 
                    placeholder="Enter code"
                  />
                  <Button variant="outline-secondary" size="sm">Apply</Button>
                </div>
              </div>
            </Card.Footer>
          </Card>
          
          <div className="shipping-info mt-3">
            <Badge bg="success" className="mb-2">Free shipping</Badge> on orders over $50
          </div>
          
          <Button variant="outline-primary" className="continue-shopping-btn w-100 mt-3">
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
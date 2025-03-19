import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispach = useDispatch();
  const removeCart = (id) => {
    dispach(remove(id));
  };
  const cart = products.map((product) => (
    <div className="col-md-3" key={product.id}>
      <Card style={{ width: "18rem" }}>
        <div style={{ textAlign: "center" }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        {/* Use product image URL */}
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{product.title}</Card.Title> {/* Display product title */}
          <Card.Text>INR{product.price}</Card.Text>{" "}
          {/* Display product description */}
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>
          <Button onClick={() => removeCart(product.id)} variant="danger">
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Cart</h1>
      <div className="row">{cart}</div>
    </>
  );
}

export default Cart;

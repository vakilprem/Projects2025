import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap"; // Import Card and Button from react-bootstrap
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
// import { add } from "../store/store";
function Product() {
  //   const [products, setProducts] = useState([]);
  const disptch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    disptch(getProducts());
    // async function fetchProduct() {
    //   try {
    //     const response = await axios.get("https://fakestoreapi.com/products");
    //     setProducts(response?.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // fetchProduct();
  }, []);

  const AddToCart = (product) => {
    // dispach the action => add action
    // disptch(add(product));
    disptch(add(product));
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
          <Button onClick={() => AddToCart(product)} variant="primary">
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div
        className="text-center"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {/* "Product Details page" centered at the top */}
        <h1>Product Details Page</h1>
      </div>
      <div className="row">{cart}</div>
    </>
  );
}

export default Product;

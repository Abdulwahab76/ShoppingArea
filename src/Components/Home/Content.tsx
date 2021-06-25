import React from "react";
import { Grid, Card, CardContent } from "@material-ui/core";
import { products } from "./Products/Products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/counterSlice";
import { productType } from "../../Types/types";
import "./Content.css";
// import Shirt from './Image/shoes3.png'
const Content: any = () => {
  const dispatch = useDispatch();

  return (
    <div id="Content">
      <h1>Products</h1>
      <Grid container justify="center" alignItems="center" spacing={3}>
        {products.map((product: productType, ind: number) => {
          return (
            <Grid item md={4} sm={6} xs={12} key={ind}>
              <Card>
                <CardContent>
                  <img
                    className="productImg"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="name">
                    <span>#{product.category}</span>
                    <h3 className="productName">{product.name}</h3>
                  </div>

                  <div className="contentAlign">
                    <span className="productPrice">{product.price} $</span>
                    <button
                      className="addToCart"
                      onClick={(e) => {
                        let element = e.target as HTMLInputElement;

                        element.innerText = "Added";
                        dispatch(addToCart(product));
                      }}
                      id="addto"
                    >
                      add to cart
                    </button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Content;

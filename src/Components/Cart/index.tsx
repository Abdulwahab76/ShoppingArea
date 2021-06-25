import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  decreaseFromCart,
} from "../../features/counterSlice";
import { Grid, Button } from "@material-ui/core";
import { stateType } from "../../Types/types";
import "./index.css";

const Cart = () => {
  const dispatch = useDispatch();
  let total = 0;

  const { cart } = useSelector((state: stateType) => state);
  console.log(cart);
  let input = useRef<HTMLButtonElement>(null);
  const [value, setValue] = useState();
  const [promo, setPromo] = useState(false);
  let getValue = (e: any) => {
    let get = e.target.value;
    setValue(get);
  };
  let promoClick = () => {
    console.log(value);
    if (value === "Freeshopping2021") {
      console.log("w");
      setPromo(true);
    } else {
      console.log("n");
      setPromo(false);
    }
  };

  return (
    <div className="cartPage">
      <h1>Cart Items</h1>

      <Grid
        container
        spacing={3}
        justify="center"
        alignItems="center"
        className="cartSection"
      >
        <Grid item md={8} xs={12}>
          <Grid
            container
            spacing={1}
            justify="center"
            alignItems="center"
            className="cartHead"
          >
            <Grid item xs={3}>
              Product
            </Grid>
            <Grid item xs={3}>
              Quantity
            </Grid>
            <Grid item xs={3}>
              Price
            </Grid>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>
        {cart &&
          cart.map((item) => {
            total += item.price * item.quantity;
            return (
              <Grid item md={8} xs={10} key={item._productId}>
                <Grid
                  container
                  spacing={1}
                  justify="center"
                  alignItems="center"
                  className="cartBody"
                >
                  <Grid item xs={3}>
                    {item.name}
                  </Grid>
                  <Grid item xs={3}>
                    {item.quantity < 2 ? (
                      <Button variant="contained" size="small" disabled>
                        -
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => dispatch(decreaseFromCart(item))}
                      >
                        -
                      </Button>
                    )}

                    {item.quantity}
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </Button>
                  </Grid>
                  <Grid item xs={3}>
                    $ {item.price * item.quantity}
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      X
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
      {cart.length ? (
        <h1 className="value" id="totalValue">
          Total: ${promo ? <s>{total}</s> : total}
        </h1>
      ) : null}
      {promo ? <h3 className="value">10% off</h3> : null}
      {promo ? (
        <h1 className="value">Total: ${total - Math.floor((total * 10) / 100)}</h1>
      ) : null}
      <br />
      <br />
      <div className="promo">
        <label id="promo">Freeshopping2021</label> <br />
        <label>USE PROMO:</label>
        <input
          onChange={getValue}
          id="inputval"
          type="text"
          placeholder="type here promo code"
          className="inputVal"
        />
        <Button
          ref={input}
          onClick={promoClick}
          variant="contained"
          color="primary"
          size="small"
        >
          Click
        </Button>
      </div>
    </div>
  );
};

export default Cart;

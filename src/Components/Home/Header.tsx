import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Shirt from './Image/shirt.png'
import "./Header.css";

const Header = () => {
  return (
    <div className="headerSection">
      <Grid container justify="flex-end" alignItems="center" className="header">
        <Grid className='backChange' item md={6} xs={12}>

          <h1>Welcome to <span>ShoppingArea</span> <br /> </h1>
          <p>Buy Quality Products</p>
          <div className="btn">
            <a className="buyBtn" href="#Content">
              Buy now
            </a>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <img
            className="headerImg"
            src={Shirt}
            alt="header"
           
          />
        </Grid>
      </Grid>
      <div className="fadeBottom"></div>
    </div>
  );
};

export default Header;

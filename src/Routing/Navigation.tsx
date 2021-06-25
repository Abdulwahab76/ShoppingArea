import React from "react";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from "@material-ui/core/Badge/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../Types/types";
import "./Navigation.css";
import {AddProduct} from './../Components/addPorduct'

const Navigation = () => {
  const { cart } = useSelector((state: stateType) => state);
  return (
    <div className="navBar">
      <label>
        <Link to="/" className="logo">
        ShppingAREA
        </Link>
      </label>
      <div className='flex'>
      <AddProduct/>
      <Link to="/cart">
        <Badge badgeContent={cart.length} color="secondary">
          <AddShoppingCartIcon className="shoppingCart" />
        </Badge>
      </Link>
      </div>
     
    </div>
  );
};

export default Navigation;

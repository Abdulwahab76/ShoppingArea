import React, { useEffect, useState } from "react";
import "../Routing/Navigation.css";
import { products } from "./../Components/Home/Products/Products.json";
import { productType, CartItem } from "./../Types/types";
import { CartContext } from "./../Routing/Routing";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const FormControls = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "25ch",
      fontSize: "20px",
    },
  })
);
const RadioButton = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

function AddProduct() {
  const setDisplay = React.useContext<CartItem>(CartContext).setCart;
  const display = React.useContext<CartItem>(CartContext).cart;
  let count: number = 12;
  const formRef = React.useRef<HTMLFormElement>(null);
  const inputInitialValue = {
    _productId: `${count}`,
    name: "",
    image: "",
    price: 0,
    category: "",
    quantity: 1,
  };
  const [inputControl, setInputControl] =
    useState<productType>(inputInitialValue);
  let handleChanger = (evt: any) => {
    const value = evt.target.value;
    setInputControl({ ...inputControl, [evt.target.name]: value });
    if (inputControl.price === 0) {
      inputControl.price = 0;
    }
  };

  let SubmitItem = (e: any) => {
    let validation = formRef?.current?.reportValidity();

    if (validation) {
      products.push(inputControl);
      setDisplay(inputControl);
    }

    count += 1;
    setAnchorEl(null);
    setInputControl(inputInitialValue);
  };

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(products));
  }, [display]);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const classes = RadioButton();

  return (
    <>
      <button
        aria-describedby={id}
        className="addProduct"
        onClick={handleClick}
      >
        Add Product
      </button>
      <div>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <h1 style={{ margin: "0px", textAlign: "center" }}>Add Product</h1>

          <div>
            <form autoComplete="off" ref={formRef}>
              <TextField
                id="standard-full-width standard-required"
                style={{ margin: 8 }}
                placeholder="Product Name"
                value={inputControl.name}
                fullWidth
                margin="normal"
                name="name"
                required
                onChange={handleChanger}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <br />
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Product Img Link"
                fullWidth
                required={true}
                value={inputControl.image}
                onChange={handleChanger}
                name="image"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="filled-number"
                label="Number"
                type="number"
                name="price"
                fullWidth
                required={true}
                value={inputControl.price}
                onChange={handleChanger}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0 } }}
                variant="filled"
              />

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel required={true} htmlFor="age-native-simple">
                  Category
                </InputLabel>
                <Select
                  native
                  fullWidth
                  value={inputControl.category}
                  onChange={handleChanger}
                  inputProps={{
                    name: "category",
                    id: "age-native-simple",
                    required: true,
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={"shoes"}>shoes</option>
                  <option value={"jeans"}>jeans</option>
                  <option value={"shirt"}>shirt</option>
                </Select>
              </FormControl>
            </form>
          </div>
          <button
            aria-describedby={id}
            className="addProduct"
            onClick={SubmitItem}
            style={{
              margin: "7px auto",
              display: "flex",
              padding: "10px 20px",
            }}
          >
            Submit
          </button>
        </Popover>
      </div>
    </>
  );
}

export { AddProduct };

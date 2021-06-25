import React,{createContext, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, Cart} from '../Components';
import Navigation from './Navigation';
import { productType } from "./../Types/types";

export const CartContext :any = React.createContext(null);

const Routing = () => {
    const [cart, setCart] = React.useState([{ }]);
    console.log('route==',cart)
    useEffect(()=>{

    },[cart])

    return (
        <CartContext.Provider value={{ cart, setCart }}>

        <BrowserRouter>
        <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </CartContext.Provider>

    )
}

export default Routing

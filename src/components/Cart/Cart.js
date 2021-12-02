import React, {useContext, useEffect, useState} from 'react'
import { cartContext } from '../../context/cartContext';
import './Cart.css';
import CartVacio from './CartVacio';
import CartWithContent from './CartWithContent';


const Cart = () => {
    const {itemCounter} = useContext(cartContext)
    const [cartQty, setcartQty] = useState(0)

    const cambio = () =>{
        if(cartQty  != 0){
            return <CartWithContent/>
        }
        else{
            return <CartVacio/>
        }
    }

    useEffect(() => {
        setcartQty(itemCounter);        
    })

    return (
        <>
            {cambio()}
        </>
    )
}

export default Cart;
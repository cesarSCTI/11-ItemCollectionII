import React, {createContext, useState} from "react";

export const cartContext = createContext([]);


const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])
    //const [order, setorder] = useState({})

    const addCart = (item) =>{
        if(isInCart(item)){
            cartList.find((ele) => {
                ele.cantidad = ele.cantidad + item.cantidad
            })
            //console.log("el articulo existe")
        }
        else{
            setcartList([...cartList, item])
        }
    }
    const clear = () =>{
        setcartList([])
    }
    const itemCounter = () =>{
        return cartList.reduce((accum, item) => accum = accum + item.cantidad, 0)
    }
    const itemPriceCounter = ()=>{
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }
    const isInCart = (item) =>{
        return cartList.some((cartItem) => cartItem.id === item.id)
    }
    const removeItem = (id) =>{
        setcartList(cartList.filter(prod => prod.id !== id))
    }

    return (
        <cartContext.Provider value={{
            cartList,
            addCart,
            clear,
            itemCounter,
            removeItem, 
            itemPriceCounter
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;
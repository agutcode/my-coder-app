import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) => {

    let list = localStorage.getItem('cartList')
    list = list ? JSON.parse(list) : [];

    const [cartList, setCartList] = useState(list);

    const isInCart = (id) => { 
        if(cartList.length > 0){
            let index = cartList.findIndex(item => item.id === id)
            console.log(index)
            return index
        } else {
            return -1;
        }
    }

    const addItem = (item, quantity) => { 
        let index = isInCart(item.id)
        if(index > -1){
            cartList[index].qty += quantity;
        } else {
            item.qty = quantity
            cartList.push(item)
        }
        
        localStorage.setItem('cartList',JSON.stringify(cartList))
    }

    const removeItem = (id) => { 
        let list = cartList.filter(p => p.id !== id)
        setCartList(list)
        localStorage.setItem('cartList',JSON.stringify(list))
    }

    const clear = () => { 
        setCartList([])
        localStorage.removeItem('cartList')
    }
    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
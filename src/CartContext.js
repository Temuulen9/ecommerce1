import  React from 'react'
import {createContext, useState} from 'react'

const CartContext = createContext();

export function CartProvider({children}){
    const [items, setItems] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [allPrice, setAllPrice] = useState(0);

    const addToCart = (title, price, image, id, quantity) => {
        var existed = false;
            const newState = items.map(obj => {
                if(obj.id === id){
                    existed = true;
                    return {...obj, quantity: obj.quantity+1};
                }
                return obj;
            })
        if(existed){
            setItems(newState)
        }else{
            setItems((prevState) => [...prevState,  {title, price, image, id, quantity}]);
        }
        setAllPrice(prevPrice => prevPrice + parseFloat(price));
        setItemCount(prevCount => prevCount+1);
    };

    const decreaceQuantity = (id) => {
            console.log(id)
            const newState = items.map(obj => {
                if(obj.id === id && obj.quantity > 1){
                    setItemCount(prevCount => prevCount-1);
                    setAllPrice(prevPrice => prevPrice + parseFloat(obj.price));
                    return {...obj, quantity: obj.quantity-1};
                }
                return obj;
            })
        setItems(newState)
        
    };
    const increaceQuantity = (id) => {
        console.log(id)
        const newState = items.map(obj => {
            if(obj.id === id ){
                setAllPrice(prevPrice => prevPrice + parseFloat(obj.price));
                setItemCount(prevCount => prevCount+1);
                return {...obj, quantity: obj.quantity+1};
            }
            return obj;
        })
    setItems(newState)
    
};

    const delete_one = (id) =>{
        console.log("id = " + id)
        var array = items;
        items.forEach((value, index) => {
            console.log("index = " + index , "value = " + value.id)
            if(value.id === id){
                
                console.log(array)
                array.splice(index,1);
                
            }
        })
        setItems(array);
        console.log(id)
        
        
    }
    const empty = () => {
        setAllPrice(0);
        setItemCount(0);
        setItems([]);
    }
   
    return(
        <CartContext.Provider value={{items, addToCart, empty, itemCount, decreaceQuantity, increaceQuantity, allPrice, delete_one}}>
        {children}
    </CartContext.Provider>
);
}

export default CartContext;
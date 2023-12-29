import { CartProductType } from '@/app/product/[productId]/productDetails';
import { get } from 'http';
import {createContext,useCallback,useContext,useState} from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

type CartContextType={
    cartTotalQty:number,
    cartProducts:CartProductType[]|null;
    handleAddProductToCart:(product:CartProductType)=>void
    handleRemoveProductFromCart:(product:CartProductType)=>void
    handleQtyIncrease:(product:CartProductType)=>void
    handleQtyDecrease:(product:CartProductType)=>void
    handleClearCart:()=>void,
    cartTotalAmount:number
};

export const CartContext= createContext<CartContextType|null>(null);

interface props{
    [propName:string]:any
}

export const CartContextProvider=(props:props)=>{
    const[cartTotalQty,setCartTotalQty]=useState(0);
    const[cartProducts,setCartProducts]=useState<CartProductType[]|null>(null);
    const[cartTotalAmount,setCartTotalAmount]=useState(0)

    useEffect(()=>{
        const cartItems:any=localStorage.getItem('eshopCartItems')
        const cProducts:CartProductType[]|null=JSON.parse(cartItems);

        setCartProducts(cProducts)
    },[])

   useEffect(()=>{
    const getTotal=()=>{
        if(cartProducts){
            const {total,qty}=cartProducts?.reduce((acc,item)=>{
                const itemTotal=item.price*item.quantity
    
                acc.total+=itemTotal
                acc.qty+=item.quantity
    
                return acc;
            },{
                total:0,
                qty:0
            })

            setCartTotalQty(qty)
            setCartTotalAmount(total)
        }
    }
    getTotal();

   },[cartProducts])

    const handleAddProductToCart=useCallback((product:CartProductType)=>{
        setCartProducts((prev)=>{
            let updatedCart;
            if(prev){
                updatedCart=[...prev,product];
            }else{
                updatedCart=[product];
            }
            toast.success("product added to cart")
            localStorage.setItem('eshopCartItems',JSON.stringify(updatedCart))
            return updatedCart;
        })
    },[])

    const handleRemoveProductFromCart=useCallback((product:CartProductType)=>{
        if(cartProducts){
            const filter=cartProducts.filter((item)=>{
                return item.id!== product.id
            })
            setCartProducts(filter);
            toast.success("Product Removed");
            localStorage.setItem("eshopCartItems",JSON.stringify(filter))
        }
    },[cartProducts])

    const handleQtyIncrease=useCallback((product:CartProductType)=>{
        let updatedCart;

        if(product.quantity===99){
            return toast.error("OOOP!maximum value reached")
        }

        if(cartProducts){
            updatedCart=[...cartProducts]

            const index=cartProducts.findIndex((item)=>item.id===product.id)

            if(index>-1){
                updatedCart[index].quantity=updatedCart[index].quantity+1;
            }
            setCartProducts(updatedCart);
            localStorage.setItem("eshopCartItems",JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleQtyDecrease=useCallback((product:CartProductType)=>{
        let updatedCart;

        if(product.quantity<1){
            return toast.error("OOOP!Not Possible")
        }else{

            if(cartProducts){
                updatedCart=[...cartProducts]

                const index=cartProducts.findIndex((item)=>item.id===product.id)

                if(index>-1){
                    updatedCart[index].quantity=updatedCart[index].quantity-1;
                }
                setCartProducts(updatedCart);
                localStorage.setItem("eshopCartItems",JSON.stringify(updatedCart))
            }
        }
    },[cartProducts])

    const handleClearCart=useCallback(()=>{
        let updatedCart;
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("eshopCartItems",JSON.stringify(null))
    },[cartProducts])

    const value={cartTotalQty,cartTotalAmount,cartProducts,handleAddProductToCart,handleRemoveProductFromCart,handleQtyIncrease,handleQtyDecrease,handleClearCart};

    return <CartContext.Provider value={value} {...props}/>
}

export  const useCart=()=>{
    const context=useContext(CartContext)

    if(context===null){
        throw new Error("use cart must be used within cartcontext provider")
    }
    return context
}
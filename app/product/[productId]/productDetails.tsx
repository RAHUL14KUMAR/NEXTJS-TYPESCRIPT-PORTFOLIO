"use client"
import React,{useCallback, useEffect, useState} from 'react'
import {Rating} from '@mui/material'
import Image from 'next/image'
import SetQuantity from '@/app/components/products/setQuantity'
import Button from '@/app/components/Button'
import ProductImage from '@/app/components/products/productImage'
import { useCart } from '@/hooks/useCart'
import {MdCheckCircle} from 'react-icons/md'
import { useRouter } from 'next/navigation'

interface productDetailsProps{
    product:any
}

export type CartProductType={
    id:string,
    name:string,
    description:string,
    category:string,
    brand:String,
    selectedImg:SelectedImageType,
    quantity:number,
    price:number
}

export type SelectedImageType={
    color:String,
    colorCode:string,
    image:string
}


function productDetails({product}:productDetailsProps) {

    const {cartTotalQty,handleAddProductToCart,cartProducts}=useCart
    ();

    const[isProductInTheCart,setIsProductInTheCart]=useState(false)

    console.log("call from hook side ",cartProducts)

    const [cartProduct,setCartProduct]=useState<CartProductType>({
        id:product.id,
        name:product.name,
        description:product.description,
        category:product.category,
        brand:product.brand,
        selectedImg:{...product.images[0]},
        quantity:1,
        price:4
    })

    const productRating=product.reviews.reduce((acc:number,item:any)=>item.rating+acc,0)/product.reviews.length;

    const Horizontal=()=>{
        return (
            <hr className='w-[30%] my-2'/>
        )
    }

    const handleQtyIncrease=()=>{
        setCartProduct((prev)=>{
            return {...prev,quantity:prev.quantity+1};
        })
    }

    const handleQtyDecrease=()=>{

        if(cartProduct.quantity!=0){
            setCartProduct((prev)=>{
                return {...prev,quantity:prev.quantity-1};
            })
        }else{
            alert("cant make order less than zero")
        }
    }

    const handleColorSelect=useCallback((value:SelectedImageType)=>{
        setCartProduct((prev)=>{
            return {...prev,selectedImg:value}
        })
    },[cartProduct.selectedImg])

    useEffect(()=>{
        setIsProductInTheCart(false);

        if(cartProducts){
            const existingIndex=cartProducts.findIndex((item)=>item.id===product.id)

            if(existingIndex>-1){
                setIsProductInTheCart(true)
            }
        }

    },[cartProducts])

    const router=useRouter()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
      <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
      <div className='flex flex-col gap-1 text-slate-500 text-sm'>
        <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
        <div className='flex items-center gap-2'>
            <Rating value={productRating} readOnly/>
            <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal/>
        <div className='text-justify'>
            {product.description}
        </div>
        <Horizontal/>
        <div>
            <span className='font-semibold'>CATEGORY:</span>
            {product.category}
        </div>
        <div>
            <span className='font-semibold'>BRAND:</span>
            {product.brand}
        </div>
        <div className={product.inStock?'text-teal-400':'text-rose-400'}>
            {product.inStock? "In Stock":"Out Of Stock"}
        </div>
        <Horizontal/>
        {
            isProductInTheCart?
            <>
            <p className='mb-2 text-slate-500 flex items-center gap-1'>
                <MdCheckCircle size={20} className='text-teal-400' />
                <span>Product Added To The Cart</span>
            </p>
            <div className='max-w-[300px]'>
                <Button label="view cart" outline onClick={()=>router.push('/cart')}/>
            </div>
            </>:
            <>
            <SetQuantity cartProduct={cartProduct} 
                handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
            <Horizontal/>
            <div className='max-w-[300px]'>
                <Button  label="Add To Cart" onClick={()=>handleAddProductToCart(cartProduct)}/>
            </div>
            </>
        }
      </div>
    </div>
  )
}

export default productDetails

"use client"
import { useCart } from '@/hooks/useCart'
import Link from 'next/link';
import React from 'react'
import { MdArrowBack } from 'react-icons/md';
import Header from '../components/Header';
import Button from '../components/Button';
import ItemContent from './ItemContent';


function CartClient() {
    const{cartProducts,handleClearCart,cartTotalAmount}=useCart();

    if(!cartProducts||cartProducts.length===0){
        return(
            <div className='flex flex-col items-center'>
                <div className='text-2xl'>Your Cart Is Empty</div>
                <div>
                    <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-5'>
                        <MdArrowBack/>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
  return (
    <div>
      <Header title="Shopping Cart" center/>

      <div className='grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 font-semibold'>
        <div className='col-span-2 justify-self-start'>PRODUCT</div>
        <div className='justify-self-center'>PRICE</div>
        <div className='justify-self-center'>QUANTITY</div>
        <div className='justify-self-end'>TOTAL</div>
      </div>

      <div>
        {cartProducts&&cartProducts.map((item)=>{
            return <ItemContent key={item.id} item={item} />
        })}
      </div>

      <div className='border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4'>
        <div className='w-[90px]'>
            <Button label="Clear Cart" onClick={handleClearCart} small outline/>
        </div>
        <div className='text-sm flex flex-col gap-1 items-start'>
            <div className='flex justiy-between w-full text-base font-semibold'>
                <span>SubTotal</span>
                <span>${cartTotalAmount}</span>
            </div>
            <p className='text-slate-500'> Taxes and shipping calculated at checkout</p>
            <Button label='Checkout' onClick={()=>{}}/>
            <Link href={"/"} className='text-slate-500 flex items-center gap-1 mt-5'>
                <MdArrowBack/>
                <span>Continue Shopping</span>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default CartClient
"use client"
import { useCart } from '@/hooks/useCart';
import { useRouter } from 'next/navigation'
import React from 'react'
import {CiShoppingCart} from 'react-icons/ci'

function CartCount() {
    const router=useRouter();
    const {cartTotalQty}=useCart();

  return (
    <div className='relative cursor-pointer' onClick={()=>router.push('/cart')}>
        <div>
            <CiShoppingCart className='font-bold'/>
            <span className='absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-4 w-4 rounded-full flex items-center justify-center text-sm'>{cartTotalQty}</span>
        </div>
    </div>
  )
}

export default CartCount

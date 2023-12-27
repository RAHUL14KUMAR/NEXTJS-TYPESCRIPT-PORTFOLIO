"use client"
import Image from 'next/image'
import React from 'react'
import { truncateText } from '@/utils/turncateText'
import { formatPrice } from '@/utils/formatPrice'
import {Rating }from '@mui/material'
import { useRouter } from 'next/navigation'
interface product{
    data:any
}
// interface productProps{
//     id?:string,
//     name?:string,
//     description?:string
//     price?:number
//     brand?:string
//     category?:"watch"|"phone"|"accessories",
//     instock?:boolean
//     images?:[ImageProp],
//     reviews?:[reviewProp]
// }
// interface ImageProp{
//     color?:string,
//     colorCode?:string,
//     image:string
// }
// interface reviewProp{
//     id?:string,
//     userId?:string,
//     productId?:string,
//     rating?:number,
//     comment?:string,
//     createdDate?:any,
//     user?:userProp
// }
// interface userProp{
//     id?:string,
//     name?:string,
//     email?:string,
//     emailverified?:boolean,
//     image?:string,
//     hashedPassword?:string|"null"
//     createdAt?:string,
//     updatedAt?:string,
//     role?:"USER"|"ADMIN"
// }

function productCard({data}:product) {
    const router=useRouter();
    
    const productRating=data.reviews.reduce((acc:number,item:any)=>item.rating+acc,0)/data.reviews.length

  return (
    <div onClick={()=>router.push(`/product/${data.id}`)} className='col-span-1 cursor-pointer border-[1.2px] border-slate-400 bg-slate-100 rounded-sm p-2 transition hover:scale-105 text-center text-sm'>
        <div className='flex flex-col items-center w-full gap-1'>
            <div className='aspect-square overflow-hidden relative w-full'>
                <Image fill src={data.images[0].image} className='w-full h-full object-contain' alt={data.name} />
            </div>
            <div className='mt-4'>{truncateText(data.name)}</div>
            <div></div>
            <div>
                {data.reviews.length} reviews
            </div>
            <div>{formatPrice(data.price)}</div>
            <div>
                <Rating value={productRating} readOnly/>
            </div>
        </div>
    </div>
  )
}

export default productCard

"use client"
import React from 'react'
import Heading from '@/app/components/Header'
import { Rating } from '@mui/material'

interface ListRatingProps{
    product:any
}

function ListRating({product}:ListRatingProps) {
  return (
    <div>
      <Heading title="Product Review"/>
      <div className='text-sm mt-2'>
        {
            product.reviews.map((review:any)=>{
                return(
                    <div className='max-w-300px'>
                        <div className='flex gap-2 items-center'>
                            <div>Avatar</div>
                            <div className='font-semi-bold'>{review?.user.name}</div>
                        </div>

                        <div className='mt-2'>
                            <Rating value={review.rating} readOnly/>
                            <div className='ml-2'>{review.comment}</div>

                            <hr className='mt-4 mb-4'/>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default ListRating

"use client"
import Container from '@/app/components/Container';
import ProductDetails from './productDetails';
import React from 'react'
import ListRating from './ListRating';
import { products } from '@/utils/product';

interface IPrarams{
  productId?:string,
}

function product({params}:{params:IPrarams}) {

  const prod=products.find((item)=>item.id===params.productId)
    
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={prod}/>
      </Container>
      {/* <div className='flex flex-col mt-20 gap-4'>
        <div>Add Rating</div>
        <ListRating product={product}/>
      </div> */}
    </div>
  )
}

export default product

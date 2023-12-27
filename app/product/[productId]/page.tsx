import Container from '@/app/components/Container';
import { prod } from '@/utils/prod';
import ProductDetails from './productDetails';
import React from 'react'

interface IPrarams{
  productId?:string,
}

function product({params}:{params:IPrarams}) {
    
  return (
    <div className='p-8'>
      <Container>
        <ProductDetails product={prod}/>
      </Container>
    </div>
  )
}

export default product

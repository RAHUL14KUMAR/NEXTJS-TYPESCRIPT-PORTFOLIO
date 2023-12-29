import React from 'react'
interface HeadingProps{
    title:string,
    center?:boolean
}

function Header({title,center}:HeadingProps) {
  return (
    <div className='text-center'>
      <h1 className='font-bold text-2xl'>{title}</h1>
    </div>
  )
}

export default Header

import { MenuItemOwnProps } from '@mui/material';
import React from 'react'

interface MenuItemProps{
    children:React.ReactNode;
    onClick:()=>void
}

function MenuItem({children,onClick}:MenuItemProps) {
  return (
    <div onClick={onClick} className='px-4 py-3 hover:bg-neutral-100 transition'>
      {children}
    </div>
  )
}

export default MenuItem

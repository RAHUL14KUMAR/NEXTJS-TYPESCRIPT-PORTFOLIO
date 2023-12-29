import React from 'react'

interface BackdropProp{
    onClick:()=>void
}
function Backdrop({onClick}:BackdropProp) {
  return (
    <div onClick={onClick} className='z-20 bg-slate-200 opacity-50 w-screen h-screen fixed top-0 left-0'>
      
    </div>
  )
}

export default Backdrop

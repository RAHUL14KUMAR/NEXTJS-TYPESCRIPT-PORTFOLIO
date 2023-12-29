"use client"
import { Avatar, MenuItem } from '@mui/material'
import Link from 'next/link'
import React,{useState} from 'react'
import { useCallback } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import {signOut} from 'next-auth/react'
import Backdrop from './Backdrop'
import { User } from '@prisma/client'
import { SafeUser } from '@/types'

interface prop{
    currentUser:SafeUser | null
}

function UserMenu({currentUser}:prop) {
    const [isOpen,setIsOpen]=useState(false)

    const toogleOpen=useCallback(()=>{
        setIsOpen((prev)=>!prev)
    },[])

  return (
    <div>
        <div className='relative z-30'>
            <div onClick={toogleOpen} className='p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'>
                <Avatar/>
                <AiFillCaretDown/>
            </div>
            {isOpen&&(
                <div className='absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer'>
                    {currentUser? <div>
                        <Link href='/orders'>
                            <MenuItem onClick={toogleOpen}>Your Orders</MenuItem>
                        </Link>
                        <Link href='/admin'>
                            <MenuItem onClick={toogleOpen}>Admin DashBoard</MenuItem>
                        </Link>
                        <br/>

                        <MenuItem onClick={()=>{
                            toogleOpen();
                            signOut()
                        }}>Logout</MenuItem>
                        </div>:
                        <div>
                        <Link href='/login'>
                            <MenuItem onClick={toogleOpen}>Login</MenuItem>
                        </Link>
                        <Link href='/register'>
                            <MenuItem onClick={toogleOpen}>Register</MenuItem>
                        </Link>
                    </div>
                    }
                </div>
            )}
        </div> 
        {
            isOpen?<Backdrop onClick={toogleOpen}/>:null
        }
    </div>
  )
}

export default UserMenu

"use client"
import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Input from '../components/inputs/Input'
import { useForm,FieldValues,SubmitHandler } from 'react-hook-form';
import Button from '../components/Button'
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import axios from 'axios'
import toast from 'react-hot-toast'
import {signIn} from 'next-auth/react'
import { SafeUser } from '@/types'

interface prop{
    currentUser:SafeUser|null
}

function register({currentUser}:prop) {
    const router=useRouter();
    const [isLoading,setIsLoading]=useState(false);
    const{register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })

    useEffect(()=>{
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    },[])

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        console.log("registervalue",data);

        axios.post('/api/register',data).then(()=>{
            toast.success("Account Created")
            signIn('credentials',{
                email:data.email,
                password:data.password,
                redirect:false
            }).then((callback)=>{
                if(callback?.ok){
                    router.push('/cart');
                    router.refresh();
                    toast.success("Logged In")
                }

                if(callback?.error){
                    toast.error(callback.error)
                }
            })
        }).catch(()=>toast.error('something went wrong'))
        .finally(()=>{
            setIsLoading(false)
        })
    }
    if(currentUser){
        return <p className='text-center'>Logged In. Redirecting...</p>
    }
  return (
    <>
    <Header title='signup from e-shop'/>
    <Button outline label='Signup With Google' icon={AiOutlineGoogle} onClick={()=>{signIn("google")}} />
     <hr className='bg-slate-500 w-full h-px'/>
    <Input id="name" label='Name' disabled={isLoading} register={register} errors={errors} required/>
    <Input id="email" label='EMail' disabled={isLoading} register={register} errors={errors} required/>
    <Input id="password" label='Password' disabled={isLoading} register={register} errors={errors} required type="password"/>

    <Button label={isLoading?"Loading":"SignUp"} onClick={handleSubmit(onSubmit)}/>

    <p className='text-sm'>Already Have An Account? <Link className='underline' href='/login'>Login</Link></p>
    </>
  )
}

export default register

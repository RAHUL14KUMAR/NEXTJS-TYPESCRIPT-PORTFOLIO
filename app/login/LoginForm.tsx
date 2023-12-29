"use client"
import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import Input from '../components/inputs/Input'
import { useForm,FieldValues,SubmitHandler } from 'react-hook-form';
import Button from '../components/Button'
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';
import {signIn} from 'next-auth/react'
import toast from 'react-hot-toast'
import { SafeUser } from '@/types'

interface prop{
    currentUser:SafeUser|null
}
function LoginForm({currentUser}:prop) {

    const router=useRouter();
    const [isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        if(currentUser){
            router.push('/cart')
            router.refresh();
        }
    },[])
    const{register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit:SubmitHandler<FieldValues>=(data)=>{
        setIsLoading(true);
        console.log("lodin",data)

        signIn('credentials',{
            ...data,
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
    <Button outline label='Continue With Google' icon={AiOutlineGoogle} onClick={()=>{}} />
     <hr className='bg-slate-500 w-full h-px'/>
    <Input id="email" label='EMail' disabled={isLoading} register={register} errors={errors} required/>
    <Input id="password" label='Password' disabled={isLoading} register={register} errors={errors} required type="password"/>

    <Button label={isLoading?"Loading":"Login"} onClick={handleSubmit(onSubmit)}/>

    <p className='text-sm'>Don't Have An Account? <Link className='underline' href='/register'>Register</Link></p>
    </>
  )
}

export default LoginForm

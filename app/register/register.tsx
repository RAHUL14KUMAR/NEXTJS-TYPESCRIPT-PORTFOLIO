"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Input from '../components/inputs/Input'
import { useForm,FieldValues,SubmitHandler } from 'react-hook-form';
import Button from '../components/Button'
import Link from 'next/link';
import { AiOutlineGoogle } from 'react-icons/ai';

function register() {
    const [isLoading,setIsLoading]=useState(false);
    const{register,handleSubmit,formState:{errors}}=useForm<FieldValues>({
        defaultValues:{
            name:"",
            email:"",
            password:""
        }
    })

    const onSubmit:SubmitHandler<FieldValues>=()=>{
        setIsLoading(true);
    }
  return (
    <>
    <Header title='signup from e-shop'/>
    <Button outline label='Signup With Google' icon={AiOutlineGoogle} onClick={()=>{}} />
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

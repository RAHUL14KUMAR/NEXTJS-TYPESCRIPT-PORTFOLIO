import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/FormWrap'
import Login from './LoginForm'
import { getCurrentUser } from '@/actions/getCurrentUser'

async function page() {
    const currentUser=await getCurrentUser()
  return (
    <Container>
      <FormWrap>
        <Login currentUser={currentUser}/>
      </FormWrap>
    </Container>
  )
}

export default page

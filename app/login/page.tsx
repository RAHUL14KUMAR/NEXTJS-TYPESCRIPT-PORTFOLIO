import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/FormWrap'
import Login from './LoginForm'

function page() {
  return (
    <Container>
      <FormWrap>
        <Login/>
      </FormWrap>
    </Container>
  )
}

export default page

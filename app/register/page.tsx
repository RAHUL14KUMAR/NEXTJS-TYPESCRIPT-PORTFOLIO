import React from 'react'
import Container from '../components/Container'
import FormWrap from '../components/FormWrap'
import RegisterForm from './register'

function page() {
  return (
    <Container>
      <FormWrap>
        <RegisterForm/>
      </FormWrap>
    </Container>
  )
}

export default page

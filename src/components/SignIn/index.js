import React from 'react'
import { Container, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Form, Text } from './SigninElements'

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Nutrilia</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign In into your acount</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>   
        </>
    )
}

export default SignIn

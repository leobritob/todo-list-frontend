import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom'

import { Button, Column, Input, Title, Text } from 'components'
import { useAuth } from 'hooks'

type LoginProps = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Put a valid email').required('Please, enter your email').nullable(),
  password: yup.string().required('Please, enter your password').nullable(),
})

export const LoginPage: React.FC = () => {
  const { errors, register, handleSubmit } = useForm<LoginProps>({ resolver: yupResolver(schema) })
  const { login } = useAuth()

  const onSubmit = useCallback(
    async (value: LoginProps) => {
      const { email, password } = value

      await login(email, password)
    },
    [login]
  )

  return (
    <Column as="form" width="100%" alignItems="flex-start" onSubmit={handleSubmit(onSubmit)}>
      <Title>Sign In</Title>

      <Input type="email" id="email" name="email" placeholder="Email" ref={register} />
      {errors?.email?.message && <Text color="danger">{errors?.email?.message}</Text>}

      <Input type="password" id="password" name="password" placeholder="Password" mt="10px" ref={register} />
      {errors?.password?.message && <Text color="danger">{errors?.password?.message}</Text>}

      <Button type="submit" width="100%" my="10px">
        Sign In
      </Button>

      <Column width="100%" mt="10px">
        <Text>Don't have an account?</Text>
        <Link to="/register">
          <Text>Create now</Text>
        </Link>
      </Column>
    </Column>
  )
}

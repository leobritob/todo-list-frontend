import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link, useHistory } from 'react-router-dom'

import { Button, Column, Input, Title, Text } from 'components'
import { useAuth } from 'hooks'

type RegisterProps = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const schema = yup.object().shape({
  firstName: yup.string().required('Please, enter your first name').nullable(),
  lastName: yup.string().required('Please, enter your last name').nullable(),
  email: yup.string().email('Put a valid email').required('Please, enter your email').nullable(),
  password: yup.string().required('Please, enter your password').nullable(),
})

export const RegisterPage: React.FC = () => {
  const { errors, register, handleSubmit } = useForm<RegisterProps>({ resolver: yupResolver(schema) })
  const { registerNewUser } = useAuth()
  const history = useHistory()

  const onSubmit = useCallback(
    async (value: RegisterProps) => {
      await registerNewUser(value)
      history.push('/login')
    },
    [history, registerNewUser]
  )

  return (
    <Column as="form" width="100%" alignItems="flex-start" onSubmit={handleSubmit(onSubmit)}>
      <Title>Register</Title>

      <Input type="firstName" id="firstName" name="firstName" placeholder="First name" mb="10px" ref={register} />
      {errors?.firstName?.message && <Text color="danger">{errors?.firstName?.message}</Text>}

      <Input type="lastName" id="lastName" name="lastName" placeholder="Last name" mb="10px" ref={register} />
      {errors?.lastName?.message && <Text color="danger">{errors?.lastName?.message}</Text>}

      <Input type="email" id="email" name="email" placeholder="Email" mb="10px" ref={register} />
      {errors?.email?.message && <Text color="danger">{errors?.email?.message}</Text>}

      <Input type="password" id="password" name="password" placeholder="Password" ref={register} />
      {errors?.password?.message && <Text color="danger">{errors?.password?.message}</Text>}

      <Button type="submit" width="100%" my="10px">
        Create
      </Button>

      <Column width="100%" mt="10px">
        <Link to="/login">
          <Text>Back to Login</Text>
        </Link>
      </Column>
    </Column>
  )
}

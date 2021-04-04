import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button, Column, Input, Title, Text } from 'components'
import { useAuth } from 'hooks'

type LoginProps = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Informe um e-mail válido').required('Por favor, preencha seu e-mail').nullable(),
  password: yup.string().required('Por favor, preencha sua senha').nullable(),
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
      <Title>Painel de Autenticação</Title>

      <Input type="email" id="email" name="email" placeholder="E-mail" ref={register} />
      {errors?.email?.message && <Text color="danger">{errors?.email?.message}</Text>}

      <Input type="password" id="password" name="password" placeholder="Senha" mt="10px" ref={register} />
      {errors?.password?.message && <Text color="danger">{errors?.password?.message}</Text>}

      <Button type="submit" width="100%" my="10px">
        Conectar
      </Button>
    </Column>
  )
}
import { CoffeeSelected } from './components/CoffeeSelected'
import { FormContainer } from './styled'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { CompleteOrder } from './components/CompleteOrder'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import * as zod from 'zod'

enum PaymentMethods {
  'Cartão de Credito' = 'Cartão de Credito',
  'Cartão de Débito' = 'Cartão de Débito',
  'Dinheiro' = 'Dinheiro',
}

const newAddressFormValidateSchema = zod.object({
  cep: zod.string().min(8, 'Informe um Cep'),
  street: zod.string().min(1, 'Informe a sua Rua'),
  number: zod.string().min(1, 'Informe o seu Número'),
  district: zod.string().min(1, 'Informe o seu Bairro'),
  city: zod.string().min(1, 'Informe a sua Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  payment: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type NewAddressFormDate = zod.infer<typeof newAddressFormValidateSchema>

export function Checkout() {
  const { cleanCart } = useContext(CartContext)
  const newAddress = useForm<NewAddressFormDate>({
    resolver: zodResolver(newAddressFormValidateSchema),
    defaultValues: {
      cep: '39950000',
      city: 'Conselheiro Pena',
      uf: 'MG',
    },
  })

  const { handleSubmit } = newAddress

  const navigate = useNavigate()
  function handleCreateAddress(data: NewAddressFormDate) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...newAddress}>
      <FormContainer onSubmit={handleSubmit(handleCreateAddress)}>
        <CompleteOrder />
        <CoffeeSelected />
      </FormContainer>
    </FormProvider>
  )
}

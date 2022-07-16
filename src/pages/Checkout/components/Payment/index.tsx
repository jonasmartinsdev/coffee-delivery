import { Bank, CreditCard, Money } from 'phosphor-react'
import { CardInput, PaymentContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { FormGroup } from '../../../../components/FormGroup'
import { ErrosType } from '../FormInputAddress'

export function Payment() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrosType

  return (
    <FormGroup error={errors.payment?.message}>
      <PaymentContainer>
        <label htmlFor="payment-1">
          <input
            type="radio"
            id="payment-1"
            {...register('payment', { required: true })}
            value="Cartão de Credito"
          />
          <CardInput>
            <CreditCard color="#8047F8" />
            <span>Cartão de crédito</span>
          </CardInput>
        </label>
        <label htmlFor="payment-2">
          <input
            type="radio"
            id="payment-2"
            {...register('payment', { required: true })}
            value="Cartão de Débito"
          />
          <CardInput>
            <Bank color="#8047F8" />
            <span>cartão de débito</span>
          </CardInput>
        </label>
        <label htmlFor="payment-3">
          <input
            type="radio"
            id="payment-3"
            {...register('payment', { required: true })}
            value={'Dinheiro'}
          />
          <CardInput>
            <Money color="#8047F8" />
            <span>dinheiro</span>
          </CardInput>
        </label>
      </PaymentContainer>
    </FormGroup>
  )
}

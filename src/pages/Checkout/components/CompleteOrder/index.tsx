import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Title } from '../../../../components/Title'
import { FormInputAddress } from '../FormInputAddress'
import { Payment } from '../Payment'
import { CardForm, SectionContainer } from './styles'

export function CompleteOrder() {
  return (
    <div>
      <Title>Complete seu pedido</Title>
      <CardForm>
        <SectionContainer>
          <span>
            <MapPinLine color="#C47F17" size={22} />
          </span>
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </SectionContainer>

        <FormInputAddress />
      </CardForm>

      <CardForm>
        <SectionContainer>
          <CurrencyDollar color="#8047F8" size={22} />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </SectionContainer>
        <Payment />
      </CardForm>
    </div>
  )
}

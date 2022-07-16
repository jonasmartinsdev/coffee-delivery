import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import backgroundSuccess from '../../assets/background-success.png'
import { NewAddressFormDate } from '../Checkout'
import { CardOrder, OrderDetailsContainer, SuccessContainer } from './styles'

export function Success() {
  const location = useLocation()

  const state = location.state as NewAddressFormDate

  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <section>
        <OrderDetailsContainer>
          <CardOrder variant="purple">
            <div>
              <MapPin weight="fill" />
            </div>
            <div>
              <span>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
              </span>
              <span>
                {state.district} - {state.city}, {state.state}
              </span>
            </div>
          </CardOrder>
          <CardOrder variant="yellow">
            <div>
              <Timer weight="fill" />
            </div>
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </div>
          </CardOrder>
          <CardOrder variant="yellow-dark">
            <div>
              <CurrencyDollar />
            </div>
            <div>
              <span>Pagamento na entrega </span>
              <strong>{state.payment}</strong>
            </div>
          </CardOrder>
        </OrderDetailsContainer>
        <img src={backgroundSuccess} alt="" />
      </section>
    </SuccessContainer>
  )
}

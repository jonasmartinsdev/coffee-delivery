import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { ConfirmContainer } from './styled'

export function Confirm() {
  const { cartItemsTotal } = useContext(CartContext)

  const total = cartItemsTotal + 3.5

  const formattedCardTotal = formatMoney(total)
  const formattedItemsTotal = formatMoney(cartItemsTotal)

  return (
    <ConfirmContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {formattedItemsTotal}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>R$ {formattedCardTotal} </strong>
      </div>

      <button type="submit">Confirmar Pedido</button>
    </ConfirmContainer>
  )
}

import { ButtonDelete, CardContainer } from './styled'

import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'
import { Coffee } from '../../../Home/components/CoffeeCard'
import { formatMoney } from '../../../../utils/formatMoney'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeItem extends Coffee {
  quantity: number
}

interface CardProps {
  coffee: CoffeeItem
}

export function CoffeeCard({ coffee }: CardProps) {
  const { changeCartItemQuantity, removeItemCart } = useContext(CartContext)

  const totalItemsPrice = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(totalItemsPrice)

  function handleChangeIncrease() {
    changeCartItemQuantity({ cartItemId: coffee.id, type: 'increase' })
  }

  function handleChangeDecrease() {
    changeCartItemQuantity({ cartItemId: coffee.id, type: 'decrease ' })
  }

  function handleRemove() {
    removeItemCart(coffee.id)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <div className="card-content">
        <span>{coffee.name}</span>
        <strong>R$ {formattedPrice}</strong>
        <div className="actions">
          <Counter
            handleDecrease={handleChangeDecrease}
            handleIncrease={handleChangeIncrease}
            quantity={coffee.quantity}
          />
          <ButtonDelete onClick={handleRemove}>
            <Trash size={22} /> Remover
          </ButtonDelete>
        </div>
      </div>
    </CardContainer>
  )
}

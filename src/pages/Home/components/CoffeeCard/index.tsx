import { ShoppingCart } from 'phosphor-react'
import { ButtonActions, ButtonAddCart, Buy, CardContainer } from './styles'
import { Counter } from '../../../../components/Counter'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = { ...coffee, quantity }

    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />

      <div className="tags">
        {coffee.tags.map((tag) => {
          return <span key={tag}>{tag}</span>
        })}
      </div>
      <h2>{coffee.name}</h2>
      <p>{coffee.description}</p>

      <Buy>
        <span>
          R$ <strong>{coffee.price.toFixed(2)}</strong>
        </span>

        <ButtonActions>
          <Counter
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={quantity}
          />
          <ButtonAddCart onClick={handleAddToCart}>
            <ShoppingCart color="#F3F2F2" weight="fill" size={22} />
          </ButtonAddCart>
        </ButtonActions>
      </Buy>
    </CardContainer>
  )
}

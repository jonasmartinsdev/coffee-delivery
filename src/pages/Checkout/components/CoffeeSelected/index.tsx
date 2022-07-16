import { useContext } from 'react'
import { Title } from '../../../../components/Title'
import { CartContext } from '../../../../contexts/CartContext'

import { CoffeeCard } from '../CoffeeCard'
import { Confirm } from '../Confirm'

import { SidebarContainer } from './styled'

export function CoffeeSelected() {
  const { cartItem } = useContext(CartContext)

  return (
    <div>
      <Title>Cafés selecionados</Title>
      <SidebarContainer>
        {cartItem &&
          cartItem.map((cart) => {
            return <CoffeeCard key={cart.id} coffee={cart} />
          })}

        <Confirm />
      </SidebarContainer>
    </div>
  )
}

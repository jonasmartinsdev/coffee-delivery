import { HeaderContainer } from './styles'

import logoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <nav>
        <Button variant="purple">
          <MapPin size={22} weight="fill" color="#8047F8" /> Conselheiro Pena,
          MG
        </Button>
        <NavLink to="/checkout">
          <Button variant="yellow">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
          </Button>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

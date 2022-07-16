import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  CoffeeList,
  HomeContainer,
  Item,
  SectionBanner,
  SectionCoffee,
} from './styles'

import backgroundImg from '../../assets/background.png'
import { CoffeeCard } from './components/CoffeeCard'
import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomeContainer>
      <SectionBanner>
        <div className="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <div className="items">
            <div className="left">
              <Item variant="yellow-dark">
                <span>
                  <ShoppingCart weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </Item>
              <Item variant="yellow">
                <span>
                  <Timer weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </Item>
            </div>

            <div className="right">
              <Item variant="base">
                <span>
                  <Package weight="fill" />
                </span>
                <p> Embalagem mantém o café intacto</p>
              </Item>
              <Item variant="purple">
                <span>
                  <Coffee weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </Item>
            </div>
          </div>
        </div>

        <img src={backgroundImg} alt="" />
      </SectionBanner>

      <SectionCoffee>
        <h1>Nossos cafés</h1>

        <CoffeeList>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </CoffeeList>
      </SectionCoffee>
    </HomeContainer>
  )
}

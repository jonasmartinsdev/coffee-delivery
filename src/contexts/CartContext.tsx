import produce from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

interface CreateCardData {
  id: number
  name: string
  photo: string
  price: number
  quantity: number
  tags: string[]
  description: string
}

interface CartItemQuantity {
  cartItemId: number
  type: 'increase' | 'decrease '
}

interface CartContextType {
  cartItemsTotal: number
  cartQuantity: number
  cartItem: CreateCardData[]
  addCoffeeToCart: (data: CreateCardData) => void
  changeCartItemQuantity: (credentials: CartItemQuantity) => void
  cleanCart: () => void
  removeItemCart: (cartItemId: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItem, setCartItem] = useState<CreateCardData[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:cartItem-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  })

  useEffect(() => {
    const stateJson = JSON.stringify(cartItem)

    localStorage.setItem('@coffee-delivery:cartItem-1.0.0', stateJson)
  }, [cartItem])

  const cartQuantity = cartItem.length

  const cartItemsTotal = cartItem.reduce((total, cartItem) => {
    return total + cartItem.quantity * cartItem.price
  }, 0)

  function addCoffeeToCart(data: CreateCardData) {
    const coffeeAlreadyExistsInCart = cartItem.findIndex(
      (coffee) => coffee.id === data.id,
    )

    const newCart = produce(cartItem, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(data)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += data.quantity
      }
    })

    setCartItem(newCart)
  }

  function changeCartItemQuantity({ cartItemId, type }: CartItemQuantity) {
    const coffeeAlreadyExistsInCart = cartItem.findIndex(
      (coffee) => coffee.id === cartItemId,
    )

    const newCart = produce(cartItem, (draft) => {
      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]

        draft[coffeeAlreadyExistsInCart].quantity =
          type === 'increase' ? ++item.quantity : --item.quantity
      }
    })
    setCartItem(newCart)
  }

  function removeItemCart(cardItemId: number) {
    const coffeeExistsInCart = cartItem.findIndex(
      (coffee) => coffee.id === cardItemId,
    )

    const updateCart = produce(cartItem, (draft) => {
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItem(updateCart)
  }

  function cleanCart() {
    setCartItem([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addCoffeeToCart,
        changeCartItemQuantity,
        cartQuantity,
        cartItemsTotal,
        cleanCart,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

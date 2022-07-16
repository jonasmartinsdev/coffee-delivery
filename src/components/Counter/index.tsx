import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  quantity: number
  handleDecrease: () => void
  handleIncrease: () => void
}

export function Counter({
  handleDecrease,
  handleIncrease,
  quantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button type="button" onClick={handleDecrease} disabled={quantity === 1}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={handleIncrease}>
        <Plus weight="bold" />
      </button>
    </CounterContainer>
  )
}

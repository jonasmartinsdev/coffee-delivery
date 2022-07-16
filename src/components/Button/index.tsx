import { ButtonContainer, BUTTON_COLORS } from './styles'

import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof BUTTON_COLORS
  children: ReactNode
}

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <ButtonContainer type="button" variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}

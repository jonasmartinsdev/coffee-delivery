import { HTMLAttributes, ReactNode } from 'react'
import { FormGroupContainer } from './styles'

interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  error?: string
}

export function FormGroup({ children, error, ...rest }: FormGroupProps) {
  return (
    <FormGroupContainer {...rest}>
      <div className="form-item">{children}</div>
      {error && <small>{error}</small>}
    </FormGroupContainer>
  )
}

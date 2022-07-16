import styled from 'styled-components'
import { ButtonProps } from '.'

export const BUTTON_COLORS = {
  yellow: 'yellow-light',
  purple: 'purple-light',
  'purple-dark': 'purple-dark',
  'base-button': 'base-button',
} as const

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  background: ${(props) => props.theme[BUTTON_COLORS[props.variant]]};

  color: ${(props) => props.theme['purple-dark']};

  font-size: 0.875rem;
  line-height: 1.3;

  border: 0;
  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;

  cursor: pointer;
`

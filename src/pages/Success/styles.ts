import styled from 'styled-components'

export const SuccessContainer = styled.div`
  padding-top: 5rem;

  > div {
    h2 {
      font-family: 'Baloo 2', monospace;
      font-size: 2rem;
      font-weight: 800;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-dark']};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3;
    }
  }

  section {
    display: grid;
    grid-template-columns: 32.875rem 1fr;
    gap: 6.375rem;
    align-items: flex-end;
  }
`

export const OrderDetailsContainer = styled.div`
  position: relative;
  margin-top: 2.5rem;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;
  padding: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 6px 36px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

const ICON_COLORS = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const

interface IConProps {
  variant: keyof typeof ICON_COLORS
}

export const CardOrder = styled.div<IConProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: block;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    color: ${(props) => props.theme['base-text']};
  }

  div:first-child {
    background: ${(props) => props.theme[ICON_COLORS[props.variant]]};
    width: 32px;
    height: 32px;

    border-radius: 9999px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.background};
      font-size: 1rem;
    }
  }

  & + & {
    margin-top: 2rem;
  }
`

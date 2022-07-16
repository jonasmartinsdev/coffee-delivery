import styled from 'styled-components'

export const HomeContainer = styled.div``

export const SectionBanner = styled.section`
  padding: 5.875rem 0 6.75rem;
  display: grid;
  grid-template-columns: 36.75rem 1fr;
  align-items: flex-start;
  gap: 3.5rem;

  .content {
    > h1 {
      font-family: 'Baloo 2', cursive;
      font-size: 3rem;
      line-height: 1.3;
      font-weight: 800;
    }

    > p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['base-subtitle']};
    }

    .items {
      margin-top: 4.125rem;
      display: flex;
      align-items: center;
      gap: 2.5rem;
    }
  }
`

const ITEM_COLORS = {
  'yellow-dark': 'yellow-dark',
  base: 'base-text',
  purple: 'purple',
  yellow: 'yellow',
} as const

interface ItemProps {
  variant: keyof typeof ITEM_COLORS
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  gap: 0.75rem;

  > span {
    background-color: ${(props) => props.theme[ITEM_COLORS[props.variant]]};
    height: 32px;
    width: 32px;
    border-radius: 999px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    color: ${(props) => props.theme.background};
  }
`

export const SectionCoffee = styled.section`
  margin: 2rem 0;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
  }
`

export const CoffeeList = styled.div`
  margin: 3.25rem 0;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

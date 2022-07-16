import styled from 'styled-components'

export const CounterContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme['base-title']};
    display: flex;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
  }

  > button {
    border: 0;
    display: flex;
    background: transparent;
    font-size: 0.875rem;
    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.purple};
      font-size: 0.875rem;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`

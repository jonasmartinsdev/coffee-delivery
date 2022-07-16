import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 0.75rem;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`

export const CardInput = styled.div`
  padding: 1rem 1.8rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-button']};

  border-radius: 6px;

  .card-input {
    flex: 1;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  input:checked + & {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }

  > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    &:hover {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

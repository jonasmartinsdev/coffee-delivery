import styled from 'styled-components'

export const ConfirmContainer = styled.div`
  margin-top: 1.5rem;

  div {
    margin-top: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }

  button {
    margin-top: 1.25rem;
    background: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};

    border: 0;

    border-radius: 6px;
    width: 100%;

    padding: 0.75rem;
    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

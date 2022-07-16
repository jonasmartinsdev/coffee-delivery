import styled, { css } from 'styled-components'

interface InputProps {
  error?: boolean
}

export default styled.input<InputProps>`
  width: 100%;
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  border: 0;
  padding: 0.75rem;
  font-size: 0.875rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  ${({ theme, error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.red}; ;
    `}
`

import styled from 'styled-components'

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1.25rem;

  & + & {
    margin-top: 1.5rem;
  }

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  padding-bottom: 2rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  .actions {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
  }

  strong {
    position: absolute;
    right: 0;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ButtonDelete = styled.button`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  font-size: 0.75rem;

  line-height: 1.6;
  text-transform: uppercase;

  border: 0;
  padding: 0.40625rem 0.5rem;

  display: flex;
  align-items: flex-end;
  gap: 0.25rem;

  border-radius: 6px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

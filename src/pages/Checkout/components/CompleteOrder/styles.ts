import styled from 'styled-components'

export const SectionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }
  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

export const CardForm = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  & + & {
    margin-top: 0.75rem;
  }
`

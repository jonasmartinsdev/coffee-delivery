import styled from 'styled-components'

export const CardContainer = styled.section`
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  > img {
    margin-top: calc(0px - 1.75rem);
  }

  .tags {
    margin-top: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;

    span {
      font-family: 'Roboto' sans-serif;
      font-size: 0.625rem;

      text-transform: uppercase;
      font-weight: 700;

      color: ${(props) => props.theme['yellow-dark']};
      background: ${(props) => props.theme['yellow-light']};

      padding: 0.25rem 0.5rem;
      border-radius: 100px;
    }
  }

  > h2 {
    font-family: 'Baloo 2', cursive;
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.3;
  }

  > p {
    margin-top: 0.5rem;
    font-family: 'Roboto' sans-serif;
    line-height: 1.3;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const Buy = styled.div`
  width: 100%;
  margin-top: 2.06rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-family: 'Baloo 2', cursive;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`

export const ButtonActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ButtonAddCart = styled.button`
  background: ${(props) => props.theme['purple-dark']};

  color: ${(props) => props.theme['base-text']};

  font-size: 0.875rem;
  line-height: 1.3;

  border: 0;
  padding: 0.625rem 0.5rem;

  display: flex;
  align-items: center;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

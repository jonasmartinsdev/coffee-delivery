import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  right: 0;
  z-index: 5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.background};

  padding: 2.06rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    span {
      position: absolute;
      right: -8.35px;
      top: -8px;

      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};

      width: 20px;
      height: 20px;

      border-radius: 1000px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      line-height: 2;
      font-weight: 700;
    }
  }
`

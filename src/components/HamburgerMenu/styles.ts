import styled from 'styled-components';

export const Menu = styled.div`
  button {
    border: none;
    background: none;
    padding: 20px;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.text};
      margin: 8px;
    }
  }
`;

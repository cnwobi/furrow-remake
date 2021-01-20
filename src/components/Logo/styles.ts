import styled from 'styled-components';

export const Logo = styled.div`
  a {
    font-size: 1.8rem;
    font-weight: 800;
    color: ${props => props.theme.text};
  }
`;

export const LetterO = styled.span`
  height: 1rem;
  width: 1rem;
  background: ${props => props.theme.red};
  margin: 0 4px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  bottom: 2px;
`;

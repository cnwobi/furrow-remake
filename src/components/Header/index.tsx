import { Link } from 'gatsby'
import React from 'react'
import * as Styled from './styles'
import * as GlobalStyled from '~/components/GlobalStyles'

const Header = () => (
  <Styled.HeaderWrapper>
    <GlobalStyled.Container>
      <GlobalStyled.Flex spaceBetween noHeight>
        <Styled.Logo>
          <Link to="/">FURR</Link>
          <span></span>
          <Link to="/">W</Link>
        </Styled.Logo>
        <Styled.Menu>
          <button>
            <span></span>
            <span></span>
          </button>
        </Styled.Menu>
      </GlobalStyled.Flex>
    </GlobalStyled.Container>
  </Styled.HeaderWrapper>
)

export default Header

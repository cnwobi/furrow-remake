import React from 'react';
import * as Styled from '~/components/HamburgerMenu/styles';

interface MenuProps {
  onMouseEnter: () => void;
  hamburger: React.MutableRefObject<null>;
}
const HamburgerMenu = ({ onMouseEnter, hamburger }: MenuProps) => {
  return (
    <Styled.Menu onMouseEnter={onMouseEnter} ref={hamburger}>
      <button>
        <span />
        <span />
      </button>
    </Styled.Menu>
  );
};

export default HamburgerMenu;

import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Ijaa</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='investiment'>Investiment</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='destinations'>Destinations</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='hotels'>Hotels</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='products'>Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarLink,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
  sideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='investment' onClick={toggle}>
            Investment
          </SidebarLink>
          <SidebarLink to='destinations' onClick={toggle}>
            Destinations
          </SidebarLink>
          <SidebarLink to='hotels' onClick={toggle}>
            Hotels
          </SidebarLink>
          <SidebarLink to='products' onClick={toggle}>
            products
          </SidebarLink>
        </SidebarMenu>
        <sideBtnWrap>
          <SidebarRoute to='/contact'>Contact</SidebarRoute>
        </sideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

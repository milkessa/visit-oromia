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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='investment'>Investment</SidebarLink>
          <SidebarLink to='destinations'>Destinations</SidebarLink>
          <SidebarLink to='hotels'>Hotels</SidebarLink>
          <SidebarLink to='products'>products</SidebarLink>
        </SidebarMenu>
        <sideBtnWrap>
          <SidebarRoute to='/contact'>Contact</SidebarRoute>
        </sideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

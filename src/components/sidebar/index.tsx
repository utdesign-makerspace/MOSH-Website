import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLinkG,
  SidebarLinkA,
  SidebarWrapper,
  SidebarSocials,
  Social,
} from "./elements";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface SidebarInterface {
  toggle: () => void;
  isOpen: boolean;
}

const Sidebar = ({ isOpen, toggle }: SidebarInterface) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinkA href="https://learn.utd.ms/">Apply</SidebarLinkA>
          <SidebarLinkG to="/projects">Projects</SidebarLinkG>
          <SidebarSocials>
            <Social href="https://utd.ms/discord" target="_blank">
              <FaDiscord />
            </Social>
            <Social href="mailto:utdmakerspace@gmail.com" target="_blank">
              <MdEmail />
            </Social>
          </SidebarSocials>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

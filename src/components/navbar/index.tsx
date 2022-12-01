import React from "react";
import { FaBars, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavSocials,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinkA,
  NavLinkG,
  NavLogoImg,
} from "./elements";
import MoshLogo from "../../images/mosh.svg";
import { PageProps } from "gatsby";

interface NavbarInterface {
  toggle: () => void;
  transparent: boolean;
}

const Navbar = ({ toggle, transparent }: NavbarInterface) => {
  return (
    <Nav transparent={transparent}>
      <NavbarContainer>
        <NavLogo to="/">
          <NavLogoImg src={MoshLogo} />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinkA href="https://learn.utd.ms/">Apply</NavLinkA>
          </NavItem>
          <NavItem>
            <NavLinkG to="/projects">Projects</NavLinkG>
          </NavItem>
          <NavItem>
            <NavSocials href="https://utd.ms/discord" target="_blank">
              <FaDiscord />
            </NavSocials>
            <NavSocials href="mailto:utdmakerspace@gmail.com" target="_blank">
              <MdEmail />
            </NavSocials>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

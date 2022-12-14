import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "gatsby";

interface SidebarProps {
  readonly isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #121212;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLinkG = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--makerspace-primary-color);
    transition: 0.1s ease-in-out;
  }
`;

export const SidebarLinkA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: var(--makerspace-primary-color);
    transition: 0.1s ease-in-out;
  }
`;

export const SidebarSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
`;

export const Social = styled.a`
  color: #fff;
  padding-left: 10px;
  padding-right: 10px;

  &:hover {
    color: var(--makerspace-primary-color);
    transition: 0.1s ease-in-out;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { breakpoints, colors, fonts, other } from "../constants";
import logo from "../assets/logo.png";
import Hamburger from "./Hamburger";
import Drawer from "./Drawer";

const Wrapper = styled.nav`
  height: ${other.navbarHeight.desktop};
  background: linear-gradient(
    180deg,
    ${colors.dark} 25%,
    rgba(38, 38, 38, 0) 100%
  );
  position: fixed;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 48px;
  @media (max-width: ${breakpoints.tablet}) {
    height: ${other.navbarHeight.mobile};
    padding: 0px 18px;
    background-color: ${colors.dark};
  }
`;
const Icon = styled.img`
  width: 180px;
  height: auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const ListItem = styled.li`
  font-family: ${fonts.familyText};
  font-size: 1.1rem;
  font-weight: 700;
  padding: 0px 16px;
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;
const ListLink = styled.a`
  display: block;
  overflow: hidden;
  padding: 8px;
  color: ${colors.font};
  text-decoration: none;
  background-clip: text;
  position: relative;

  &:after {
    content: "";
    height: 4px;
    background-color: ${colors.primary};
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
  &:hover {
    &:after {
      transform: translateX(0%);
    }
  }
`;

const ContactBtn = styled.a`
  text-decoration: none;
  border: 3px solid ${colors.primaryHighlight};
  background-color: ${colors.primary};
  font-family: ${fonts.familyText};
  color: ${colors.font};
  padding: 12px 24px;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  isolation: isolate;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease, border-color 0.4s ease;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${colors.primaryHighlight};
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: -1;
    transform: translateY(100%);
    transition: transform 0.4s ease;
  }
  &:hover {
    color: ${colors.dark};
    border-color: ${colors.primary};
    &:after {
      transform: translateY(0%);
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
const StyledHamburger = styled(Hamburger)`
  cursor: pointer;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Icon src={logo} alt="" />
      <NavList>
        <ListItem>
          <ListLink href="#home">HOME</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#about">ABOUT</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#yoga">YOGA</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#strength">STRENGTH</ListLink>
        </ListItem>
        <ListItem>
          <ListLink href="#services">SERVICES</ListLink>
        </ListItem>
      </NavList>
      <ContactBtn href="mailto:strongerwithadrienne@gmail.com">
        LET'S TALK
      </ContactBtn>
      <StyledHamburger handleClick={() => setOpen(true)} />
      <Drawer open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default Navbar;

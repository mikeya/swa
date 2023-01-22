import React from "react";
import styled from "styled-components";
import { colors, fonts } from "../constants";
import CloseIcon from "../components/CloseIcon";
import Insta from "./Insta";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.font};
  transition: transform 0.5s ease;
  z-index: 500;
  transform: ${(props) => (props.open ? `translateX(0%)` : `translateX(100%)`)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;
const StyledCloseIcon = styled(CloseIcon)`
  align-self: flex-end;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  & > li {
    font-family: ${fonts.familyText};
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
const NavLink = styled.a`
  color: ${colors.dark};
  text-decoration: none;
`;
const ContactBtn = styled.button`
  border: 3px solid ${colors.primaryHighlight};
  background-color: ${colors.primary};
  font-family: ${fonts.familyText};
  color: ${colors.font};
  padding: 16px 32px;
  font-size: 1.25rem;
  font-weight: bolder;
  max-width: 200px;
  cursor: pointer;
  & > a {
    color: ${colors.font};
    text-decoration: none;
  }
`;

const Drawer = ({ open, setOpen }) => {
  return (
    <Wrapper open={open}>
      <StyledCloseIcon handleClick={() => setOpen(false)} />
      <NavList>
        <li onClick={() => setOpen(false)}>
          <NavLink href="#home">HOME</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink href="#about">ABOUT</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink href="#yoga">YOGA</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink href="#strength">STRENGTH</NavLink>
        </li>
        <li onClick={() => setOpen(false)}>
          <NavLink href="#services">SERVICES</NavLink>
        </li>
      </NavList>
      <a
        href="https://www.instagram.com/stronger_with_adrienne"
        target="_blank"
        rel="noreferrer"
      >
        <Insta />
      </a>
      <ContactBtn>
        <a href="mailto:strongerwithadrienne@gmail.com">LET'S TALK!</a>
      </ContactBtn>
    </Wrapper>
  );
};

export default Drawer;

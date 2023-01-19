import React from "react";
import styled from "styled-components";
import { breakpoints, colors, fonts } from "../constants";
import logo from "../assets/logo.png";

const Wrapper = styled.footer`
  padding: 74px 48px;
  background-color: ${colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 36px 24px 18px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px 24px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 48px;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 18px;
  }
`;
const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmailLink = styled.a`
  color: ${colors.font};
  text-decoration: none;
  transition: box-shadow 0.2s ease;
  font-size: 1.25rem;
  &:hover {
    box-shadow: 0px 1px 0px 0px ${colors.font};
  }
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
const Logo = styled.img`
  @media (max-width: ${breakpoints.tablet}) {
    width: 180px;
    height: auto;
  }
`;
const Heading = styled.h4`
  font-size: 2rem;
  color: ${colors.primary};
  font-family: ${fonts.familyTitle};
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const NavWrap = styled.nav`
  @media (max-width: ${breakpoints.mobile}) {
    padding: 18px 18px 12px;
  }
`;
const List = styled.ul`
  list-style: none;
  padding-left: 0px;
  & > li {
    font-family: ${fonts.familyText};
    font-size: 1.25rem;
    font-weight: 500;
    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
    }
  }
`;
const SomeFun = styled.span`
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }
`;
const SFLink = styled.a`
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    box-shadow: 0px 1px 0px 0px ${colors.primary};
  }
`;
const NavLink = styled.a`
  color: ${colors.font};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${colors.font};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <div style={{ flex: "1", display: "flex" }}>
          <LogoWrap>
            <Logo src={logo} alt="" />
            <EmailLink href="mailto:strongerwithadrienne@gmail.com">
              strongerwithadrienne@gmail.com
            </EmailLink>
          </LogoWrap>
        </div>
        <div
          style={{ flex: "1", display: "flex", justifyContent: "space-evenly" }}
        >
          <NavWrap>
            <Heading>Navigation</Heading>
            <List>
              <li>
                <NavLink href="#home">Home</NavLink>
              </li>
              <li>
                <NavLink href="#about">About</NavLink>
              </li>
              <li>
                <NavLink href="#yoga">Yoga</NavLink>
              </li>
              <li>
                <NavLink href="#strength">Strength</NavLink>
              </li>
              <li>
                <NavLink href="#services">Services</NavLink>
              </li>
            </List>
          </NavWrap>
          <NavWrap>
            <Heading>Follow</Heading>
            <List>
              <li>
                <NavLink
                  href="https://www.instagram.com/stronger_with_adrienne"
                  target={"_blank"}
                >
                  Instagram
                </NavLink>
              </li>
            </List>
          </NavWrap>
        </div>
      </Content>
      <SomeFun>
        Site Design + Branding + Creation by{" "}
        <SFLink href="https://www.somefunstudio.com" target={"_blank"}>
          Some Fun Studio
        </SFLink>
      </SomeFun>
    </Wrapper>
  );
};

export default Footer;

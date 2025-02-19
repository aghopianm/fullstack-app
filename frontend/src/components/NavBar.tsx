import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "./Avatar"; // Import the Avatar component

const NavBar: React.FC = () => {
  return (
    <Nav>
      <LinkContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact-book">Contact Book</StyledLink>
        <StyledLink to="/ai-chat">AI Chat Applications</StyledLink>
      </LinkContainer>
      <Avatar src="/favicon.ico" alt="Rich Piana" /> {/* Use Avatar component */}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color:rgb(0, 183, 255);
  color: white;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default NavBar;
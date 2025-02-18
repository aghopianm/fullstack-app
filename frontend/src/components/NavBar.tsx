import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar: React.FC = () => {
  return (
    <Nav>
      <LinkContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact-book">Contact Book</StyledLink>
        <StyledLink to="/ai-chat">AI Chat Applications</StyledLink>
      </LinkContainer>
      <AvatarContainer>
      <Avatar src="/favicon.ico" size="small" alt="Rich Piana" />
      </AvatarContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #008080;
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

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default NavBar;
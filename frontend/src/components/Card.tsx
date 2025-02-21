import React from 'react';
import styled from 'styled-components';
import Stars from './Stars'; // Import the Stars component

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
  font-size: 1.25rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #008080;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s;
  &:hover {
    background-color: #006666;
  }
`;

interface CardProps {
  imageSrc: string;
  title: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, link }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Stars title={title}/>
        <LinkButton href={link} target="_blank" rel="noopener noreferrer">
          Visit
        </LinkButton>
      </Content>
    </CardContainer>
  );
};

export default Card;
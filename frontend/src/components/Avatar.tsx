import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1000;
`;

const AvatarWrapper = styled.div`
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  width: ${props => {
    switch(props.size) {
      case 'small': return '32px';
      case 'large': return '96px';
      default: return '40px'; // Default size
    }
  }};
  height: ${props => {
    switch(props.size) {
      case 'small': return '32px';
      case 'large': return '96px';
      default: return '40px'; // Default size
    }
  }};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Avatar = ({
  src,
  alt = 'avatar',
  size = 'medium',
}) => {
  return (
    <AvatarContainer>
      <AvatarWrapper size={size}>
        <Image src={src} alt={alt} />
      </AvatarWrapper>
    </AvatarContainer>
  );
};

export default Avatar;
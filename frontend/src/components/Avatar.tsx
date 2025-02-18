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
  border-radius: ${props => props.round ? '50%' : '8px'};
  overflow: hidden;
  width: ${props => {
    switch(props.size) {
      case 'small': return '32px';
      case 'large': return '96px';
      default: return '64px';
    }
  }};
  height: ${props => {
    switch(props.size) {
      case 'small': return '32px';
      case 'large': return '96px';
      default: return '64px';
    }
  }};
  background-color: ${props => props.backgroundColor || '#e1e1e1'};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Fallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 500;
  font-size: ${props => {
    switch(props.size) {
      case 'small': return '14px';
      case 'large': return '32px';
      default: return '24px';
    }
  }};
`;

const Avatar = ({
  src,
  alt,
  size = 'medium',
  round = true,
  fallbackText,
  backgroundColor
}) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <AvatarContainer>
      <AvatarWrapper size={size} round={round} backgroundColor={backgroundColor}>
        {src && !hasError ? (
          <Image
            src={src}
            alt={alt || 'avatar'}
            onError={handleError}
          />
        ) : (
          <Fallback size={size}>
            {fallbackText || alt?.charAt(0).toUpperCase() || '?'}
          </Fallback>
        )}
      </AvatarWrapper>
    </AvatarContainer>
  );
};

export default Avatar;
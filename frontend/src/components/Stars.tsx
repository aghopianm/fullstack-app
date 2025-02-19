import React, { useState } from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.span<{ active: boolean }>`
  font-size: 2rem;
  color: ${props => (props.active ? '#FFD700' : '#e4e5e9')};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #FFD700;
  }
`;

const Stars: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          active={star <= (hover || rating)}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default Stars;
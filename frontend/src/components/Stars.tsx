import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setRating } from '../actions/starActions';

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

interface StarsProps {
  title: string; // Unique identifier for each card
}

const Stars: React.FC<StarsProps> = ({ title }) => {
  const dispatch = useDispatch();
  const rating = useSelector((state) => state.stars[title] || 0);
  const [hovered, setHovered] = React.useState(0);

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          active={star <= (hovered || rating)}
          onClick={() => dispatch(setRating(title, star))}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default Stars;
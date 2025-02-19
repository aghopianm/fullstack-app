import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Space between cards */
  justify-content: center; /* Center the cards horizontally */
  padding: 16px; /* Optional padding around the grid */
`;

const App: React.FC = () => {
  return (
    <div>
      <h1>AI App Ratings</h1>
      <CardGrid>
      <Card
        imageSrc="claude.png"
        title="Claude.AI"
        link="https://claude.ai"
      />
      <Card
        imageSrc="gemini.jpg"
        title="Gemini"
        link="https://gemini.google.com/"
      />
      <Card
        imageSrc="chatgpt.png"
        title="Chat GPT"
        link="https://chatgpt.com/"
      />
      <Card
        imageSrc="deepseek.png"
        title="Deepseek"
        link="https://chat.deepseek.com/"
      />
      <Card
        imageSrc="llama.jpeg"
        title="Llama"
        link="https://www.llama.com/"
      />
      </CardGrid>
    </div>
  );
};

export default App;
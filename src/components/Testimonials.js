// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Testimonial = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const Quote = styled.p`
  font-size: 1em;
  font-style: italic;
  margin: 0.5em 0;
`;

const Author = styled.p`
  font-size: 1em;
  margin-top: 1em;
  font-weight: bold;
`;

const Testimonials = () => (
  <TestimonialsWrapper>
    <Title>Testimonials</Title>
    <TestimonialsGrid>
      <Testimonial>
        <Quote>"DeepAIMinds transformed our business with their AI solutions. We saw immediate improvements in efficiency."</Quote>
        <Author>John Doe, CEO of Company</Author>
      </Testimonial>
      <Testimonial>
        <Quote>"The AI training provided by DeepAIMinds empowered our team to leverage AI effectively in our projects."</Quote>
        <Author>Jane Smith, CTO of Another Company</Author>
      </Testimonial>
    </TestimonialsGrid>
  </TestimonialsWrapper>
);

export default Testimonials;

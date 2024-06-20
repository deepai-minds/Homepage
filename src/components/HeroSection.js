// src/components/HeroSection.js
import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('/hero-image.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 0 20px;
`;

const Headline = styled.h1`
  font-size: 3em;
  margin-bottom: 0.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Subheadline = styled.p`
  font-size: 1.5em;
  margin: 0.5em 0 1.5em;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const CTAButton = styled.a`
  background-color: #ff4081;
  padding: 15px 30px;
  color: white;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #e60073;
  }
`;

const HeroSection = () => (
  <HeroWrapper>
    <Headline>Empowering Your Business with AI-Driven Insights</Headline>
    <Subheadline>Unlock the full potential of AI to drive innovation and efficiency in your operations.</Subheadline>
    <CTAButton href="#contact">Get Started Today</CTAButton>
  </HeroWrapper>
);

export default HeroSection;

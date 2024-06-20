// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 50px 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  margin: 0.5em 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutUs = () => (
  <AboutWrapper id="about">
    <Title>About Us</Title>
    <Paragraph>Our mission is to leverage AI to transform businesses, drive innovation, and enhance efficiency.</Paragraph>
    <Paragraph>At DeepAIMinds, we value integrity, excellence, and forward-thinking innovation.</Paragraph>
  </AboutWrapper>
);

export default AboutUs;

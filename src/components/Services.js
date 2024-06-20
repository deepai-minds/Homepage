// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const Service = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  perspective: 1000px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const ServiceDescription = styled.p`
  font-size: 1em;
  margin: 0.5em 0;
`;

const Services = () => (
  <ServicesWrapper id="services">
    <Title>Our Services</Title>
    <ServicesGrid>
      <Service>
        <ServiceImage src="/ai-consulting.jpg" alt="AI Consulting" />
        <ServiceTitle>AI Consulting</ServiceTitle>
        <ServiceDescription>Transform your business strategies with expert AI guidance.</ServiceDescription>
      </Service>
      <Service>
        <ServiceImage src="/custom-ai.jpg" alt="Custom AI Solutions" />
        <ServiceTitle>Custom AI Solutions</ServiceTitle>
        <ServiceDescription>Tailored AI solutions to meet your unique business needs.</ServiceDescription>
      </Service>
      <Service>
        <ServiceImage src="/data-analysis.jpg" alt="Data Analysis" />
        <ServiceTitle>Data Analysis</ServiceTitle>
        <ServiceDescription>Advanced data analysis to drive informed decision-making.</ServiceDescription>
      </Service>
      <Service>
        <ServiceImage src="/ai-training.jpg" alt="AI Training" />
        <ServiceTitle>AI Training</ServiceTitle>
        <ServiceDescription>Empower your team with our comprehensive AI training programs.</ServiceDescription>
      </Service>
    </ServicesGrid>
  </ServicesWrapper>
);

export default Services;

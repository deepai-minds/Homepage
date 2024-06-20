// src/components/CaseStudies.js
import React from 'react';
import styled from 'styled-components';

const CasesWrapper = styled.section`
  padding: 50px 20px;
  background-color: white;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const CaseStudy = styled.div`
  background-color: #f4f4f4;
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

const CaseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CaseTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 0.5em;
`;

const CaseDescription = styled.p`
  font-size: 1em;
  margin: 0.5em 0;
`;

const CaseStudies = () => (
  <CasesWrapper id="cases">
    <Title>Case Studies</Title>
    <CaseGrid>
      <CaseStudy>
        <CaseImage src="/case-study1.jpg" alt="Case Study 1" />
        <CaseTitle>Optimizing Supply Chain with AI</CaseTitle>
        <CaseDescription>See how we helped a leading retailer improve their supply chain efficiency using AI.</CaseDescription>
      </CaseStudy>
      <CaseStudy>
        <CaseImage src="/case-study2.jpg" alt="Case Study 2" />
        <CaseTitle>Enhancing Customer Experience</CaseTitle>
        <CaseDescription>Discover how our AI solutions enhanced customer experience for a global e-commerce company.</CaseDescription>
      </CaseStudy>
    </CaseGrid>
  </CasesWrapper>
);

export default CaseStudies;

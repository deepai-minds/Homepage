// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const FooterNav = styled.nav`
  margin: 10px 0;
  a {
    color: white;
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 DeepAIMinds. All rights reserved.</p>
    <FooterNav>
      <a href="#about">About Us</a> | <a href="#services">Services</a> | <a href="#cases">Case Studies</a> | <a href="#blog">Blog</a> | <a href="#contact">Contact Us</a>
    </FooterNav>
  </FooterWrapper>
);

export default Footer;

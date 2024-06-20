// src/components/Header.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${props => props.scrolled ? 'rgba(0, 123, 255, 0.9)' : 'transparent'};
  color: white;
  box-shadow: ${props => props.scrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s;
  z-index: 1000;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  font-weight: bold;
  margin: 0 15px;
  position: relative;
  &:hover {
    text-decoration: underline;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.a`
  color: white;
  font-weight: bold;
  margin: 0 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownContent = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  color: black;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

const CTAButton = styled.a`
  background-color: #ff4081;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-left: 15px;
  &:hover {
    background-color: #e60073;
  }
`;

const SearchBarWrapper = styled.div`
  position: relative;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 1em;
  width: 0;
  transition: width 0.3s ease;
  &:focus {
    width: 200px;
    border: 1px solid #ccc;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <HeaderWrapper scrolled={scrolled}>
      <Logo>
        <LogoImage src="/logo.png" alt="DeepAIMinds Logo" />
        DeepAIMinds
      </Logo>
      <Nav>
        <NavLink href="#about">About Us</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#cases">Case Studies</NavLink>
        <NavLink href="#blog">Blog</NavLink>
        <NavLink href="#contact">Contact Us</NavLink>
        <Dropdown>
          <DropdownToggle onClick={toggleDropdown}>More</DropdownToggle>
          <DropdownContent show={dropdownOpen}>
            <DropdownLink href="#team">Our Team</DropdownLink>
            <DropdownLink href="#careers">Careers</DropdownLink>
            <DropdownLink href="#faq">FAQ</DropdownLink>
          </DropdownContent>
        </Dropdown>
        <CTAButton href="#contact">Get Started</CTAButton>
        <SearchBarWrapper>
          <SearchInput type="text" placeholder="Search..." />
          <SearchIcon />
        </SearchBarWrapper>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

// src/components/ContactUs.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 50px 20px;
  background-color: #f4f4f4;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 1em;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactUs = () => (
  <ContactWrapper id="contact">
    <Title>Contact Us</Title>
    <ContactForm>
      <Input type="text" placeholder="Name" required />
      <Input type="email" placeholder="Email" required />
      <Input type="text" placeholder="Company" />
      <TextArea placeholder="Message" rows="5" required></TextArea>
      <SubmitButton type="submit">Send Message</SubmitButton>
    </ContactForm>
  </ContactWrapper>
);

export default ContactUs;

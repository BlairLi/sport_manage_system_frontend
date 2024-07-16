import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import axios from 'axios';
import logo from './headerlogo2.png';
import contactBg from './contactBg.png';
import send from './send.png';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';

const Containerr = styled.div`
    padding-top: 5rem;
    padding-bottom: 2rem;
    background-image: url(${contactBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    font-family: 'Poppins', sans-serif;
`;

const Container = styled.div`
    position: relative;
    width: 95%;
    margin: 0 auto;
    background-color: #ffffff76;
    border-radius: 25px;
    padding: 25px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        padding: 25px 25px 0px 25px;
        background-color: #00000011;
    }

    h1 {
        font-size: 150px;
        color: #95071A;
        font-family: 'League Spartan', sans-serif;
        font-weight: bold;

        @media (max-width: 1024px) {
            font-size: 10vw;
        }
    }

    p {
        font-size: 25px;

        @media (max-width: 1024px) {
            order: 2;
            font-size: 3vw;
        }
    }
`;

const LogoSection = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding: 10px;

    @media (max-width: 1024px) {
        order: 4;
        padding: 0px;
    }
`;

const Logo = styled.img`
    width: 200px;
    height: auto;

    @media (max-width: 1024px) {
        width: 150px;
    }
`;

const Logo2 = styled.img`
    width: 150px;
    height: auto;

    @media(max-width: 480px){
        width: 80px;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (max-width: 1024px) {
        flex-direction: column;
        margin-top: 0px;
    }
`;

const Section = styled.div`
    flex: 1;
    padding: 10px;
    text-align: left;
    margin-right: ${props => props.marginRight ? '80px' : '0'};

    @media (max-width: 1024px) {
        margin-right: 0;
        order: ${props => props.order || 'initial'};
        padding: 0px;
    }
`;

const Address = styled.div`
    color: #95071A;
    font-size: 25px;
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 25px;

    @media (max-width: 1024px) {
        order: 3;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    div {
        display: flex;
        align-items: center;

        img {
            margin-right: 10px;
            height: 25px;
        }
    }
`;

const SocialIcons = styled.div`
    font-size: 24px;
    margin-top: 60px;
    margin-bottom: 10px;
    display: flex;
    justify-content: start;
    gap: 15px;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const SocialIcons2 = styled.div`
    font-size: 24px;
    display: flex;
    justify-content: start;
    gap: 15px;
    align-items: center;

    @media (max-width: 1024px) {
        justify-content: center;
        order: 12;
        display: flex;
    }

    @media (min-width: 1025px) {
        display: none;
    }
    @media(max-width: 480px){
        width: 100px;
    }
`;

const UserName = styled.p`
    font-weight: 800;

    @media (max-width: 1024px) {
        text-align: center;
        display: none;
    }
`;

const UserName2 = styled.p`
    font-weight: 800;

    @media (min-width: 1025px) {
        display: none;
    }
`;

const FormGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    margin-bottom: 20px;
    font-size: 18px;

    @media (max-width: 1024px) {
        order: 5;
        row-gap: 0px;
        margin-bottom: 0px;
        column-gap: 0px;
    }
`;

const Label = styled.label`
    grid-column: span 1;

    @media(max-width: 480px){
        transform: scale(0.6);
    }
`;

const Label2 = styled.label`
    grid-column: span 2;

    @media(max-width: 480px){
        transform: scale(0.6);
        grid-column: span 1;
    }
`;

const Input = styled.input`
    padding: 8px;
    width: 100%;
    border-radius: 25px;

    @media(max-width: 1024px){
        transform: scale(0.95);
        padding: 10px;
    }

    @media(max-width: 480px){
        transform: scale(0.9);
        width: 98%;
        padding: 0px;
    }
`;

const Input2 = styled.input`
    grid-column: span 2;
    padding: 8px;
    width: 100%;
    border-radius: 25px;

    @media(max-width: 480px){
        transform: scale(0.95);
        padding: 0px;
    }
`;

const TextArea = styled.textarea`
    grid-column: 1 / -1;
    width: 100%;
    padding: 8px;
    border-radius: 25px;

    @media(max-width: 480px){
        transform: scale(0.95);
        padding: 0px;
        rows:2;
    }
`;

const Button = styled.button`
    background-color: #95071A;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    grid-column: 1 / -1;

    @media(max-width: 480px){
        margin-left: 3vw;
    }
`;

const Lastline = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
        padding-top: 10px;
    }
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_MONGODB_URL; 
    try {
    //   const response = await axios.post(`${url}/api/send-email`, formData);
    // TODO
      const response = await axios.post(`http://localhost:3001/api/sendEmail`, formData);
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
      <Containerr>
          <Container>
              <h1>Contact us!</h1>
              <Content>
                  <Section marginRight order={2}>
                      <p>Questions about our programs? Feel free to get in touch using any of the information below, we look forward to hearing from you!</p>
                      <Address>
                          <div><img src={c1} alt="Phone Icon"/><span>+1 (416) 453-8814</span></div>
                          <div><img src={c2} alt="Website Icon"/><span>JuniorAthletics.ca</span></div>
                          <div><img src={c3} alt="Chat Icon"/><span>Chat with us!</span></div>
                      </Address>
                      <SocialIcons>
                          <BsFacebook />
                          <BsTwitter />
                          <AiOutlineInstagram />
                          <AiFillLinkedin />
                      </SocialIcons>
                      <UserName>@JuniorAthletics</UserName>
                  </Section>
                  <Section order={5}>
                      <form onSubmit={handleSubmit}>
                          <FormGroup>
                              <Label htmlFor="firstName">First Name</Label>
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input type="text" id="firstName" value={formData.firstName} onChange={handleChange} />
                              <Input type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
                              <Label htmlFor="email">Email</Label>
                              <Input2 type="email" id="email" value={formData.email} onChange={handleChange} />
                              <Label2 htmlFor="message">Message</Label2>
                              <TextArea id="message" rows="3" value={formData.message} onChange={handleChange}></TextArea>
                          </FormGroup>
                          <Lastline>
                              <Button type="submit"><Logo2 src={send} alt="send" /></Button>
                              <div>
                                <SocialIcons2>
                                    <BsFacebook />
                                    <BsTwitter />
                                    <AiOutlineInstagram />
                                    <AiFillLinkedin />
                                </SocialIcons2>
                                <UserName2>@JuniorAthletics</UserName2>
                              </div>
                          </Lastline>
                      </form>
                  </Section>
                  <LogoSection order={5}>
                      <Logo src={logo} alt="Junior Athletics Logo" />
                  </LogoSection>
              </Content>
          </Container>
      </Containerr>
  );
}

export default ContactPage;

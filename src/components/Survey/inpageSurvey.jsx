import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #95071A;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  color: #D4AF37;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const OptionButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0047ab;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #003399;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 12px 25px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 10px 20px;
  }

  & > svg {
    margin-left: 10px;
    font-size: 1.5rem;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
`;

const BackgroundLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  z-index: -1;
  width: 80%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HelpPage = () => {
  return (
    <Container>
      <BackgroundLogo>
        <img src="/path-to-your-background-image.png" alt="Background Logo" />
      </BackgroundLogo>
      <Title>DO YOU NEED HELP CHOOSING A PROGRAM?</Title>
      <SubTitle>Click on options below...</SubTitle>
      <ButtonGroup>
        <OptionButton to="/HelpOnProgram">
          YES, PLEASE HELP <AiOutlineArrowRight />
        </OptionButton>
        <OptionButton to="/OurProgram">
          NO, SIGN ME UP <AiOutlineArrowRight />
        </OptionButton>
      </ButtonGroup>
    </Container>
  );
};

export default HelpPage;

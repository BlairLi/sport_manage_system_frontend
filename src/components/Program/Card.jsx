import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import redcheck from '../../../public/redcheck.webp';
import registernow from './registernow.png';

const CardWrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  width: 20rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;

  @media (max-width: 1024px) {
    width: 80%;
    height: auto;
  }

  @media (max-width: 640px) {
    width: 100%;
    height: auto;
    margin-top: 0;
  }
`;

const CardHeader = styled.div`
  padding-top: 4.5rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

const Badge = styled.img`
  width: 6rem;
  height: auto;
  position: relative;
`;

const CardBody = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  height: 100%;

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const OldPrice = styled.div`
  font-size: 1rem;
  color: #666;
  text-decoration: line-through;
`;

const SpecialPrice = styled.div`
  font-size: 1rem;
  color: #95071A;
  font-weight: bold;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #95071A;
  font-family: 'Poppins', sans-serif;

  span {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 1.5rem;
    span {
      font-size: 0.75rem;
    }
  }
`;

const PerMonth = styled.div`
  font-size: 1rem;
  color: #333;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #333;
  margin: 10px 0;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const Details = styled.div`
  text-align: left;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.7rem;
  color: #333;
  height: 1rem;

  &::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.5rem;
    background-image: url(${redcheck});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Outcome = styled.div`
  text-align: left;
`;

const Notes = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const RegisterNowImage = styled.img`
  width: 50%;
  height: auto;

  @media (max-width: 480px) {
    width: 70%;
    margin: 0 auto;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  height: 1rem;
  font-size: 0.7rem;
  color: #333;

  &::before {
    content: '';
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 10px;
    background-image: url(${redcheck});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const Card = ({ backgroundImage, badgeSrc, programName, oldPrice, specialPrice, price, perMonth, details, outcomes, notes, link }) => {
  return (
    <CardWrapper style={{ backgroundImage: `url(${backgroundImage})` }}>
      <CardHeader>
        <BadgeContainer>
          <Badge src={badgeSrc} alt="Badge" />
        </BadgeContainer>
        {programName}
      </CardHeader>
      <CardBody>
        <OldPrice>{oldPrice}</OldPrice>
        <SpecialPrice>{specialPrice}</SpecialPrice>
        <Price><span>$</span>{price}</Price>
        <PerMonth>{perMonth}</PerMonth>
        <Divider />
        <SectionTitle>Details</SectionTitle>
        <Details>
          {details.map((detail, index) => (
            <DetailItem key={index}>{detail}</DetailItem>
          ))}
        </Details>
        <Divider />
        <SectionTitle>Outcome</SectionTitle>
        <Outcome>
          <FeatureList>
            {outcomes.map((outcome, index) => (
              <FeatureItem key={index}>{outcome}</FeatureItem>
            ))}
          </FeatureList>
        </Outcome>
        <Divider />
        <SectionTitle>Notes</SectionTitle>
        <Notes>
          <FeatureList>
            {notes.map((note, index) => (
              <FeatureItem key={index}>{note}</FeatureItem>
            ))}
          </FeatureList>
        </Notes>
        <Link to={link}>
          <RegisterNowImage src={registernow} alt="Register Now" />
        </Link>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;

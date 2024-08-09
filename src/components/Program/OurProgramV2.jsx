import React from 'react';
import styled from 'styled-components';
import Card from './Card'; // Adjust the import path as necessary
import p2 from '../../../public/Basketball_Group_Training_Academy.webp';
import p3 from '../../../public/Leadership_Camps.webp';
import p4 from '../../../public/26.webp';
import smallGroup_badge from '../../../public/smallGroup_badge.png';
import oneOnOne_badge from '../../../public/oneOnOne_badge.png';
import fall_house_badge from '../../../public/fall_house_badge.png';
import Reviews from './Reviews';
import { PROGRAMS } from '../../constants/ProgramNames';

const Containerr = styled.div`
  padding-top: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 0;
`;

const TopSection = styled.div`
  background-color: white;
  padding-top: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: #95071A;
  font-weight: 800;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4vw;
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
  @media (max-width: 480px) {
    font-size: 6vw;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.2vw;
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
  color: #333;

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }
  @media (max-width: 480px) {
    font-size: 3vw;
    text-align: center;
  }
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: auto;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    padding: 10px; 
    gap: 3rem; /* Increased gap for more space between cards */
  }
`;

const InfoBlocks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
`;

const InfoBlock = styled.div`
  background-color: white;
  border: 2px solid #95071A;
  border-radius: 10px;
  padding: 20px;
  width: 20%;
  height: 7rem;
  min-width: 200px;
  text-align: center;

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const InfoTitle = styled.div`
  font-size: 1.3rem;
  color: #95071A;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoText = styled.div`
  font-size: 0.9rem;
  color: #333;
`;

const ApproachSection = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  width: 100%;
`;

const ApproachTitle = styled.h2`
  font-size: 2rem;
  color: #95071A;
  margin-bottom: 10px;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const ApproachText = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const OurProgram = () => {
  return (
    <Containerr>
      <Container>
        <TopSection>
          <Title>CHOOSE YOUR PROGRAM</Title>
          <Subtitle>There is a one-time fee of $25 as you register for your child's jersey, and drawstring bag</Subtitle>
        </TopSection>
        <ProgramContainer>
          <Card
            backgroundImage={p2}
            badgeSrc={smallGroup_badge}
            programName={PROGRAMS.PROGRAM_1}
            oldPrice="$120 per month"
            specialPrice="AUGUST SPECIAL"
            price="95"
            perMonth="per month"
            details={["Level: Beginner-Intermediate", "4 sessions per month", "60 minute sessions"]}
            outcomes={["Comprehensive basketball skill training", "Teamwork and sportsmanship focus"]}
            notes={[
              "Parent receive 1-4 monthly coupons to local stores",
              "24/7 live WhatsApp communication for parents",
              "Personalized progress report cards"
            ]}
            link="/survey?class=Basketball Group Academy Training"
          />
          <Card
            backgroundImage={p4}
            badgeSrc={oneOnOne_badge}
            programName={PROGRAMS.PROGRAM_2}
            oldPrice="$200 per month"
            specialPrice="AUGUST SPECIAL"
            price="160"
            perMonth="per month"
            details={["Level: Beginner-Elite", "4 sessions per month", "60 minute sessions"]}
            outcomes={["Weekly access to practice drills (homework)", "Improved skills, fitness, and self-esteem"]}
            notes={[
              "Parent receive 1-4 monthly coupons to local stores",
              "24/7 live WhatsApp communication for parents",
              "Personalized training plan"
            ]}
            link="/survey?class=All-Girls Training Academy"
          />
          <Card
            backgroundImage={p3}
            badgeSrc={fall_house_badge}
            programName={PROGRAMS.PROGRAM_3}
            oldPrice="$100 per month"
            specialPrice="AUGUST SPECIAL"
            price="80"
            perMonth="per month"
            details={["Level: All skill levels welcome", "12 Weeks (Playoff & Championships last 2 weeks)", "60 minute sessions"]}
            outcomes={["Focus on personal growth and confidence", "Indoor learning conditions"]}
            notes={[
              "Monthly local store discounts on gear",
              "24/7 question line for parents",
              "Metals and prizes"
            ]}
            link="/survey?class=Leadership Retreats"
          />
        </ProgramContainer>

        <InfoBlocks>
          <InfoBlock>
            <InfoTitle>5+ YEARS</InfoTitle>
            <InfoText>of Coaching Experience</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoTitle>99%</InfoTitle>
            <InfoText>Athlete Skill Improvement Rate</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoTitle>250+</InfoTitle>
            <InfoText>Successful Training Sessions</InfoText>
          </InfoBlock>
          <InfoBlock>
            <InfoTitle>100%</InfoTitle>
            <InfoText>Supportive Coaches</InfoText>
          </InfoBlock>
        </InfoBlocks>

        <ApproachSection>
          <ApproachTitle>OUR APPROACH</ApproachTitle>
          <ApproachText>
            Cater to the individual needs of the athlete, in a supportive and inclusive way!
          </ApproachText>
        </ApproachSection>
        <Reviews />
      </Container>
    </Containerr>
  );
};

export default OurProgram;

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from '../../../public/All_Girls_Training_Academy.webp';
import p2 from '../../../public/Basketball_Group_Training_Academy .webp';
import p3 from '../../../public/Leadership_Camps.webp';
import basketball_badge from '../../../public/basketball_badge.webp';
import leadership_badge from '../../../public/leadership_badge.webp';
import allGirls_badge from '../../../public/allGrils_badge.webp';
import redcheck from '../../../public/redcheck.webp';
import registernow from './registernow.png';
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
  }
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 34rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    padding: 10px; 
  }
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  width: 20rem;
  // height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: visible;
  // margin-top: 3rem;

  @media (max-width: 1024px) {
    width: 80%; 
    height: auto;
  }

  @media (max-width: 640px) {
    width: 90%;
    height: auto;
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

const CardBody = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
  height: 100%;

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const CardFooter = styled.div`
  background-color: #f5f5f5;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #333;
  margin: 10px 0;
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

const PerMonth = styled.div`
  font-size: 1rem;
  color: #333;
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

const Badge = styled.img`
  width: 13rem;
  height: auto;
  position: relative;
  buttom: 100px
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: -5rem; /* Adjust as needed to position the badge */
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
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
`;

const ApproachText = styled.p`
  font-size: 1rem;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
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
          <Card style={{ backgroundImage: `url(${p1})` }}>
            <CardHeader>
              <BadgeContainer>
                <Badge src={basketball_badge} alt="Badge" />
              </BadgeContainer>
              {PROGRAMS.PROGRAM_1}
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price><span>$</span>100</Price>
              <PerMonth>per month</PerMonth>
              <Divider />
              <SectionTitle>Details</SectionTitle>
              <Details>
                <DetailItem>Level: Beginner to Intermediate</DetailItem>
                <DetailItem>4-5 Sessions per month</DetailItem>
                <DetailItem>75 minute sessions</DetailItem>
              </Details>
              <Divider />
              <SectionTitle>Outcome</SectionTitle>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Comprehensive basketball skill training</FeatureItem>
                  <FeatureItem>Teamwork and sportsmanship focus</FeatureItem>
                </FeatureList>
              </Outcome>
              <Divider />
              <SectionTitle>Notes</SectionTitle>
              <Notes>
                <FeatureList>
                  <FeatureItem>Parent receive 1-4 monthly coupons to local stores</FeatureItem>
                  <FeatureItem>24/7 live whatsapp communication for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
              <Link to="/survey?class=Basketball Group Academy Training">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardBody>
          </Card>

          <Card style={{ backgroundImage: `url(${p1})` }}>
            <CardHeader>
              <BadgeContainer>
                <Badge src={allGirls_badge} alt="Badge" />
              </BadgeContainer>
              {PROGRAMS.PROGRAM_2}
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price><span>$</span>100</Price>
              <PerMonth>per month</PerMonth>
              <Divider />
              <SectionTitle>Details</SectionTitle>
              <Details>
                <DetailItem>Level: Beginner to Intermediate</DetailItem>
                <DetailItem>4-5  seasons per month</DetailItem>
                <DetailItem>75 minute sessions</DetailItem>
              </Details>
              <Divider />
              <SectionTitle>Outcome</SectionTitle>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Empowering girls through sports</FeatureItem>
                  <FeatureItem>Improved skills, fitness, and self-esteem</FeatureItem>
                </FeatureList>
              </Outcome>
              <Divider />
              <SectionTitle>Notes</SectionTitle>
              <Notes>
                <FeatureList>
                  <FeatureItem>Parent receive 1-4 monthly coupons to local stores</FeatureItem>
                  <FeatureItem>24/7 live whatsapp communication for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
              <Link to="/survey?class=All-Girls Training Academy">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardBody>
          </Card>

          <Card style={{ backgroundImage: `url(${p3})` }}>
            <CardHeader>
              <BadgeContainer>
                <Badge src={leadership_badge} alt="Badge" />
              </BadgeContainer>
              {PROGRAMS.PROGRAM_3}
            </CardHeader>
            <CardBody>
              <OldPrice>$400 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price><span>$</span>325</Price>
              <PerMonth>per week</PerMonth>
              <Divider />
              <SectionTitle>Details</SectionTitle>
              <Details>
                <DetailItem>Level: All skill levels welcome</DetailItem>
                <DetailItem>Multi-sports; Basketball, Soccer, & Volleyball</DetailItem>
                <DetailItem>9am - 4pm (With extended hours options)</DetailItem>
              </Details>
              <Divider />
              <SectionTitle>Outcome</SectionTitle>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Focus on personal growth and confidence</FeatureItem>
                  <FeatureItem>Indoor and outdoor learning conditions</FeatureItem>
                </FeatureList>
              </Outcome>
              <Divider />
              <SectionTitle>Notes</SectionTitle>
              <Notes>
                <FeatureList>
                  <FeatureItem>Monthly local store discounts on gear</FeatureItem>
                  <FeatureItem>24/7 question line for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
              <Link to="/survey?class=Leadership Retreats">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardBody>
          </Card>
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

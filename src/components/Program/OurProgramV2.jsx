import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from '../../../public/All_Girls_Training_Academy.webp';
import p2 from '../../../public/Basketball_Group_Training_Academy .webp';
import p3 from '../../../public/Leadership_Camps.webp';
import registernow from './registernow.png';
import Reviews from './Reviews';


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
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start */
  justify-content: center;
  padding: 20px;
  padding-top: 70px;
  color: #95071A;
  font-weight: 800;
  width: 100%; /* Ensure it takes the full width */
  margin-left: 20px; /* Add margin to position it correctly */
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
  color: #333;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  width: 25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  background-size: cover; /* Ensures the image covers the entire card */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
`;

const CardHeader = styled.div`
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  background-color: rgba(255, 255, 255, 0.8); /* Added to ensure readability against the background image */
`;

const CardBody = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  position: relative;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin: 10px 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #333;
  margin: 20px 0;
`;

const CardFooter = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Price = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: #95071A;
  margin: 10px 0;
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */

  span {
    font-size: 1.5rem; /* Make the dollar sign smaller */
  }
`;


const OldPrice = styled.div`
  font-size: 1rem;
  color: #666;
  text-decoration: line-through;
`;

const SpecialPrice = styled.div`
  font-size: 1.2rem;
  color: #95071A;
  font-weight: bold;
`;

const PerMonth = styled.div`
  font-size: 1rem;
  color: #333;
`;

const Details = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const DetailItem = styled.div`
  margin-bottom: 5px;
  font-size: 1rem;
  color: #333;
`;

const Outcome = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const Notes = styled.div`
  text-align: left;
  margin-bottom: 10px;
`;

const RegisterNowImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-bottom: 10px;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;

  &::before {
    content: '✔️';
    margin-right: 10px;
    color: #4caf50;
  }
`;

const Badge = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 10px;
`;

const InfoBlocks = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 20px;
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
  font-size: 1.5rem;
  color: #95071A;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InfoText = styled.div`
  font-size: 1rem;
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
          <Card style={{ backgroundImage: `url(${p2})` }}>
            <CardHeader>
              {/* <Badge src={p2} alt="Basketball Group Training Academy" /> */}
              Basketball Group Training <br/>Academy
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price><span>$</span>100</Price>
              <PerMonth>per month</PerMonth>
              <Divider />
              <SectionTitle>Details</SectionTitle>
              <Details>
                <DetailItem>Level: Beginner</DetailItem>
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
            </CardBody>
            <CardFooter>
              <Link to="/survey?class=Basketball Group Academy Training">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardFooter>
          </Card>

          <Card style={{ backgroundImage: `url(${p1})` }}>
            <CardHeader>
              {/* <Badge src={p1} alt="All Girls Training Academy" /> */}
              All Girls Training <br/>Academy
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price><span>$</span>100</Price>
              <PerMonth>per month</PerMonth>
              <Divider />
              <SectionTitle>Details</SectionTitle>
              <Details>
                <DetailItem>Level: Beginner</DetailItem>
                <DetailItem>8 sessions per season</DetailItem>
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
            </CardBody>
            <CardFooter>
              <Link to="/survey?class=All-Girls Training Academy">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardFooter>
          </Card>

          <Card style={{ backgroundImage: `url(${p3})` }}>
            <CardHeader>
              {/* <Badge src={p3} alt="Leadership Camps" /> */}
              Leadership <br/>Camps
            </CardHeader>
            <CardBody>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <OldPrice>$400 per month</OldPrice>
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
            </CardBody>
            <CardFooter>
              <Link to="/survey?class=Leadership Retreats">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardFooter>
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

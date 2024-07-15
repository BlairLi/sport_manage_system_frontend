import styled from 'styled-components';
import { Link } from 'react-router-dom';
import p1 from '../../../public/All_Girls_Training_Academy.webp';
import p2 from '../../../public/Basketball_Group_Training_Academy .webp';
import p3 from '../../../public/Leadership_Camps.webp';
import registernow from './registernow.png';

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
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 70px;
  color: #95071A;
  font-weight: 800;
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
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  background-size: cover; /* Ensures the image covers the entire card */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  // height: 500px; /* Adjust height as needed to fit your design */
`;


const CardHeader = styled.div`
  background-color: rgba(149, 7, 26, 0.8);
  color: white;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CardBody = styled.div`
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`;

const CardFooter = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;

const Price = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #95071A;
  margin: 10px 0;
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
          <Title>OUR PROGRAMS</Title>
        </TopSection>
        <ProgramContainer>
          <Card style={{ backgroundImage: `url(${p1})` }}>
            <CardHeader>
              {/* <Badge src={p1} alt="Basketball Group Training Academy" /> */}
              Basketball Group Training Academy
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price>$100</Price>
              <PerMonth>per month</PerMonth>
              <Details>
                <DetailItem>Level: Beginner</DetailItem>
                <DetailItem>4-5 Sessions per month</DetailItem>
                <DetailItem>75 minute sessions</DetailItem>
              </Details>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Comprehensive basketball skill training</FeatureItem>
                  <FeatureItem>Teamwork and sportsmanship focus</FeatureItem>
                </FeatureList>
              </Outcome>
              <Notes>
                <FeatureList>
                  <FeatureItem>Parent receive 1-4 monthly coupons to local stores</FeatureItem>
                  <FeatureItem>24/7 live whatsapp communication for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
            </CardBody>
            <CardFooter>
              <Link to="/BTraining">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardFooter>
          </Card>

          <Card style={{ backgroundImage: `url(${p2})` }}>
            <CardHeader>
              {/* <Badge src={p2} alt="All Girls Training Academy" /> */}
              All Girls Training Academy
            </CardHeader>
            <CardBody>
              <OldPrice>$150 per month</OldPrice>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price>$100</Price>
              <PerMonth>per month</PerMonth>
              <Details>
                <DetailItem>Level: Beginner</DetailItem>
                <DetailItem>8 sessions per season</DetailItem>
                <DetailItem>75 minute sessions</DetailItem>
              </Details>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Empowering girls through sports</FeatureItem>
                  <FeatureItem>Improved skills, fitness, and self-esteem</FeatureItem>
                </FeatureList>
              </Outcome>
              <Notes>
                <FeatureList>
                  <FeatureItem>Parent receive 1-4 monthly coupons to local stores</FeatureItem>
                  <FeatureItem>24/7 live whatsapp communication for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
            </CardBody>
            <CardFooter>
              <Link to="/AllGirlsTrainingAcademy">
                <RegisterNowImage src={registernow} alt="Register Now" />
              </Link>
            </CardFooter>
          </Card>

          <Card style={{ backgroundImage: `url(${p3})` }}>
            <CardHeader>
              {/* <Badge src={p3} alt="Leadership Camps" /> */}
              Leadership Camps
            </CardHeader>
            <CardBody>
              <SpecialPrice>JULY SPECIAL</SpecialPrice>
              <Price>$325</Price>
              <PerMonth>per week</PerMonth>
              <Details>
                <DetailItem>Level: All skill levels welcome</DetailItem>
                <DetailItem>Multi-sports; Basketball, Soccer, & Volleyball</DetailItem>
                <DetailItem>9am - 4pm (With extended hours options)</DetailItem>
              </Details>
              <Outcome>
                <FeatureList>
                  <FeatureItem>Focus on personal growth and confidence</FeatureItem>
                  <FeatureItem>Indoor and outdoor learning conditions</FeatureItem>
                </FeatureList>
              </Outcome>
              <Notes>
                <FeatureList>
                  <FeatureItem>Monthly local store discounts on gear</FeatureItem>
                  <FeatureItem>24/7 question line for parents</FeatureItem>
                  <FeatureItem>Personalized progress report cards</FeatureItem>
                </FeatureList>
              </Notes>
            </CardBody>
            <CardFooter>
              <Link to="/LeadershipCamps">
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
      </Container>
    </Containerr>
  );
};

export default OurProgram;

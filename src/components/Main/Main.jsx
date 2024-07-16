import styled from 'styled-components';
import p13 from './headerlogo.png';
import registernow from './goldenregister.png';
import main1 from './main1.png';
import main2 from './main2.jpeg';
import main3 from './main3.png';
import mainTop from './mainTop.png';
import phonesize from './mainpagephonesize.png';
import aboutbgi from './aboutbgi.png'; 
import logoImg from './headerlogo2.png'; 
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { useEffect } from 'react';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const RegisterImage = styled.img`
  width: 200px;  
  height: auto; 
  @media (max-width: 1024px) {
    width: 55vw;  
    max-width: 100%; 
    
  }
`;

const PhoneImageContainer = styled.div`
  display: none;  

  @media (max-width: 1024px) { 
    display: block;
    position: relative;  
    width: 100%;
    max-width: 860px;
    opacity: 0.8;
  }
`;
const PhoneImage = styled.img`
  width: 100%;  
  max-width: 860px;  
  height: auto; 
  display: none;  

  @media (max-width: 1024px) { 
    display: block;
    opacity: 0.8;
  }
`;
const TopSection = styled.div`
  flex: 6;
  background-color: #95071A;
  background-image: url(${mainTop});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 20px;
  padding-top: 560px;

  @media (max-width: 1024px) {
    display: none;  
  }
`;


const BottomSection = styled.div`
  flex: 4;
  background-color: white;
  display: flex;
  padding: 40px;

  @media (max-width: 1024px) {
    display: none;  
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 3;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 80px;
  width: 400px;
`;

const Image1 = styled.img`
  max-height: 350px;
  max-width: 350px;
`;

{/*   
const TextContainer = styled.div`
  text-align: left;
  color: white;
`;

const Title = styled.div`
  font-size: 2vw;
`;

const Subtitle = styled.div`
  font-size: 6vw;
  letter-spacing: 0.49em;
  text-align: center;
  white-space: nowrap;
`;

*/}

const ParagraphContainer = styled.div`
  max-width: 100%;
  text-align: left;
`;

const ParagraphTitle = styled.h2`
  font-size: 31px;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
`;

const ParagraphText = styled.p`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;

`;

const LinkContainer = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-top: 78px;
`;

const LinkContainer2 = styled.div`
  display: none; 

  @media (max-width: 1024px) {
    display: flex;
    position: absolute;
    bottom: 2vw;  
    width: 100%;
    justify-content: center; 
    background-color: transparent;  
  }
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1cm;
  gap: 10px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: 5vw;
  }
`;

const GalleryImage = styled.img`
  height: 305px;
  width: 475px;
  margin-bottom: 10px;
  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;

const ImageDescription = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  padding: 20px 0px;
  @media (max-width: 640px) {
    font-size: 3vw;
    opacity: 0.9;
    color: white;
    padding: 0px 0px;

  }
`;

const ReadMoreLink = styled.div`
  text-decoration: underline;
  cursor: pointer;
  color: black;
  text-align: left;
  width: 250px;
  font-size: 1.2rem;
  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    font-size: 3vw;
    color: white;
    opacity: 0.9;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-left: 40px;
  @media (max-width: 640px) {
    padding-left: 2vw;
    
  }
`;

const NewTitle = styled.h2`
  font-size: 31px;
  text-align: left;
  margin: 0;
  padding-right: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  @media (max-width: 640px) {
    font-size: 4vw;
    color: white;
    opacity: 0.9;
  }
`;

const StyledHorizontalLine = styled.hr`
  border: none;
  height: 4px;
  background-color: black;
  flex-grow: 1;
  margin: 0 20px;  
  color: black;
  opacity: 1;
  @media (max-width: 640px) {
    height: 2px;
    margin: 0 ;   
    color: white;
    background-color: white;
    opacity: 0.9;
  }
`;


const StyledHorizontalLine2 = styled.hr`
  border: none;
  height: 4px;
  background-color: black;
  width: 100%;
  margin: 20px 0;
  color: black;
  opacity: 1;
  @media (max-width: 640px) {
    height: 2px;
    margin: 0vw ;
    display: none;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-size: 32px;
  gap: 20px;
  @media (max-width: 640px) {
    display: none;
  }
`;

const FormSection = styled.section`
  padding: 40px;
  background-color: #fff;  // White background
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  p{
      font-style: italic;
    }
    tag{
    color: #ff0022;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  align-items: center; 
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000; 
  border-radius: 20px; 
  margin-bottom: 20px;

`;

const InputLabel = styled.div`
  flex: 1;
  padding: 5px 0px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;

`;




const Label = styled.label`
  font-size: 40px;
  font-weight: bold;
  display: block; 
  color: #95071A;
  font-family: 'League Spartan', sans-serif; 
`;



const FormHeader = styled.div`
  text-align: center;
`;

const TrialOffer = styled.h2`
  font-size: 38px;
  font-weight: bold;
  margin: 0; 
  line-height: 0.6; 
  font-family: 'Poppins', sans-serif;
`;

const BookYour = styled.h3`
  font-size: 75px; 
  font-weight: bold;
  margin: 0; 
  color: #95071A; 
  font-family: 'League Spartan', sans-serif; 
`;

const FreeSessionNow = styled.h3`
  font-size: 99px;
  font-weight: bold;
  color: #95071A;
  line-height: 0.9; 
  margin-bottom: 0; 
  font-family: 'League Spartan', sans-serif;
`;

const SessionValidity = styled.p`
  font-size: 20px; 
  font-family: 'Poppins', sans-serif;
  color: black;
`;


const Button = styled.button`
  font-size: 18px;
  color: black;
  border: none;
  cursor: pointer;
  background: none;
  text-decoration: underline;
  align-self: flex-end; 
  padding: 0;
  display: inline;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%; 
`;

const FormLine = styled.hr`
  border: none;
  height: 1px;
  background-color: black;
  flex-grow: 1;
  color: black;
  opacity: 1;
  @media (max-width: 640px) {
    margin: 0 ;   
    opacity: 0.9;
  }
`;

// mystery page

const MissionSection = styled.div`
  display: flex;
  justify-content: flex-end;
  background-image: url(${aboutbgi});
  background-size: cover;
  background-position: center;
  height: 110vh;
  padding-right: 5%;  
  padding-top: 5%;  
`;

const MissionContent = styled.div`
  width: 40%;  
  text-align: center;
`;

const MissionLogo = styled.img`
  width: 25rem;  
  height: auto;
  margin-bottom: 20px;
`;

const MissionTitle = styled.h2`
  font-size: 3rem;  
  margin-bottom: 10px;
  font-style: italic;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const MissionText = styled.p`
  font-size: 1.5rem;
  padding: 0px 5rem;
  font-family: 'Poppins', sans-serif;
`;

// mystery page

const Main = () => {
  useEffect(() => {
    // Append Helpwise script to the document
    const script1 = document.createElement('script');
    script1.src = "https://cdn.helpwise.io/assets/js/livechat.js";
    script1.async = true;
    script1.onload = () => {
      // Initialize the Helpwise settings after the script is loaded
      window.helpwiseSettings = {
        widget_id: '6695e26e4ec82',
        align: 'right',
      };
    };
    document.body.appendChild(script1);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script1);
    };
  }, []);
    
  return (
    <Container>
      <TopSection>{/*   <TextContainer>
          <Title>They’re Ready to Compete.</Title>
          <Subtitle>JUNIOR ATHLETICS</Subtitle>
        </TextContainer> */}
      
      </TopSection>
      <BottomSection>
        <LeftColumn>
          <ParagraphContainer>
            <ParagraphTitle>Welcome to Junior Athletics!</ParagraphTitle>
            <ParagraphText>
            At Junior Athletics, we give your child the opportunity to make achievements outside of the classroom. Our mission is to create a fun, safe, and supportive environment where young athletes can thrive; building confidence, and forming lasting friendships. We emphasize teamwork, sportsmanship, and personal growth. We offer Basketball Training, House Leagues, and Camps, within the GTA! Join us and watch your child shine!            </ParagraphText>
          </ParagraphContainer>
          <LinkContainer>
        <Link to={`/survey`}><Image src={registernow} alt="registernow" /></Link>
      </LinkContainer>
        </LeftColumn>
        <RightColumn>
          <Image1 src={p13} alt="p13" />
        </RightColumn>
      </BottomSection>
      <PhoneImageContainer>
        <PhoneImage src={phonesize} alt="Responsive view" />
        <LinkContainer2>
               <Link to={`/survey`}><RegisterImage src={registernow} alt="Register Now" /></Link>
        </LinkContainer2>
      </PhoneImageContainer>


      <FormSection>
        <FormHeader>
          <TrialOffer>OR ENJOY A FREE TRIAL</TrialOffer>
        <FormLine />
          <BookYour>BOOK YOUR</BookYour>
          <FreeSessionNow>FREE SESSION NOW</FreeSessionNow>
          <SessionValidity>Free session is only valid once, per child</SessionValidity>
        </FormHeader>
        <Form>
          <p>Please complete each indicated question<tag> * </tag></p>
          <Label>Parent Information</Label>
          <InputGroup>
            <InputLabel>First Name</InputLabel>
            <InputLabel>Last Name</InputLabel>
            <InputLabel>Phone Number</InputLabel>
            <InputLabel>Email Address</InputLabel>
          </InputGroup>
          <InputGroup>
            <Input type="text" name="First Name" required/>
            <Input type="text" name="Last Name" required/>
            <Input type="tel" name="Phone Number" required/>
            <Input type="email" name="Email Address" required/>
          </InputGroup>

          <Label>STEP 2 - Child Details</Label>
          <InputGroup>
            <InputLabel>Full Name</InputLabel>
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
            <InputLabel>Full Name</InputLabel>
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
          </InputGroup>
          <InputGroup>
            <Input type="text" name="First Name" required />
            <Input type="date" name="Last Name" required/>
            <Input type="text" name="Phone Number" />
            <Input type="date" name="Email Address" />
          </InputGroup>

  <ButtonContainer>
    <Button type="submit">Submit</Button>
  </ButtonContainer>
</Form>


      </FormSection>
      


      <TitleContainer>
        <NewTitle>Is Your Child New to Sports?</NewTitle>
        <StyledHorizontalLine />
      </TitleContainer>
        <ImageGallery>

        
          <GalleryItem>
            <GalleryImage src={main1} alt="Youth Basketball" />
            <ImageDescription>Bounce into Success: Youth Basketball Development Programs</ImageDescription>
            <Link to="/Content1"><ReadMoreLink>Read more</ReadMoreLink></Link>
          </GalleryItem>
          <GalleryItem>
            <GalleryImage src={main2} alt="Future Rep Players" />
            <ImageDescription>Youth Basketball Development: Preparing Future Rep Players</ImageDescription>
            <Link to="/Content2"><ReadMoreLink>Read more</ReadMoreLink></Link>
          </GalleryItem>
          <GalleryItem>
            <GalleryImage src={main3} alt="Coming Soon" />
            <ImageDescription>Empowering Girls: The Importance of Female Athletics from a Young Age</ImageDescription>
            <Link to="/Content3"><ReadMoreLink>Read more</ReadMoreLink></Link>
          </GalleryItem>
        </ImageGallery>
        <SocialMediaIcons>

        <BsFacebook /><BsTwitter /><AiOutlineInstagram /><AiFillLinkedin />
        </SocialMediaIcons>

        <StyledHorizontalLine2 />
{/* mystery page */}

        <MissionSection>
        <MissionContent>
          <MissionLogo src={logoImg} alt="Logo" /> 
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>To empower young athletes with additional tools to assist them through life, in their personal and academic journeys.</MissionText>
        </MissionContent>
      </MissionSection>

{/* mystery page */}

    </Container>
  );
};

export default Main;

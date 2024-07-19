import styled from 'styled-components';
import p13 from './headerlogo.png';
import registernow from './goldenregister.png';
import registernow2 from './goldenregister2.png';
import main1 from './main1.png';
import main2 from './main4.png';
import main3 from './main3.png';
import mainTop from './mainTop.png';
import phonesize from './mainpagephonesize2.png';

import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
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
  opacity: 1;
  @media (max-width: 1024px) {
    width: 200px; 
  height: auto;
  opacity: 1;
  padding-bottom: 2vw;
  }
`;

const PhoneImageContainer = styled.div`
  display: none;
  position: relative;
  width: 100%;
  max-width: 860px;

  @media (max-width: 1024px) { 
    position: relative;
  width: 100%;
  max-width: 860px;
  display: block; 

    
  }
`;
const PhoneImage = styled.img`
  width: 100%;
  max-width: 860px;
  height: auto;
  visibility: hidden;  

  @media (max-width: 1024px) { 
    width: 100%;
  max-width: 860px;
  height: auto;
  visibility:visible;  
  opacity: 0.9; 
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
    position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent; // Ensure it's transparent
  z-index: 2; 
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
    /* color: white; */
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
    /* color: white; */
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
    /* color: white; */
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
    /* color: white; */
    /* background-color: white; */
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
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 640px) {
    padding: 10px;
  }
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
  flex-direction: row; // Default layout for larger screens
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column; // Stack vertically on mobile
    align-items: flex-start; // Align to the start of the container
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 20px;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 8px;
    width: 100%; // Ensure it takes the full width on smaller screens
  }
`;

const InputLabel = styled.div`
  flex: 1; // Take full width on larger screens to distribute space evenly
  padding: 5px 0px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 640px) {
    font-size: 16px;
    width: 100%; // Ensure it takes the full width on smaller screens
  }
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
  margin: 0;
  line-height: 1.1;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
  }
`;

const BookYour = styled.h3`
  font-size: 30px;
  color: #95071A;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

const FreeSessionNow = styled.h3`
  font-size: 28px;
  color: #95071A;
  margin-bottom: 0;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const SessionValidity = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  font-size: 18px;
  color: black;
  border: none;
  cursor: pointer;
  background: none;
  text-decoration: underline;

  @media (max-width: 640px) {
    font-size: 16px;
  }
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
               <Link to={`/survey`}><RegisterImage src={registernow2} alt="Register Now" /></Link>
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
            <Input type="text" name="First Name" required/>
            <InputLabel>Last Name</InputLabel>
            <Input type="text" name="Last Name" required/>
            <InputLabel>Phone Number</InputLabel>
            <Input type="tel" name="Phone Number" required/>
            <InputLabel>Email Address</InputLabel>
            <Input type="email" name="Email Address" required/>
            </InputGroup>
          {/* <InputGroup>
            <Input type="text" name="First Name" required/>
            <Input type="text" name="Last Name" required/>
            <Input type="tel" name="Phone Number" required/>
            <Input type="email" name="Email Address" required/>
          </InputGroup> */}

          <Label>STEP 2 - Child Details</Label>
          <InputGroup>
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="First Name" required />
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
            <Input type="date" name="Last Name" required/>
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="Phone Number" />
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
            <Input type="date" name="Email Address" />
            </InputGroup>
          {/* <InputGroup>
            <Input type="text" name="First Name" required />
            <Input type="date" name="Last Name" required/>
            <Input type="text" name="Phone Number" />
            <Input type="date" name="Email Address" />
          </InputGroup> */}

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
          <BsFacebook />
          <a href="https://www.instagram.com/juniorathleticscanada" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
          <AiFillLinkedin />
        </SocialMediaIcons>

        <StyledHorizontalLine2 />
    </Container>
  );
};

export default Main;

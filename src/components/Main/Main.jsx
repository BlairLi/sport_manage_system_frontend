import styled from 'styled-components';
import p13 from './headerlogo.png';
import registernow from './goldenregister.png';
import main1 from './main1.png';
import main2 from './main2.png';
import main3 from './main3.png';
import mainTop from './mainTop.png';

import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useEffect } from 'react';
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
`;

const RegisterImage = styled.img`
  width: 40%;
  height: auto;
  margin-top: 20px;

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 640px) {
    width: 250px;
  }
`;

const PhoneImageContainer = styled.div`
  display: none;
  width: 100%;
  max-width: 860px;
  overflow: hidden;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const PhoneImage = styled.img`
  width: 100%;
  max-width: 860px;
  height: auto;
  visibility: hidden;

  @media (max-width: 1024px) {
    visibility: visible;
    opacity: 0.9;
  }
`;

const TopSection = styled.div`
  flex: 6;
  background: url(${mainTop}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 400px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding-top: 200px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    padding-top: 60px;
    background-size: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.5); // Darken overlay for better text visibility
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

const TopTitle = styled.h1`
  font-size: 4vw;
  color: white;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  text-align: center;
  padding: 20px;

  @media (max-width: 1024px) {
    font-size: 6vw;
  }

  @media (max-width: 640px) {
    font-size: 8vw;
  }
`;

const BottomSection = styled.div`
  flex: 4;
  background-color: white;
  display: flex;
  padding: 40px;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 1024px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    padding: 10px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  padding-right: 40px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding-right: 0;
    align-items: center;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 20px;

  @media (max-width: 1024px) {
    padding-top: 20px;
    align-items: center;
  }
`;

const Image1 = styled.img`
  max-height: 300px;
  max-width: 300px;

  @media (max-width: 1024px) {
    max-height: 200px;
    max-width: 200px;
  }

  @media (max-width: 640px) {
    max-height: 150px;
    max-width: 150px;
  }
`;

const ParagraphContainer = styled.div`
  max-width: 100%;
  text-align: left;
  overflow: hidden;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ParagraphTitle = styled.h2`
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const ParagraphText = styled.p`
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 640px) {
    font-size: 0.9rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-top: 78px;
  overflow: hidden;

  @media (max-width: 640px) {
    display: flex;
    justify-content: flex-start;
    background-color: white;
    margin: 0;
    overflow: hidden;
  }
`;

const LinkContainer2 = styled.div`
  display: none;

  @media (max-width: 1024px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: transparent;
    z-index: 2;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1cm;
  gap: 1.5rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: 5vw;
  }
`;

const GalleryImage = styled.img`
  height: 305px;
  width: 475px;
  margin-bottom: 10px;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 100%;
    height: auto;
  }
`;

const ImageDescription = styled.div`
  text-align: left;
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  padding: 20px 0;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 3vw;
    opacity: 0.9;
    padding: 0;
  }
`;

const ReadMoreLink = styled.div`
  text-decoration: underline;
  cursor: pointer;
  color: black;
  text-align: left;
  width: 250px;
  font-size: 1.2rem;
  overflow: hidden;

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
    font-size: 3vw;
    opacity: 0.9;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding-left: 40px;
  overflow: hidden;

  @media (max-width: 640px) {
    padding-left: 2vw;
  }
`;

const NewTitle = styled.h2`
  font-size: 1.5vw;
  text-align: left;
  margin: 0;
  padding-right: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 4vw;
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
  overflow: hidden;

  @media (max-width: 640px) {
    height: 2px;
    margin: 0;
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
    margin: 0;
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
  overflow: hidden;

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

  p {
    font-style: italic;
  }

  tag {
    color: #ff0022;
  }
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  overflow: hidden;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 20px;
  margin-bottom: 10px;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 8px;
    width: 100%;
  }
`;

const InputLabel = styled.div`
  flex: 1;
  padding: 5px 0;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;

  @media (max-width: 640px) {
    font-size: 16px;
    width: 100%;
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
  overflow: hidden;

  @media (max-width: 640px) {
    margin: 0;
    opacity: 0.9;
  }
`;

const url = import.meta.env.VITE_MONGODB_URL;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm("Are you sure you want to submit the form?");

    if (!isConfirmed) {
      return;
    }

    const newRegistration = {
      bookingID: `freetrial_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
      parentName: e.target.parentFirstName.value + " " + e.target.parentLastName.value,
      email: e.target.parentEmail.value,
      phone: e.target.parentPhone.value,
      child1Name: e.target.child1Name.value,
      child1Birth: e.target.child1DOB.value,
      child1Program: 'Free Trial',
      child1ProgramPlace: 'Free Trial',
      childDayOfClassTime: 'Free Trial',
      child1Amount: 0,
      child1Start: '2029-12-31',
      child1End: "2029-12-31", // TODO: Update end date
      child2Name: e.target.child2Name.value,
      child2DOB: e.target.child2DOB.value,
      child1Start2: '2029-12-31',
      child1End2: "2029-12-31", // TODO: Update end date
      makeupClasses: "None",
      notes: 'Free Trial',
    };
    console.log("newRegistration", newRegistration);

    try {
      const response = await axios.post(`${url}/api/createRegistration`, newRegistration);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle 400 error (Capacity reached)
        console.error('Error creating Registration:', error.response.data.message);
        alert(`Registration Error: ${error.response.data.message}`);
      } else {
        // Handle other errors
        console.error('Error creating Registration:', error.message);
        alert('An error occurred while creating the registration. Please try again.');
      }
      // Stop the process if there is an error
      return;
    }

    alert('Registration submitted successfully! We will contact you shortly to confirm the details.');
  }

  return (
    <Container>
      <TopSection>
        <TopTitle></TopTitle>
      </TopSection>
      <BottomSection>
        <LeftColumn>
          <ParagraphContainer>
            <ParagraphTitle>Welcome to Junior Athletics!</ParagraphTitle>
            <ParagraphText>
              At Junior Athletics, we give your child the opportunity to make achievements outside of the classroom. Our mission is to create a fun, safe, and supportive environment where young athletes can thrive; building confidence, and forming lasting friendships. We emphasize teamwork, sportsmanship, and personal growth. We offer Basketball Training, House Leagues, and After School Programs, within the GTA!
            </ParagraphText>
          </ParagraphContainer>
          <LinkContainer>
            <Link to={`/survey`}>
              <RegisterImage src={registernow} alt="Register Now" />
            </Link>
          </LinkContainer>
        </LeftColumn>
        <RightColumn>
          <Image1 src={p13} alt="p13" />
        </RightColumn>
      </BottomSection>
      {/* <FormSection>
        <FormHeader>
          <TrialOffer>OR ENJOY A FREE TRIAL</TrialOffer>
          <FormLine />
          <BookYour>BOOK YOUR</BookYour>
          <FreeSessionNow>FREE SESSION NOW</FreeSessionNow>
          <SessionValidity>Free session is only valid once, per child</SessionValidity>
        </FormHeader>
        <Form onSubmit={handleSubmit}>
          <p>Please complete each indicated question<tag>*</tag></p>
          <Label>Parent Information</Label>
          <InputGroup>
            <InputLabel>First Name</InputLabel>
            <Input type="text" name="parentFirstName" required />
            <InputLabel>Last Name</InputLabel>
            <Input type="text" name="parentLastName" required />
            <InputLabel>Phone Number</InputLabel>
            <Input type="tel" name="parentPhone" required />
            <InputLabel>Email Address</InputLabel>
            <Input type="email" name="parentEmail" required />
          </InputGroup>
          <Label>STEP 2 - Child Details</Label>
          <InputGroup>
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="child1Name" required />
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
            <Input type="date" name="child1DOB" required />
            <InputLabel>Full Name</InputLabel>
            <Input type="text" name="child2Name" />
            <InputLabel>Date of Birth (YYYY/MM/DD)</InputLabel>
            <Input type="date" name="child2DOB" />
          </InputGroup>
          <ButtonContainer>
            <Button type="submit">Submit</Button>
          </ButtonContainer>
        </Form>
      </FormSection> */}
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
        <a href="https://www.facebook.com/profile.php?id=61563322405603" target="_blank" rel="noopener noreferrer">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/juniorathletics.ca/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </SocialMediaIcons>
      <StyledHorizontalLine2 />
    </Container>
  );
};

export default Main;

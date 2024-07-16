import styled from 'styled-components';
import p13 from './headerlogo.png';
import registernow from './registernow.png';
import main1 from './main1.png';
import main2 from './main2.jpeg';
import main3 from './main3.png';
import mainTop from './mainTop.png';
import phonesize from './mainpagephonesize.png';
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
            <ImageDescription>Coming Soon</ImageDescription>
            <Link><ReadMoreLink>Read more</ReadMoreLink></Link>
          </GalleryItem>
        </ImageGallery>
        <SocialMediaIcons>

        <BsFacebook /><BsTwitter /><AiOutlineInstagram /><AiFillLinkedin />
        </SocialMediaIcons>

        <StyledHorizontalLine2 />

    </Container>
  );
};

export default Main;

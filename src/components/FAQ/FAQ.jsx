import styled from "styled-components";
import { Link } from "react-router-dom";
import main1 from '../Main/main1.png';
import main2 from '../Main/main2.jpeg';
import main3 from '../Main/main3.png';
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";

const Faq = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const toggleSection = index => {
    setVisibleSection(visibleSection === index ? null : index);
  };

  return (
    <BGC>
      <Container id="FAQ">
        <Content>
          <Texts>
            <h1>Frequently Asked Questions</h1>
            <br></br>
            {questions.map((item, index) => (
              <QuestionBlock key={index} onClick={() => toggleSection(index)}>
                <h3>{item.question}<span>{visibleSection === index ? ' ▲' : ' ▼'}</span></h3>            
                {visibleSection === index && <p>{item.answer}</p>}
              </QuestionBlock>
            ))}
          </Texts>
        </Content>
      </Container>
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
          <GalleryImage src={main3} alt="Hello" />
          <ImageDescription>Coming Soon</ImageDescription>
          <Link to="/Content2"><ReadMoreLink>Read more</ReadMoreLink></Link>
        </GalleryItem>
      </ImageGallery>
      <SocialMediaIcons>
        <BsFacebook /><BsTwitter /><AiOutlineInstagram /><AiFillLinkedin />
      </SocialMediaIcons>
      <StyledHorizontalLine2 />
    </BGC>
  );
};

export default Faq;

// Styled Components
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
    font-size: 4vw;
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

const BGC = styled.div`
  background-color: rgba(255, 255, 255, 0.756);
  padding-top: 7rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    color: #95071A;
    font-size: 4rem;
    text-transform: capitalize;
    letter-spacing: 2px;
    @media (max-width: 640px) {
      font-size: 2rem;
    }
  }
  @media (max-width: 640px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Texts = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 1rem;
  width: 100%;
  font-size: 1.2rem;

  h1 {
    font-family: 'League Spartan', sans-serif;
    font-weight: bold;
  }
`;

const QuestionBlock = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.5em;  
  margin-bottom: 2em;
  cursor: pointer;

  h3 {
    font-size: 1.3rem;
    margin-top: 0.5em;
    font-weight: bold;
    margin-bottom: 0.5em;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 640px) {
      font-size: 0.7rem;
    }
  }

  p {
    line-height: 1.5;
    padding-left: 20px;
    font-family: 'Poppins', sans-serif;
    @media (max-width: 640px) {
      font-size: 0.6rem;
    }
  }
  @media (max-width: 640px) {
    margin-bottom: 0em;
  padding-bottom: 0em;  
  }
`;

// Questions data
const questions = [
  {
    question: "- I'm excited about enrolling my child, but they've never played sports. How do you accommodate beginners?",
    answer: "Our programs are designed for children of all skill levels, from beginners to advanced players. Coaches tailor their instruction to meet each child's individual needs and abilities."
  },
  {
    question: "- Safety is my top priority. What measures are in place to ensure my child's safety during practices and games?",
    answer: "We prioritize the safety and well-being of all participants. Our safety protocols include certified coaches, CPR, first aid-trained staff, and equipment sanitization practices. We also follow strict safety protocols and guidelines to create a secure environment for all participants."
  },
  {
    question: "- I want to make sure my child gets personalized attention. What is the ratio of coaches to players during practices and games?",
    answer: "We maintain a low coach-to-player ratio to ensure individualized attention and quality instruction. Typically, the ratio is 1 coach to every 8–10 players."
  },
  {
    question: "- Life can be unpredictable. What happens if my child can't attend after we've registered?",
    answer: "We offer a full refund if you cancel your registration at least two weeks before the program start date. For cancellations made within two weeks of the start date, we provide a 50% refund. No refunds are available after the program has started."
  },
  {
    question: "- What happens if the weather doesn't cooperate on practice days?",
    answer: "In the case of bad weather, we will notify parents via email and our website about any cancellations or rescheduled sessions. Safety is our priority, and we are always on the side of caution."
  },
  {
    question: "- I'd love to support my child during practices and games. Are parents allowed to stay and watch?",
    answer: "Yes, parents are welcome to stay and watch their children during practices and games. We encourage family involvement and support!"
  },
  {
    question: "- What should my child bring to practices and games?",
    answer: "Participants are typically required to bring their own sports attire, including appropriate footwear, water bottles, and any specific equipment specified for the program."
  }
];

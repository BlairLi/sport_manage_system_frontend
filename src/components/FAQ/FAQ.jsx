import styled from "styled-components";
// import { Link } from "react-router-dom";
// import main1 from '../Main/main1.png';
// import main2 from '../Main/main2.jpeg';
// import main3 from '../Main/main3.png';
// import { BsFacebook, BsTwitter } from "react-icons/bs";
// import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
import logoImg from './headerlogo2.png'; 
import aboutbgi from './aboutbgi.png'; 
import aboutbgi3 from './aboutbgi3.png'; 


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
      
      <MissionSection>
        <MissionContent>
          <MissionLogo src={logoImg} alt="Logo" /> 
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>To empower young athletes with additional tools to assist them through life, in their personal and academic journeys.</MissionText>
        </MissionContent>
      </MissionSection>
     {/*   <TitleContainer>
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
          <ReadMoreLink>Read more</ReadMoreLink>
        </GalleryItem>
      </ImageGallery>
      <SocialMediaIcons>
        <BsFacebook /><BsTwitter /><AiOutlineInstagram /><AiFillLinkedin />
      </SocialMediaIcons>
      <StyledHorizontalLine2 />   
      */}
    </BGC>
  );
};

export default Faq;

// const TitleContainer = styled.div`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   margin-top: 20px;
//   padding-left: 40px;
//   @media (max-width: 640px) {
//     padding-left: 2vw;
//   }
// `;

// const NewTitle = styled.h2`
//   font-size: 31px;
//   text-align: left;
//   margin: 0;
//   padding-right: 20px;
//   font-family: 'Poppins', sans-serif;
//   font-weight: bold;
//   @media (max-width: 640px) {
//     font-size: 4vw;
//   }
// `;

// const StyledHorizontalLine = styled.hr`
//   border: none;
//   height: 4px;
//   background-color: black;
//   flex-grow: 1;
//   margin: 0 20px;  
//   color: black;
//   opacity: 1;
//   @media (max-width: 640px) {
//     height: 2px;
//     margin: 0 ;   
//   }
// `;

// const ImageGallery = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 1cm;
//   gap: 10px;
//   @media (max-width: 1024px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const GalleryItem = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: start;
//   @media (max-width: 1024px) {
//     width: 100%;
//     padding-bottom: 5vw;
//   }
// `;

// const GalleryImage = styled.img`
//   height: 305px;
//   width: 475px;
//   margin-bottom: 10px;
//   @media (max-width: 640px) {
//     width: 100%;
//     height: auto;
//   }
// `;

// const ImageDescription = styled.div`
//   text-align: left;
//   margin-bottom: 5px;
//   font-size: 20px;
//   font-weight: 800;
//   font-family: 'Poppins', sans-serif;
//   padding: 20px 0px;
//   @media (max-width: 640px) {
//     font-size: 4vw;
//   }
// `;

// const ReadMoreLink = styled.div`
//   text-decoration: underline;
//   cursor: pointer;
//   color: black;
//   text-align: left;
//   width: 250px;
//   font-size: 1.2rem;
//   @media (max-width: 640px) {
//     width: 100%;
//     text-align: center;
//     font-size: 3vw;
//   }
// `;

// const SocialMediaIcons = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 20px;
//   font-size: 32px;
//   gap: 20px;
//   @media (max-width: 640px) {
//     display: none;
//   }
// `;

// const StyledHorizontalLine2 = styled.hr`
//   border: none;
//   height: 4px;
//   background-color: black;
//   width: 100%;
//   margin: 20px 0;
//   color: black;
//   opacity: 1;
//   @media (max-width: 640px) {
//     height: 2px;
//     margin: 0vw ;
//     display: none;
//   }
// `;


const BGC = styled.div`
  background-color: rgba(255, 255, 255, 0.756);
  padding-top: 2vw;
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
  @media (max-width: 1024px) {
    padding-top: 7vw;
    padding-bottom: 0rem;
  }
  @media (max-width: 640px) {
    padding-top: 12vw;
    padding-bottom: 0rem;
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
    padding-top: 7vw;
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


// our mission 

const MissionSection = styled.div`
  display: flex;
  justify-content: flex-end;
  background-image: url(${aboutbgi});
  background-size: cover;
  background-position: center;
  height: 110vh; 
  padding-right: 5%;  
  padding-top: 8%;  

  @media (max-width: 1024px) { 
    background-image: url(${aboutbgi3}); 
    justify-content: flex-end; 
    align-items: flex-end; 
    padding: 5% 5% 10% 20%;
    height: 120vh; 
  }

  @media (max-width: 640px) { 
    padding: 5% 1% 10% 30%; 
    height: 60vh; 
  }
`;


const MissionContent = styled.div`
  width: 40%;  
  text-align: center;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 640px) {
    width: 90%;
  }
  
`;

const MissionLogo = styled.img`
  width: 25rem;  
  height: auto;
  margin-bottom: 20px;
  @media (max-width: 1024px) {
    width: 50%; 
  }

  @media (max-width: 640px) {
    width: 50%; 
  }
 
`;

const MissionTitle = styled.h2`
  font-size: 3rem;  
  margin-bottom: 10px;
  font-style: italic;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1024px) {
    font-size: 2rem; 
  }
  @media (max-width: 640px) {
    font-size: 1rem; 
  }
`;

const MissionText = styled.p`
  font-size: 1.5rem;
  padding: 0px 5rem;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 1024px) {
    font-size: 1.2rem; // Adjust font size for readability
    padding: 0 2rem; // Adjust padding for smaller screens
  }
  @media (max-width: 640px) {
    font-size: 0.6rem; 
  }
`;

// our mission 
import  { useState } from 'react';
import styled from 'styled-components';
import profilePicA from '../../../public/review/Screenshot1.png';
import profilePicB from '../../../public/review/Screenshot2.png';
import profilePicC from '../../../public/review/Screenshot3.png';
import profilePicD from '../../../public/review/Screenshot4.png';
import leftArrow from '../../../public/leftArrow.png';
import rightArrow from '../../../public/rightArrow.png';

const ReviewSection = styled.section`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    margin: 10px;
    padding-top: 0px;
  }
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ArrowButton = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 0 10px;

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    margin: 0 5px;
  }
`;

const ProfileImage = styled.img`
  width: 30%;
  height: auto;
  margin: 0 30px;

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    margin: 10px 0;
  }
`;

const SecondProfileImage = styled(ProfileImage)`
  @media (max-width: 480px) {
    display: none;
  }
`;
const ApproachSection = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  width: 100%;
`;

const ApproachTitle = styled.h2`
  font-size: 7vw;
  margin: 0;
  font-family: 'League Spartan', sans-serif;
  font-weight: 800;
  color: #95071A;
  margin-bottom: 10px;
  font-family: 'League Spartan', sans-serif;

  @media (max-width: 480px) {
    font-size: 6vw;
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
// Array of images
const images = [profilePicA, profilePicB, profilePicC, profilePicD];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (

    <ReviewSection>    <ApproachSection>
    <ApproachTitle>OUR APPROACH</ApproachTitle>
    <ApproachText>
      Cater to the individual needs of the athlete, in a supportive and inclusive way!
    </ApproachText>
  </ApproachSection>
      <ReviewContainer>
        <ArrowButton src={leftArrow} alt="Previous" onClick={handlePrevious} />
        <ProfileImage src={images[currentIndex]} alt={`Review ${currentIndex + 1}`} />
        <SecondProfileImage src={images[(currentIndex + 1) % images.length]} alt={`Review ${(currentIndex + 1) % images.length + 1}`} />
        <ArrowButton src={rightArrow} alt="Next" onClick={handleNext} />
      </ReviewContainer>
    </ReviewSection>
  );
};

export default Reviews;

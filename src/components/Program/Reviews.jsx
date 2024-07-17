import React, { useState } from 'react';
import styled from 'styled-components';
import profilePic1 from '../../../public/review/reviewer1.webp';
import profilePic2 from '../../../public/review/reviewer2.webp';
import profilePic3 from '../../../public/review/reviewer3.webp';
import leftArrow from '../../../public/leftArrow.png';
import rightArrow from '../../../public/rightArrow.png';

const ReviewSection = styled.section`
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400rem;
`;

const ArrowButton = styled.img`
  width: 6rem;
  height: 50px;
  cursor: pointer;
  margin: 0 20px;
`;

const ReviewCard = styled.div`
  background-color: #003366;
  border-radius: 10px;
  color: white;
  padding: 20px;
  max-width: 70rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: -50px;
`;

const ReviewerName = styled.h3`
  margin-top: 40px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ReviewerTitle = styled.h4`
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  font-weight: bold;
`;

const ReviewText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin: 20px 0;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  font-size: 1.5rem;
  color: gold;
  margin: 0 2px;
`;

const reviews = [
  {
    profilePic: profilePic1,
    name: 'Beth T.',
    title: '(Proud mom of Emily)',
    text: 'My daughter is naturally very shy. We tried a few different programs, and we couldn’t find coaches who were willing to adapt to her temperament. We ended up receiving a flyer for Junior Athletics and gave them a call. I could tell right away, their programs were designed to cater to each child’s needs, rather than forcing kids to be uncomfortable. For me, it was about helping my daughter open up more. Coach Yasmin, it has been amazing! I would recommend the All-Girls Academy to everyone!!',
    rating: 5,
  },
  {
    profilePic: profilePic2,
    name: 'Mark C.',
    title: '(Proud dad of Jacob)',
    text: "Our son Jacob has thrived in the basketball training academy. As a father, seeing Jacob's progress in his ball-handling and teamwork has made me proud. The coaches are here, get it! They are not hesitant to pull Jacob aside and give him advice. We love it because Jacob loves it. Jacob looks forward to every session. I am a physician, so I really do value the holistic approach to his development. Shout out to Coach Matt!",
    rating: 5,
  },
  {
    profilePic: profilePic3,
    name: 'Sarah P.',
    title: '(Proud mom of Mia)',
    text: "Junior Athletics has been a game-changer for my daughter Mia. As a single mom, I wanted Mia to be part of a program that would build her confidence. Mia already has a love for basketball, she’s 9. But I have noticed, since joining, she takes the initiative to practice in the driveway. The program's emphasis on skill development and sportsmanship has been invaluable. We’re very happy!",
    rating: 5,
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const { profilePic, name, title, text, rating } = reviews[currentReview];

  return (
    <ReviewSection>
      <ReviewContainer>
        <ArrowButton src={leftArrow} alt="Previous Review" onClick={handlePrevious} />
        <ReviewCard>
          <ProfileImage src={profilePic} alt="Reviewer" />
          <ReviewerName>{name}</ReviewerName>
          <ReviewerTitle>{title}</ReviewerTitle>
          <ReviewText>{text}</ReviewText>
          <StarRating>
            {Array(rating).fill().map((_, i) => (
              <Star key={i}>⭐</Star>
            ))}
          </StarRating>
        </ReviewCard>
        <ArrowButton src={rightArrow} alt="Next Review" onClick={handleNext} />
      </ReviewContainer>
    </ReviewSection>
  );
};

export default Reviews;

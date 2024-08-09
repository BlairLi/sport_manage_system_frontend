/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import logo from './logo.jpg'; 
import { useEffect } from "react";

const Content3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Background>
      <Container>
        <Content>
          <Texts>
            <h1>Empowering Girls: The Importance of Female Athletics from a Young Age</h1>
            <p><strong>Why Female Athletics Matter from a Young Age</strong></p>
            <p>From playgrounds to professional arenas, the importance of female athletics cannot be overstated. Engaging in sports like basketball from a young age offers countless benefits that extend far beyond the court. Here’s why encouraging girls to participate in athletics early on is crucial for their development and future success:</p>

            <p><strong>1. Building Confidence and Self-Esteem</strong> </p>
            <p>Participating in sports helps girls build confidence in their abilities and strengths. Whether dribbling a basketball or scoring a goal, each achievement reinforces a sense of accomplishment that boosts self-esteem. Through sports, girls learn to set goals, push their limits, and overcome challenges, laying a solid foundation for facing life's obstacles with resilience.</p>

            <p><strong>2. Developing Physical and Mental Strength</strong> </p>
            <p>Athletics promote physical fitness and overall well-being. Regular exercise strengthens muscles, improves cardiovascular health, and enhances coordination. Beyond physical fitness, sports also foster mental resilience by teaching girls to handle pressure, manage stress, and stay focused—a skill set that proves invaluable in all aspects of life.</p>

            <p><strong>3. Cultivating Leadership and Teamwork Skills</strong> </p>
            <p>Team sports like basketball teach girls the value of collaboration and communication. By working towards a common goal alongside teammates, girls learn to trust others, take on leadership roles, and contribute effectively to a group effort. These skills are essential in school, career settings, and community involvement, preparing girls to become confident leaders and team players.</p>

            <p><strong>4. Fostering Lifelong Health and Fitness Habits</strong> </p>
            <p>Engaging in sports from a young age establishes healthy habits that can last a lifetime. Girls who participate in athletics are more likely to remain physically active as adults, reducing their risk of chronic diseases such as heart disease and diabetes. By instilling a love for physical activity early on, we set the stage for a healthier future generation.</p>

            <p><strong>5. Challenging Gender Stereotypes and Breaking Barriers</strong> </p>
            <p>Female athletes in sports like basketball challenge societal norms and stereotypes about women's capabilities. By excelling in a sport traditionally dominated by men, they inspire others to defy expectations and pursue their passions fearlessly. Through their achievements, girls learn that gender should never limit their dreams or aspirations.</p>

            <p><strong>6. Promoting Social Inclusion and Diversity</strong> </p>
            <p>Basketball and other team sports bring people together from diverse backgrounds and cultures, fostering inclusivity and mutual respect. Girls learn to appreciate and celebrate differences while forging friendships that transcend boundaries. Athletics provide a platform for girls to connect, learn from one another, and build lasting bonds rooted in shared experiences and mutual respect.</p>

            <p><strong>7. The Impact of Female Coaches</strong> </p>
            <p>Having female coaches in coaching girls' athletics is not just beneficial—it's essential. They bring a unique set of skills, perspectives, and experiences that positively impact the development and success of young female athletes. By serving as role models, mentors, and advocates, female coaches inspire the next generation of girls to pursue their athletic dreams with confidence and determination. Female coaches empower girls to believe in their abilities, cultivate leadership skills, and create safe and inclusive environments where girls feel valued and respected.</p>

            <p><strong>Conclusion</strong>  </p>
            <p>Encouraging girls to participate in sports like basketball from a young age is more than just a physical activity—it's a pathway to empowerment, leadership, and personal growth. Let's continue to support and celebrate female athletes and coaches in basketball and all sports, ensuring that every girl has the opportunity to thrive both on and off the court.</p>

            <p><strong>Join us in empowering girls through basketball and athletics today!</strong></p>

            <p>Warm regards, <br/>
            Youth Development Basketball Team :)</p>
            <p><Logo src={logo} alt="Youth Development Basketball Logo" /></p>
            <StyledHorizontalLine2 />
          </Texts>
        </Content>
      </Container>
    </Background>
  );
};

export default Content3;

const Background = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Texts = styled.div`
  flex: 1;
  padding: 2rem;
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;

  h1 {
    color: #95071A;
    font-size: 3rem;
    letter-spacing: 1px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-weight: 800;
    font-family: 'League Spartan', sans-serif;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  p {
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    @media (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;

const Logo = styled.img`
  height: 100px;  
  width: auto;  
  margin-top: 10px;  
  display: block;  

  @media (max-width: 768px) {
    height: 80px;  
  }

  @media (max-width: 480px) {
    height: 60px;  
  }
`;

const StyledHorizontalLine2 = styled.hr`
  border: none;
  height: 4px;
  background-color: black;
  color: black;
  opacity: 1;
  margin: 15px 10px 80px 15px;

  @media (max-width: 768px) {
    height: 3px;  
    margin: 10px 5px 40px 10px;
  }

  @media (max-width: 480px) {
    height: 2px;  
    margin: 5px 2px 20px 5px;
  }
`;

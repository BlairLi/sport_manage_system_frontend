/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import logo from './logo.jpg';
import arrow from './arrow.png'

const stripePromise = loadStripe("pk_test_51PNSST2KpyYZmvZEQWr6oqPxWFqTeH6KbyUOQEYblEKHM3U7XhTCYl4GU6YJ2lYJgmIHB2n0od0V28dGPfw0sXSP00BKh7CEYT");

const RegistrationForm2 = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gender = queryParams.get("gender");
  const age = queryParams.get("age");
  const sport = queryParams.get("sport");
  const day = queryParams.get("day");
  const programLocation = queryParams.get("location");
  const numberOfChildren = 2;

  const [programs, setPrograms] = useState([]);
  const [childDOBs, setChildDOBs] = useState(["", ""]);
  const [childSelectedTimes, setChildSelectedTimes] = useState([[], []]);
  const [childSelectedClasses, setChildSelectedClasses] = useState([[], []]);
  const [selectedProgramFees, setSelectedProgramFees] = useState([null, null]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [childClasses, setChildClasses] = useState(["", ""]);
  const [childDays, setChildDays] = useState(["", ""]);
  const [additionalComments, setAdditionalComments] = useState("");
  const [parentEmail, setParentEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentPhone, setParentPhone] = useState("");
  const [parentAddress, setParentAddress] = useState("");

  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [ageFilter, setAgeFilter] = useState(age || '');
  const [sportFilter, setSportFilter] = useState(sport || '');
  const [locationFilter, setLocationFilter] = useState(programLocation || '');
  const [genderFilter, setGenderFilter] = useState(gender || '');
  const [dayFilter, setDayFilter] = useState(day || '');

  const [selectedForFirstChild, setSelectedForFirstChild] = useState(null);
  const [selectedForSecondChild, setSelectedForSecondChild] = useState(null);
  const url = import.meta.env.VITE_MONGODB_URL;


  useEffect(() => {
    axios.get(`${url}/programs`)
      .then(result => setPrograms(result.data || []))
      .catch(err => console.log(err));
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const filterProgramsByAge = (age) => {
    return programs.filter(program => {
      const [minAge, maxAge] = program.age.split('-').map(Number);
      return age >= minAge && age <= maxAge;
    });
  };

  const handleDOBChange = (index, event) => {
    const newDOBs = [...childDOBs];
    newDOBs[index] = event.target.value;
    setChildDOBs(newDOBs);

    const age = calculateAge(event.target.value);
    const filtered = filterProgramsByAge(age);
    const newChildSelectedTimes = [...childSelectedTimes];
    newChildSelectedTimes[index] = filtered;
    setChildSelectedTimes(newChildSelectedTimes);
    const newChildSelectedClasses = [...childSelectedClasses];
    newChildSelectedClasses[index] = [];
    setChildSelectedClasses(newChildSelectedClasses);
  };

  const handleClassChange = (index, event) => {
    const selectedClassName = event.target.value;
    const selectedProgram = programs.find(program => program.name === selectedClassName);

    const newSelectedProgramFees = [...selectedProgramFees];
    newSelectedProgramFees[index] = selectedProgram ? selectedProgram.fees : null;
    setSelectedProgramFees(newSelectedProgramFees);

    const newSelectedPrograms = [...selectedPrograms];
    newSelectedPrograms[index] = { programID: selectedProgram._id, programFees: selectedProgram.fees, programName: selectedProgram.name, programPlace: selectedProgram.place, programSport: selectedProgram.sport };
    setSelectedPrograms(newSelectedPrograms);

    const newChildClasses = [...childClasses];
    newChildClasses[index] = selectedProgram.name;
    setChildClasses(newChildClasses);

    const newChildDays = [...childDays];
    newChildDays[index] = new Date(selectedProgram.time).toLocaleString();
    setChildDays(newChildDays);
  };

  const handleButtonClick = (index, program) => {
    if (selectedPrograms.some(p => p.programID === program._id)) {
      alert("This program has already been selected. Please choose a different program.");
      return;
    }

    if (window.confirm(`Do you want to add program for child ${index + 1}?`)) {
      const newSelectedPrograms = [...selectedPrograms];
      newSelectedPrograms[index] = { ...program };
      setSelectedPrograms(newSelectedPrograms);

      const newChildClasses = [...childClasses];
      newChildClasses[index] = program.name;
      setChildClasses(newChildClasses);

      const newChildDays = [...childDays];
      newChildDays[index] = new Date(program.time).toLocaleString();
      setChildDays(newChildDays);
    }
  };

  const handleNextClick = async (e) => {
    e.preventDefault();
    await handleRegisterSelections(e);

    if (
      !parentEmail ||
      !parentName ||
      !parentPhone ||
      !parentAddress ||
      !childDOBs[0] ||
      !childClasses[0] ||
      !childDays[0] ||
      !childDOBs[1] ||
      !childClasses[1] ||
      !childDays[1]
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!selectedForFirstChild || !selectedForSecondChild) {
      alert("Please select programs for both children before proceeding.");
      return;
    }

    const selectedPrograms = [
      programs.find(program => program._id === selectedForFirstChild),
      programs.find(program => program._id === selectedForSecondChild)
    ];

    const stripe = await stripePromise;

    let totalAmount = selectedPrograms.reduce((total, program) => total + program.fees, 0);
    let discount = 0;

    // Apply a 10% discount if more than one program is selected
    if (selectedPrograms.length >= 2) {
      discount = totalAmount * 0.10; // 10% discount
    }

    const discountedTotal = totalAmount - discount;
    const discountRate = discount > 0 ? discountedTotal / totalAmount : 1;

    const lineItems = selectedPrograms.map(program => ({
      price_data: {
        currency: 'cad',
        product_data: {
          name: `${program.name} (${program.sport})`,
          description: `Program at ${program.place}`
        },
        unit_amount: Math.round(program.fees * discountRate * 100), // Calculate discounted price
      },
      quantity: 1
    }));


    // *************** Create a new registration to backend registration form ***************
    // TODO: Add parentAddress to backend
    // console.log("e.target.parentAddress:", e.target.parentAddress.value);
    // TODO: ** amount and program is different if second program is applied **
    const newRegistration = {
      bookingID: 1, // TODO: Update bookingID to be unique
      parentName: e.target.parentName.value,
      email: e.target.parentEmail.value,
      phone: e.target.parentPhone.value,
      child1Name: e.target.childName1.value,
      child1Birth: e.target.childDOB1.value,
      child1Program: e.target.childClass1.value,
      child1Amount: lineItems[0].price_data.unit_amount / 100, 
      child1Start: e.target.childDayOfClass1.value,
      child1End: "2029-12-31", // TODO: Update end date
      child2Name: e.target.childName2.value,
      child2Birth: e.target.childDOB2.value,
      child2Program: e.target.childClass2.value,
      child2Amount: lineItems.length > 1 ? lineItems[1].price_data.unit_amount / 100 : 0,
      child2Start: e.target.secondDayOfClass ? e.target.secondDayOfClass.value : "",
      child2End: "2029-12-31", // TODO: Update end date
      makeupClasses: "None",
      notes: e.target.additionalComments.value,
    };

    // Create a new registration to backend registration form
    // TODO: Add feature to handle amount when successful registration and unsuccessful registration (determine by stripe payment status)
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
    // *************** End of creating a new registration to backend registration form ***************
    console.log("New registration created:", newRegistration);
    // should be removed, use for prevent redirect to stripe
    return

    // try {
    //   const response = await axios.post(`${url}/create-checkout-session`, {
    //     lineItems,
    //     customerEmail: parentEmail
    //   });
    //   const sessionId = response.data.id;
    //   const { error } = await stripe.redirectToCheckout({ sessionId });
    //   if (error) {
    //     console.log(error);
    //   }
    // } catch (error) {
    //   console.error("Error creating checkout session:", error);
    // }
  };

  const getDayFromDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
  };

  let filteredPrograms = programs.slice();

  if (ageFilter) {
    filteredPrograms = filteredPrograms.filter(program => program.age === ageFilter);
  }
  if (sportFilter) {
    filteredPrograms = filteredPrograms.filter(program => program.sport === sportFilter);
  }
  if (locationFilter) {
    filteredPrograms = filteredPrograms.filter(program => program.location === locationFilter);
  }
  if (genderFilter) {
    filteredPrograms = filteredPrograms.filter(program => program.gender === genderFilter);
  }
  if (dayFilter) {
    filteredPrograms = filteredPrograms.filter(program => getDayFromDate(program.time) === dayFilter);
  }

  filteredPrograms.sort((a, b) => {
    if (sortKey) {
      if (typeof a[sortKey] === 'string') {
        return a[sortKey].localeCompare(b[sortKey]) * sortOrder;
      } else {
        return (a[sortKey] - b[sortKey]) * sortOrder;
      }
    }
    return 0;
  });

  const handleRegisterSelections = (e) => {
    e.preventDefault();
    // Confirm before proceeding with registration
    if (window.confirm("Do you want to register the selected program(s)?")) {
      if (selectedForFirstChild) {
        const selectedProgramForFirst = programs.find(program => program._id === selectedForFirstChild);
        if (selectedProgramForFirst) {
          setChildClasses(prevClasses => [selectedProgramForFirst.name, prevClasses[1]]);
          setChildDays(prevDays => [new Date(selectedProgramForFirst.time).toLocaleString(), prevDays[1]]);
        }
      }

      if (selectedForSecondChild) {
        const selectedProgramForSecond = programs.find(program => program._id === selectedForSecondChild);
        if (selectedProgramForSecond) {
          setChildClasses(prevClasses => [prevClasses[0], selectedProgramForSecond.name]);
          setChildDays(prevDays => [prevDays[0], new Date(selectedProgramForSecond.time).toLocaleString()]);
        }
      }
      console.log("Registration confirmed by user.");
    } else {
      console.log("Registration canceled by user.");
    }
  };

  return (
    <>
          <BGI>
        <Header>
          <div>
            <Title>REGISTRATION FORM ({numberOfChildren} Children)</Title>
            <Description>
            <D_title>
                <FlexContainer>
                  <span>SELECTED:</span>
                  <BackButton href="/survey">Back</BackButton>
                </FlexContainer>
              </D_title>
              {gender} | Age: {age} | Class: {sport} | Location: {programLocation} | {"1 child added"}
            </Description>
          </div>{/* <BackButton href="/survey">Back</BackButton> */}
        </Header>
      <Container onSubmit={handleNextClick}>
        <FormSection>
        <Column>
              <Step>
                <StepTitle>STEP 1 - Parent/Guardian Information</StepTitle>
                <FormRow>
                    <InputField>
                      <InputLabel>Email:</InputLabel>
                      <StyledInput type="email" name="parentEmail" required />
                    </InputField>
                    <InputField>
                      <InputLabel>Full Name:</InputLabel>
                      <StyledInput type="text" name="parentName" required />
                    </InputField>
                    <InputField>
                      <InputLabel>Phone Number:</InputLabel>
                      <StyledInput type="tel" name="parentPhone" required />
                    </InputField>
                    <InputField>
                      <InputLabel>Address:</InputLabel>
                      <StyledInput type="text" name="parentAddress" required />
                    </InputField>
                  </FormRow>

              </Step>
            </Column>

            <Column>
<Step>
  <StepTitle>STEP 2 - Child Details</StepTitle>
  <Step2FormRow>
  <InputField>
    <Step2InputLabel>Full Name (Child 1):</Step2InputLabel>
    <StyledInput type="text" name="childName1" required />
  </InputField>
  <InputField>
    <Step2InputLabel>Date of Birth (Child 1):</Step2InputLabel>
    <StyledInput type="date" name="childDOB1" required onChange={(e) => handleDOBChange(0, e)} />
  </InputField>
  <InputField>
    <Step2InputLabel>Class (Child 1):</Step2InputLabel>
    <StyledInput type="text" name="childClass1" value={childClasses[0]} readOnly required />
  </InputField>
  <InputField>
    <Step2InputLabel>Start Day (Child 1):</Step2InputLabel>
    <StyledInput type="text" name="childDayOfClass1" value={childDays[0]} readOnly required />
  </InputField>
</Step2FormRow>

  <Step2FormRow>
  <InputField>
    <Step2InputLabel>Full Name (Child 2):</Step2InputLabel>
    <StyledInput type="text" name="childName2" required />
  </InputField>
  <InputField>
    <Step2InputLabel>Date of Birth (Child 2):</Step2InputLabel>
    <StyledInput type="date" name="childDOB2" required onChange={(e) => handleDOBChange(1, e)} />
  </InputField>
  <InputField>
    <Step2InputLabel>Class (Child 2):</Step2InputLabel>
    <StyledInput type="text" name="childClass2" value={childClasses[1]} readOnly required />
  </InputField>
  <InputField>
    <Step2InputLabel>Day (Child 2): 
</Step2InputLabel>
    <StyledInput type="text" name="childDayOfClass2" value={childDays[1]} readOnly required />
  </InputField>
</Step2FormRow>

  
</Step>

            </Column>
{/* 
          <Column>
            <Step>
              <StepTitle>STEP 2 - Child Details</StepTitle>
              <FormRow>
                <InputLabel>Full Name (Child 1):</InputLabel>
                <InputLabel>Date of Birth (Child 1):</InputLabel>
                <InputLabel>Class (Child 1):</InputLabel>
                <InputLabel>Day (Child 1):</InputLabel>
              </FormRow>
              <FormRow>
                <StyledInputShort type="text" name="childName1" required />
                <StyledInputShort type="date" name="childDOB1" required onChange={(e) => handleDOBChange(0, e)} />
                <StyledInputShort type="text" name="childClass1" value={childClasses[0]} readOnly required />
                <StyledInputShort type="text" name="childDayOfClass1" value={childDays[0]} readOnly required />
              </FormRow>
              <FormRow>
                <InputLabel>Full Name (Child 2):</InputLabel>
                <InputLabel>Date of Birth (Child 2):</InputLabel>
                <InputLabel>Class (Child 2):</InputLabel>
                <InputLabel>Day (Child 2):</InputLabel>
              </FormRow>
              <FormRow>
                <StyledInputShort type="text" name="childName2" required />
                <StyledInputShort type="date" name="childDOB2" required onChange={(e) => handleDOBChange(1, e)} />
                <StyledInputShort type="text" name="childClass2" value={childClasses[1]} readOnly required />
                <StyledInputShort type="text" name="childDayOfClass2" value={childDays[1]} readOnly required />
              </FormRow>
            </Step>
          </Column> */}
        </FormSection>
        <StepTitle2>Program select : click for register</StepTitle2>
        <TableContainer>
          {/* 
          <SmallText>*Red button to add a program for Child 1, Yellow button for Child 2</SmallText>
          */}
          {filteredPrograms.length > 0 ? (
            <StyledTable className="table">
              <thead>
                <tr>
                  <StyledTh>Name</StyledTh>
                  <StyledTh>Time</StyledTh>
                  <StyledTh>Place</StyledTh>
                  <StyledTh>Program Fees</StyledTh>
                  <StyledTh>1st Child Selection</StyledTh>
                  <StyledTh>2nd Child Selection</StyledTh>
                </tr>
              </thead>
              <tbody>
                {filteredPrograms.map((program, index) => (
                  <tr key={index}>
                    <StyledTd>{program.name}</StyledTd>
                    <StyledTd>{new Date(program.time).toLocaleString()}</StyledTd>
                    <StyledTd>{program.place}</StyledTd>
                    <StyledTd>${program.fees}</StyledTd>
                    <StyledTd>
                      <input
                        type="checkbox"
                        checked={selectedForFirstChild === program._id}
                        onChange={() => {
                          if (selectedForFirstChild === program._id) {
                            setSelectedForFirstChild(null);
                          } else {
                            setSelectedForFirstChild(program._id);
                          }
                        }}
                        disabled={selectedForFirstChild !== null && selectedForFirstChild !== program._id}
                      />
                    </StyledTd>
                    <StyledTd>
                      <input
                        type="checkbox"
                        checked={selectedForSecondChild === program._id}
                        onChange={() => {
                          if (selectedForSecondChild === program._id) {
                            setSelectedForSecondChild(null);
                          } else {
                            setSelectedForSecondChild(program._id);
                          }
                        }}
                        disabled={selectedForSecondChild !== null && selectedForSecondChild !== program._id}
                      />
                    </StyledTd>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          ) : (
            <NoProgramsMessage>No programs are available for the selected criteria.</NoProgramsMessage>
          )}
          {/* disabled */}
          {/* <RegisterButton type="button" onClick={handleRegisterSelections}>Register</RegisterButton> */}
        </TableContainer>
        <FormSection>
          <Column>
            <Step>
              <StepTitle3>Does the participant have any medical conditions or allergies we should be aware of:</StepTitle3>
              <FormRowHorizontal>
                <TextArea
                  name="additionalComments"
                  value={additionalComments}
                  onChange={(e) => setAdditionalComments(e.target.value)}
                  rows="5"
                  cols="120"
                  placeholder="Enter any additional comments or requests here..."
                />
                <ButtonRow>
                  <ConfirmButton type="submit">
                    Next
                    <img src={arrow} alt="Next" />
                  </ConfirmButton>
                </ButtonRow>
              </FormRowHorizontal>
            </Step>
          </Column>
        </FormSection>
      </Container>
      </BGI>
    </>
  );
};

const BGI = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  padding-top: 15px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${logo}) no-repeat center center;
    background-size: 45%;
    opacity: 0.2;
    z-index: -1;
  }

  @media (max-width: 768px) {
    &::before {
      background-size: 65%; // Increase background size for better visibility
    }
  }

  @media (max-width: 480px) {
    &::before {
      background-size: 85%; // Further increase for small screens
    }
  }
`;

const Header = styled.div`
  padding:  0px 20px 0px 20px ;
  padding-top: 60px;
  justify-content: space-between; // Space out the back button and the title
  align-items: center;  // Vertically align the items in the middle
  max-width: 90%;
  margin: 20px auto;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15vw 0 0 0;
  }
`;

const Title = styled.h1`
  color: #95071A;
  font-family: 'League Spartan', sans-serif;
  font-weight: bold;
  font-size: 53px;

  @media(max-width: 768px) {
    font-size: 32px;
  }

  @media(max-width: 480px) {
    font-size: 8vw;
  }
`;

const D_title = styled.div`
  margin: 0;
  color: #95071A; 
  font-weight: 800;
  font-size: 20px;
  font-family: 'League Spartan', sans-serif;

  @media(max-width: 768px) {
    font-size: 16px;
  }

  @media(max-width: 480px) {
    font-size: 3.5vw;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  color: #000000;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;

  @media(max-width: 768px) {
    font-size: 16px;
  }

  @media(max-width: 480px) {
    font-size: 3vw;
  }
`;

const BackButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffffff;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 800;

  &:hover {
    color: #5e0511;
  }

  @media(max-width: 768px) {
    padding: 8px 16px;
  }

  @media(max-width: 480px) {
    padding: 6px 12px;
  }
`;

const Container = styled.form`
  max-width: 90%;
  margin: 0px auto;
  padding: 0px 20px;  

  @media(max-width: 768px) {
    padding: 0px 10px;
  }

  @media(max-width: 480px) {
    padding: 0px 5px;
    max-width: 93%;
  }
`;

const FormSection = styled.div``;

const Column = styled.div``;

const Step = styled.div`
  margin-bottom: 20px;
`;

const StepTitle = styled.div`
  margin-bottom: 10px;
  color: #95071A; 
  font-size: 19.5px;
  font-weight: bold;

  @media(max-width: 768px) {
    font-size: 16px;
  }

  @media(max-width: 480px) {
    font-size: 4vw;
  }
`;

const StepTitle2 = styled.h6`
  margin-top: 3vw;
  margin-left: 1vw;

  @media(max-width: 768px) {
    margin-top: 10px;
    margin-left: 5px;
  }

  @media(max-width: 480px) {
    margin-top: 8px;
    margin-left: 4px;
    font-size: 4vw;

  }
`;


const StepTitle3 = styled.h5`
  margin-bottom: 10px;
  font-weight: 600;

  @media(max-width: 768px) {
    font-size: 16px;
  }

  @media(max-width: 480px) {
    font-size: 4vw;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;  // Default to column layout
  align-items: flex-start;
  width: 100%;

  @media(min-width: 768px) {  // Switch to row layout for larger screens
    flex-direction: row;
  }
`;

const FormRowHorizontal = styled.div`
  display: flex;
  align-items: flex-end ;
  width: 100%;
  flex-wrap: wrap;
`;

const InputLabel = styled.label`
  flex: 1 1 100%;  // Take full width on mobile for better readability
  margin-bottom: 5px;  // Space between label and input on mobile
  color: #000000;
  padding: 10px 0;

  @media(min-width: 768px) {
    flex: 1 1 25%;  // Adjust width on larger screens
    margin-bottom: 0;  // Remove bottom margin on larger screens
    padding: 10px 0;
  }
`;

const StyledInputShort = styled.input`
  border-radius: 50px;
  border: 1px solid;
  flex: 1 1 25%;  // Maintain the original width on larger screens
  margin-right: 140px; // Maintain original margin right

  @media(max-width: 768px) {
    flex: 1 1 100%;  // Full width on smaller screens
    margin-right: 10px; // Reduced margin for mobile
    margin-bottom: 10px; // Additional bottom margin for spacing between inputs on mobile
  }
`;

const TextArea = styled.textarea`
  flex: 1 1 80%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media(max-width: 768px) {
    margin-bottom: 8px;
  }

  @media(max-width: 480px) {
    margin-bottom: 6px;
  }
`;

const ButtonRow = styled.div`
  margin-top: 20px; /* Ensure it has some spacing from other content */
  flex: 1 1 20%;
  display: flex;
  justify-content: flex-end; /* Align items to the right */

  @media(max-width: 768px) {
    margin-top: 16px;
  }

  @media(max-width: 480px) {
    margin-top: 12px;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 25px; // Keeps some space below each row
  font-weight: 800;

  &:hover {
    color: #5e0511;
  }

  img {
    margin-left: 5px;
    width: 20px; // Adjust size as necessary
    height: auto;
  }

  @media(max-width: 768px) {
    padding: 8px 16px;
  }

  @media(max-width: 480px) {
    padding: 2vw 4vw;
    margin-bottom: 0px;
    font-size: 3.8vw;
    img {
    margin-left: 5px;
    width: 3vw; // Adjust size as necessary
    height: auto;
  }
  }
`;

const TableContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 0px 16px 16px 16px;

  @media (max-width: 768px) {
    padding: 0; // Remove padding for tablet size
  }
`;

const SmallText = styled.p`
  font-size: 20px;
  color: #000000;
  text-align: center;
  margin-bottom: 10px;
`;

const NoProgramsMessage = styled.p`
  text-align: center;
  color: red;
  font-weight: bold;
`;

const StyledTable = styled.table`
  border-color:#95071A;
  width: 100%;
  table-layout: fixed;
  tr { text-align: center; }

  @media(max-width: 768px) {
    font-size: 14px;
  }

  @media(max-width: 480px) {
    font-size: 3vw;
  }
`;

const StyledTh = styled.th`
  width: ${({ width }) => width};
  overflow: hidden;
  cursor: pointer;
`;

const StyledTd = styled.td`
  width: ${({ width }) => width};
  overflow: hidden;
`;

const RegisterButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: calc(7.2%);

  &:hover {
    background-color: #45a049;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically center */
  width: 100%; /* Ensure it takes up the full width */
`;
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${props => props.className === 'noo' ? 0 : 1};  // Sets opacity to 0 if className is 'noo'

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

  }

    @media(max-width: 460px) {
    display: ${props => props.className === 'noo' ? 'none' : 'flex'};  // Hide if className is 'noo'

}
`;
const StyledInput = styled.input`
  border-radius: 50px;
  border: 1px solid;
  flex: 1 1 100%;  // Ensure input takes full width of its container
  margin-right: 140px;  // Adjust spacing on the right

  @media(max-width: 768px) {
    margin-right: 70px;
  }

  @media(max-width: 480px) {
    margin-right: 35px;
  }
`;

const Step2FormRow = styled.div`
  display: flex;
  flex-direction: column;  // Default to column on smaller screens
  align-items: flex-start;
  width: 100%;

  @media(min-width: 768px) {  // Switch to row layout for larger screens
    flex-direction: row;
  }
`;

const Step2InputLabel = styled.label`
  flex: 1 1 25%;  // Adjust to control label width
  margin-bottom: 0;
  color: #000000;
  padding: 10px 0;

  @media(max-width: 768px) {
    padding: 8px 0;
  }

  @media(max-width: 480px) {
    padding: 6px 0;
    font-size: 3vw;
  }
`;

export default RegistrationForm2;

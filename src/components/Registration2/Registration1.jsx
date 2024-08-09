/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import logo from './logo2.png';
import arrow from './arrow.png';

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLIC_KEY}`); // Yucan's pk
// const stripePromise = loadStripe("pk_test_51OgII1FhlO3bVzIRzph02dE9M2d2aqUlLVyBRjqPAYR6nGeznJ5v0KDLi5xXGtwKbzee7H6yfWyyHf52cqKIoGb600YBD9q9qj"); // Yucan's pk

const RegistrationForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const gender = queryParams.get("gender");
  const age = queryParams.get("age");
  const sport = queryParams.get("sport");
  const day = queryParams.get("day");
  const programLocation = queryParams.get("location");
  const addMoreChildren = queryParams.get("addMoreChildren") === "true";
  const numberOfChildren = addMoreChildren ? 2 : 1; // Adjust as needed

  const [programs, setPrograms] = useState([]);
  const [childDOBs, setChildDOBs] = useState(["", "", "", "", ""]);
  const [childSelectedTimes, setChildSelectedTimes] = useState([[], [], [], [], []]);
  const [childSelectedClasses, setChildSelectedClasses] = useState([[], [], [], [], []]);
  const [selectedProgramFees, setSelectedProgramFees] = useState([null, null, null, null, null]);
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const [childClass, setChildClass] = useState("");
  const [childClassPlace, setChildClassPlace] = useState("");
  const [childDayOfClassTime, setChildDayOfClassTime] = useState("");
  const [childDay, setChildDay] = useState("");
  const [secondClass, setSecondClass] = useState("");
  const [secondDay, setSecondDay] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");

  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);
  const [ageFilter, setAgeFilter] = useState(age || '');
  const [sportFilter, setSportFilter] = useState(sport || '');
  const [locationFilter, setLocationFilter] = useState(programLocation || '');
  const [genderFilter, setGenderFilter] = useState(gender || '');
  const [dayFilter, setDayFilter] = useState(day || '');
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


  const handleRemoveSecondProgram = () => {
    if (window.confirm("Are you sure you want to remove the 2nd program?")) {
      // Find the program ID for the second class
      const secondProgram = programs.find(program => program.name === secondClass);

      if (secondProgram) {
        // Unselect the checkbox for the second program
        const newSelectedPrograms = { ...selectedPrograms };
        delete newSelectedPrograms[secondProgram._id];
        setSelectedPrograms(newSelectedPrograms);
      }

      setSecondClass("");
      setSecondDay("");
    }
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(-sortOrder);
    } else {
      setSortKey(key);
      setSortOrder(1);
    }
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
  // Filter by multiple locations
  if (locationFilter) {
    const locations = locationFilter.split(',');
    filteredPrograms = filteredPrograms.filter(program =>
      locations.some(location => program.location.includes(location))
    );
  }
  if (genderFilter) {
    filteredPrograms = filteredPrograms.filter(program => program.gender === genderFilter);
  }
  // Filter by multiple days
  if (dayFilter) {
    const days = dayFilter.split(',');
    filteredPrograms = filteredPrograms.filter(program =>
      days.some(day => getDayFromDate(program.time) === day)
    );
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

  const handleCheckboxChange = (programId) => {
    setSelectedPrograms(prev => {
      const currentlySelected = Object.keys(prev).filter(key => prev[key]).length; // Count how many are currently true
      const isCurrentlySelected = prev[programId];

      // If trying to select more than allowed and the current one isn't already selected
      if (currentlySelected >= 2 && !isCurrentlySelected) {
        alert("You can only select up to 2 programs.");
        return prev; // Return the current state without changes
      }

      // Otherwise, toggle the selected state
      return {
        ...prev,
        [programId]: !isCurrentlySelected
      };
    });
  };

  const handleRegisterSelected = (e) => {

    const selectedProgramIds = Object.keys(selectedPrograms).filter(id => selectedPrograms[id]);

    if (selectedProgramIds.length === 0) {
      alert("Please select at least one program to register.");
      return;
    }

    // Fetch details of the selected programs
    const selectedDetails = filteredPrograms.filter(program => selectedProgramIds.includes(program._id));
    console.log("selectedDetails:", selectedDetails);
    // Confirm before proceeding with any registration
    if (window.confirm("Do you want to register the selected program(s)?")) {
      if (selectedDetails.length > 0) {
        
        setChildClass(selectedDetails[0].name);
        setChildClassPlace(selectedDetails[0].place);

        // Parse the date-time string
        const dateObject = new Date(selectedDetails[0].time);
        const time = dateObject.toLocaleTimeString();
        const date = dateObject.toLocaleDateString();

        setChildDayOfClassTime(time);
        setChildDay(date);

        // Check if there is a second selection and update accordingly
        if (selectedDetails.length > 1) {
          setSecondClass(selectedDetails[1].name);
          setSecondDay(new Date(selectedDetails[1].time).toLocaleDateString());
        } else {
          // Reset the second child details if no second program is selected
          setSecondClass("");
          setSecondDay("");
        }
        // After registering, reset selected programs to allow new selections
      }
    } else {
      // Log or handle the cancellation case
      console.log("Registration cancelled by user.");
      // Optionally, reset selected states here if needed
    }
  };


  const handleNextClick = async (e) => {
    e.preventDefault();
    await handleRegisterSelected(e)

    const form = e.target.closest('form');

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const parentEmail = document.querySelector('input[name="parentEmail"]').value;
    const parentName = document.querySelector('input[name="parentName"]').value;
    const parentPhone = document.querySelector('input[name="parentPhone"]').value;
    const parentAddress = document.querySelector('input[name="parentAddress"]').value;
    const childName = document.querySelector('input[name="childName"]').value;
    const childDOB = document.querySelector('input[name="childDOB"]').value;
    const childClassInput = document.querySelector('input[name="childClass"]').value;
    const childDayOfClass = document.querySelector('input[name="childDayOfClass"]').value;

    if (!parentEmail || !parentName || !parentPhone || !parentAddress || !childName || !childDOB || !childClassInput || !childDayOfClass ||
      (secondClass && (!document.querySelector('input[name="secondClass"]').value || !document.querySelector('input[name="secondDayOfClass"]').value))) {
      alert("Please fill in all required fields.");
      return;
    }
    const selectedProgramIds = Object.keys(selectedPrograms).filter(id => selectedPrograms[id]);

    if (selectedProgramIds.length === 0) {
      alert("Please select at least one program to proceed to payment.");
      return;
    }

    const selectedDetails = programs.filter(program => selectedProgramIds.includes(program._id));

    if (selectedDetails.length > 0) {
      const stripe = await stripePromise;

      let totalAmount = selectedDetails.reduce((total, program) => total + program.fees, 0);
      let discount = 0;

      if (selectedDetails.length >= 2) {
        discount = totalAmount * 0.10; // 10% discount
      }

      const discountedTotal = totalAmount - discount;
      const discountRate = discountedTotal / totalAmount;

      const lineItems = selectedDetails.map(program => ({
        price_data: {
          currency: 'cad',
          product_data: {
            name: program.name,
            description: `${program.sport} at ${program.place}`,
          },
          recurring: {
            interval: 'month',  // Set the billing interval to 'week'
          },
          unit_amount: Math.round(program.fees * discountRate * 100),
        },
        quantity: 1,
      }));


      // *************** Create a new registration to backend registration form ***************
      // TODO: Add parentAddress to backend
      // console.log("e.target.parentAddress:", e.target.parentAddress.value);
      // TODO: ** amount and program is different if second program is applied **
      const newRegistration = {
        bookingID: `booking_${Date.now()}_${Math.floor(Math.random() * 10000)}`,
        parentName: e.target.parentName.value,
        email: e.target.parentEmail.value,
        phone: e.target.parentPhone.value,
        child1Name: e.target.childName.value,
        child1Birth: e.target.childDOB.value,
        child1Program: e.target.childClass.value,
        child1ProgramPlace: e.target.childClassPlace.value,
        childDayOfClassTime: e.target.childDayOfClassTime.value,
        child1Amount: 0,
        child1Start: e.target.childDayOfClass.value,
        child1End: "2029-12-31", // TODO: Update end date
        child1Program2: e.target.secondClass ? e.target.secondClass.value : "",
        child1Amount2: 0,
        child1Start2: e.target.secondDayOfClass ? e.target.secondDayOfClass.value : "",
        child1End2: "2029-12-31", // TODO: Update end date
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

      try {
        const response = await axios.post(`${url}/create-checkout-session`, {
          lineItems,
          successUrl: `${window.location.origin}/success/`,
          cancelUrl: `${window.location.origin}/cancel/`,
          bookingID: newRegistration.bookingID,
          child1Amount: lineItems[0].price_data.unit_amount / 100,
          child1Amount2: lineItems.length > 1 ? lineItems[1].price_data.unit_amount / 100 : 0
        });
        const sessionId = response.data.id;
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Stripe checkout error:", error);
        }
      } catch (error) {
        console.error("Error creating checkout session:", error);
      }
    } else {
      console.log("No programs selected or an error occurred.");
    }
  };



  return (
    <>
      <BGI>
        <Header>
          <div>
            <Title>REGISTRATION FORM ({numberOfChildren} {numberOfChildren > 1 ? 'Children' : 'Child'})</Title>
            <Description>
              <D_title>
                <FlexContainer>
                  <span>SELECTED:</span>
                  <BackButton href="/survey">Back</BackButton>
                </FlexContainer>
              </D_title>
              {gender} | Age: {age} | Class: {sport} | Location: {programLocation} | {addMoreChildren ? "child added" : "No child added"}
            </Description>
          </div>
          {/* <BackButton href="/survey">Back</BackButton> */}
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
                    <Step2InputLabel>Full Name:</Step2InputLabel>
                    <StyledInput type="text" name="childName" required />
                  </InputField>
                  <InputField>
                    <Step2InputLabel>Date of Birth:</Step2InputLabel>
                    <StyledInput type="date" name="childDOB" required onChange={(e) => handleDOBChange(0, e)} />
                  </InputField>
                  <InputField>
                    <Step2InputLabel>Class:</Step2InputLabel>
                    <StyledInput type="text" name="childClass" value={childClass} readOnly required />
                  </InputField>
                {/* 
                  <InputField>
                    <Step2InputLabel>Location:</Step2InputLabel>
                    <StyledInput type="text" name="childClassPlace" value={childClassPlace} readOnly required />
                  </InputField>
                  */}
                  <InputField>
                    <Step2InputLabel>Start Day:</Step2InputLabel>
                    <StyledInput type="text" name="childDayOfClass" value={childDay} readOnly required />
                  </InputField>
                   {/* 
                  <InputField>
                    <Step2InputLabel>Time:</Step2InputLabel>
                    <StyledInput type="text" name="childDayOfClassTime" value={childDayOfClassTime} readOnly required />
                  </InputField>
                   */}
                </Step2FormRow>

                {secondClass && (
                  <Step2FormRow>
                    <InputField className="noo">
                      <Step2InputLabel>testing1</Step2InputLabel>
                      <StyledInput readOnly />
                    </InputField>
                    <InputField className="noo">
                      <Step2InputLabel>testing2</Step2InputLabel>
                      <StyledInput readOnly />
                    </InputField>
                    <InputField>
                      <Step2InputLabel>2nd Class:</Step2InputLabel>
                      <StyledInput type="text" name="secondClass" value={secondClass} readOnly required />
                    </InputField>
                    <InputField>
                      <Step2InputLabel>2nd Start Day:    <RemoveButton onClick={handleRemoveSecondProgram}>x</RemoveButton>
                      </Step2InputLabel>
                      <StyledInput type="text" name="secondDayOfClass" value={secondDay} readOnly required />
                    </InputField>
                  </Step2FormRow>

                )}
              </Step>

            </Column>

          </FormSection>
          <StepTitle2>Program select : click to register</StepTitle2>
          <TableContainer>
            <StyledTable className="table">
              <thead>
                <tr>
                  <StyledTh width="20%" onClick={() => handleSort("name")}>Name {sortKey === "name" && (sortOrder === 1 ? "↑" : "↓")}</StyledTh>
                  <StyledTh width="18%" onClick={() => handleSort("time")}>Time {sortKey === "time" && (sortOrder === 1 ? "↑" : "↓")}</StyledTh>
                  <StyledTh width="25%" onClick={() => handleSort("place")}>Place {sortKey === "place" && (sortOrder === 1 ? "↑" : "↓")}</StyledTh>
                  <StyledTh width="15%" onClick={() => handleSort("fees")}>Program Fees {sortKey === "fees" && (sortOrder === 1 ? "↑" : "↓")}</StyledTh>
                  <StyledTh width="22%">Selection</StyledTh>
                </tr>
              </thead>
              <tbody>
                {filteredPrograms.map((program, index) => (
                  <tr key={index}>
                    <StyledTd>{program.name}</StyledTd>
                    <StyledTd>{new Date(program.time).toLocaleString()}</StyledTd>
                    <StyledTd>{`${program.place} (${program.location})`}</StyledTd>
                    <StyledTd>${program.fees} per month</StyledTd>
                    <StyledTd>
                      <input
                        type="checkbox"
                        checked={!!selectedPrograms[program._id]}
                        disabled={Object.keys(selectedPrograms).filter(key => selectedPrograms[key]).length >= 2 && !selectedPrograms[program._id]}
                        onChange={() => handleCheckboxChange(program._id)}
                      />
                    </StyledTd>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
            {/* disabled */}
            {/* <RegisterButton onClick={handleRegisterSelected}>Register</RegisterButton> */}
          </TableContainer>
          <FormSection>
            <Column>
              <Step>
                <StepTitle3>Does the participant have any medical conditions or allergies we should be aware of?</StepTitle3>
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

const Header = styled.div`
  padding:  0px 20px 0px 20px ;
  padding-top: 60px;
  justify-content: space-between; 
  align-items: center;  
  max-width: 90%;
  margin: 20px auto;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15vw 0 0 0;
  }
`;

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

  @media(max-width: 480px) {
    &::before {
      top: -50px;
      background-size: 100%; 
    }
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

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically center */
  width: 100%; /* Ensure it takes up the full width */
`;

const SecondClassRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const FormSection = styled.div`
`;

const Column = styled.div`
`;

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
  flex-direction: column;  
  align-items: flex-start;
  width: 100%;

  @media(min-width: 768px) {  
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
  flex: 1 1 25%;
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

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${props => props.className === 'noo' ? 0 : 1};  

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;

  }

    @media(max-width: 460px) {
    display: ${props => props.className === 'noo' ? 'none' : 'flex'};  

}
`;


const Step2FormRow = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 100%;

  @media(min-width: 768px) { 
    flex-direction: row;
  }
`;

const Step2InputLabel = styled.label`
  flex: 1 1 25%;  
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
const Step2InputField = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 1 75%;  
  margin-bottom: 0;

  @media(max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media(max-width: 480px) {
    padding: 6px 0;
    font-size: 3vw;
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
  margin-top: 20px; 
  flex: 1 1 20%;
  display: flex;
  justify-content: flex-end; 

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
  margin-bottom: 25px; 
  font-weight: 800;

  &:hover {
    color: #5e0511;
  }

  img {
    margin-left: 5px;
    width: 20px; 
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
    width: 3vw; 
    height: auto;
  }
  }
`;

const TableContainer = styled.div`
  width: 100%; 
  border-radius: 8px;
  padding: 0px 16px 16px 16px;
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

const RedLink = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  background-color: red;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: darkred;
  }
`;

const BlueLink = styled.a`
  display: inline-block;
  margin: 5px;
  padding: 5px 10px;
  background-color: blue;
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: darkblue;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    color: darkred;
  }

  @media(max-width: 768px) {
    font-size: 18px;
  }

  @media(max-width: 480px) {
    font-size: 16px;
  }
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

  @media(max-width: 768px) {
    padding: 8px 16px;
    margin-right: calc(5.2%);  
  }

  @media(max-width: 480px) {
    padding: 6px 12px;
    margin-right: calc(3.2%);  
  }
`;

const StyledInput = styled.input`
  border-radius: 50px;
  border: 1px solid;
  flex: 1 1 100%;  
  margin-right: 140px;  

  @media(max-width: 768px) {
    margin-right: 70px;
  }

  @media(max-width: 480px) {
    margin-right: 35px;
  }
`;

const Displaynone = styled.div`
opacity:0%
`;


export default RegistrationForm;

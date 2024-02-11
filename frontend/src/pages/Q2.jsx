<<<<<<< HEAD
import React, { useState } from 'react';
import { Stack, Text, Box, Button, Select } from '@chakra-ui/react';

export default function Q2() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleBoxClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    // Perform any necessary actions before navigating to Q3
    console.log("Selected option:", selectedOption);
    // Example: Navigation to Q3 (replace with actual navigation logic)
    // history.push('/q3');
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      maxWidth="100%"
      background="#5F5F5F"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      padding="2rem"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontFamily="Inter"
        fontWeight="semibold"
        fontSize="32px"
        color="#F5FCFD"
        width="100%"
        textAlign="center"
      >
        What is your most important short-term goal?
      </Text>
      <Box
        onClick={handleBoxClick}
        width="300px"
        height="100px"
        background="#FCBCDC"
        borderRadius="8px"
        marginTop="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
      >
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="20px"
          color="#262626"
        >
          {selectedOption || "Select an option"}
        </Text>
      </Box>
      {showDropdown && (
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          width="300px"
          marginTop="1rem"
        >
          <option value="">Select an option</option>
          <option value="Emergency Funds">Emergency Funds</option>
          <option value="Vacation/Travel">Vacation or Travel</option>
          <option value="Home Down Payment">Home Down Payment</option>
          <option value="Educational/Professional Development">Educational or Professional Development</option>
          <option value="Wedding or Family Events">Wedding or Family Events</option>
          <option value="Major Purchase (car/appliance)">Major Purchase</option>
          <option value="Paying off Credit Card/ Short Term Expense">Paying off Credit Card or Short Term</option>
          <option value="Saving for Special Event">Saving for Special Event</option>
        </Select>
      )}
      <Button
        onClick={handleNextButtonClick}
        marginTop="2rem"
        color="#FFFFFF"
        bg={"#262626"}
        _hover={{ bg: "#262626" }}
      >
        Next
      </Button>
    </Stack>
  );
}
=======
import React, { useState } from 'react';
import { Stack, Text, Box, Button, Select } from '@chakra-ui/react';

export default function Q2() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleBoxClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    // Perform any necessary actions before navigating to Q3
    console.log("Selected option:", selectedOption);
    // Example: Navigation to Q3 (replace with actual navigation logic)
    // history.push('/q3');
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      maxWidth="100%"
      background="#5F5F5F"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      padding="2rem"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        fontFamily="Inter"
        fontWeight="semibold"
        fontSize="32px"
        color="#F5FCFD"
        width="100%"
        textAlign="center"
      >
        What is your most important short-term goal?
      </Text>
      <Box
        onClick={handleBoxClick}
        width="300px"
        height="100px"
        background="#FCBCDC"
        borderRadius="8px"
        marginTop="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
      >
        <Text
          fontFamily="Inter"
          fontWeight="semibold"
          fontSize="20px"
          color="#262626"
        >
          {selectedOption || "Select an option"}
        </Text>
      </Box>
      {showDropdown && (
        <Select
          value={selectedOption}
          onChange={handleOptionChange}
          width="300px"
          marginTop="1rem"
        >
          <option value="">Select an option</option>
          <option value="Emergency Funds">Emergency Funds</option>
          <option value="Vacation/Travel">Vacation or Travel</option>
          <option value="Home Down Payment">Home Down Payment</option>
          <option value="Educational/Professional Development">Educational or Professional Development</option>
          <option value="Wedding or Family Events">Wedding or Family Events</option>
          <option value="Major Purchase (car/appliance)">Major Purchase</option>
          <option value="Paying off Credit Card/ Short Term Expense">Paying off Credit Card or Short Term</option>
          <option value="Saving for Special Event">Saving for Special Event</option>
        </Select>
      )}
      <Button
        onClick={handleNextButtonClick}
        marginTop="2rem"
        colorScheme="teal"
      >
        Next
      </Button>
    </Stack>
  );
}
>>>>>>> origin/main

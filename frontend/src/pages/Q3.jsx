import React, { useState } from 'react';
import { Stack, Text, Box, Button, Select } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Q3() {
  let navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleBoxClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextButtonClick = () => {
    // Perform any necessary actions before navigating to the next question
    console.log("Selected option:", selectedOption);
    // Example: Navigation to the next question (replace with actual navigation logic)
    // history.push('/next-question');
    navigate('/breakdown')
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
        What is your risk tolerance?
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
          <option value="Conservative">Conservative</option>
          <option value="Moderate">Moderate</option>
          <option value="Aggressive">Aggressive</option>
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

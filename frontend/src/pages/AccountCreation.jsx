import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function AccountCreation() {
  let navigate = useNavigate(); 
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Accounts')
    console.log("Form submitted");
  };

  // Define a custom theme to apply global styles
  const customTheme = extendTheme({
    styles: {
      global: {
        // Global styles for the body
        'html, body': {
          backgroundColor: '#5F5F5F', // Setting the background color
          color: 'white', // Adjusting the default text color for better contrast
        },
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Type of Account</FormLabel>
            <Select placeholder="Select account type">
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
              <option value="credit">Credit</option>
            </Select>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Account Nickname</FormLabel>
            <Input placeholder="Nickname" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Balance</FormLabel>
            <Input placeholder="Balance" type="number" />
          </FormControl>

          <Button mt={4} bgColor="#FCBCDC" color="#262626" type="submit">
            Create Account
          </Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default AccountCreation;

import React from 'react';
import { Box, FormControl, FormLabel, Input, Select, Button, ChakraProvider } from '@chakra-ui/react';

function AccountCreation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle submission, like sending data to a server
    console.log("Form submitted");
  };

  return (
    <ChakraProvider>
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

          <Button mt={4} colorScheme="blue" type="submit">Create Account</Button>
        </form>
      </Box>
    </ChakraProvider>
  );
}

export default AccountCreation;

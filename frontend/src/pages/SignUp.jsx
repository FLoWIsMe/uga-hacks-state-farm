// Sign Up
import { Text, Box, Input, VStack, Heading, FormControl, FormLabel, ChakraProvider, Button} from '@chakra-ui/react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    // You can now access form data in the 'formData' object
    console.log(formData);
    navigate('/Accounts')

    // Add your logic for submitting the form data to the server or any other actions
  };

  return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="125vh"
        bg="#5F5F5F"
      >
        <VStack
          spacing={4}
          p={8}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          color="#FFFFFF"
          w="full"
          maxW="md"
        >
          <Heading color="#FFBCDC">Sign Up</Heading>
          <Text color="#FFFFFF">Please enter your details</Text>

          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />
          </FormControl>

          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={formData.email}
            />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={formData.password}
            />
          </FormControl>

          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Address"
              onChange={handleChange}
              value={formData.address}
            />
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              onChange={handleChange}
              value={formData.city}
            />
          </FormControl>

          <FormControl id="state">
            <FormLabel>State</FormLabel>
            <Input
              placeholder="State"
              onChange={handleChange}
              value={formData.state}
            />
          </FormControl>

          <Button
            bg="#FCBCDC"
            color="#262626"
            _hover={{ bg: "#f7a8c4" }}
            w="full"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
  )};

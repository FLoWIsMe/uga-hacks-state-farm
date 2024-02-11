import React from 'react';
import { ChakraProvider, Box, VStack, Input, Button, Heading, Text, FormControl, FormLabel } from '@chakra-ui/react';

function SignUpPage() {
  return (
    <ChakraProvider>
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
          color="#262626"
          w="full"
          maxW="md" // Limits the maximum width of the form
        >
          <Heading color="#262626">Sign Up</Heading>
          <Text color="#262626">Please enter your details</Text>

          <FormControl id="firstName">
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name"/>
          </FormControl>

          <FormControl id="lastName">
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input placeholder="Email" type="email" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" />
          </FormControl>

          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input placeholder="Address" />
          </FormControl>

          <FormControl id="city">
            <FormLabel>City</FormLabel>
            <Input placeholder="City" />
          </FormControl>

          <FormControl id="state">
            <FormLabel>State</FormLabel>
            <Input placeholder="State" />
          </FormControl>

          <Button
            bg="#FCBCDC"
            color="#262626"
            _hover={{ bg: "#f7a8c4" }}
            w="full" // Makes the button full width
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default SignUpPage;

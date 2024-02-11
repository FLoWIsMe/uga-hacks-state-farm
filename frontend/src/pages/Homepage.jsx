import React from 'react';
import { ChakraProvider, Box, VStack, Button, Image } from '@chakra-ui/react';

export default function Homepage() {
  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="#5F5F5F"
      >
        <VStack
          spacing={4}
          p={8}
          alignItems="center"
          color="#262626"
        >
          {/* Placeholder for logo. Replace 'logo.png' with your actual logo path */}
          <Image src="logo.png" boxSize="150px" objectFit="cover" alt="Logo" mb={8} />

          {/* Buttons for Login and Sign Up */}
          <Button
            bg="#FCBCDC"
            color="#262626"
            _hover={{ bg: "#f7a8c4" }}
            w="full" // Makes the button full width within the VStack
            maxW="md" // Limits the maximum width of the button for better aesthetics
            mb={2} // Margin bottom for spacing between buttons
          >
            Login
          </Button>

          <Button
            bg="#FCBCDC"
            color="#262626"
            _hover={{ bg: "#f7a8c4" }}
            w="full" // Makes the button full width within the VStack
            maxW="md" // Limits the maximum width of the button
          >
            Sign Up
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}



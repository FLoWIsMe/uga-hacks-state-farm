import React from 'react';
import { ChakraProvider, Flex, VStack, Button, Box, Heading, Image, IconButton } from '@chakra-ui/react';

export default function Calculating() {
  return (
    <ChakraProvider>
      <Flex height="130vh">
        {/* Navigation Sidebar */}
        <Box bg="#262626" width="250px" color="white" p={4}>
          <VStack spacing={4} align="stretch">
            <Image src="../logo.png" boxWidth="150px" boxHeight="55px" objectFit="cover" alt="Logo" mb={8}></Image> 
            <Button bg="#FFBCDC" color="#262626" _hover={{ bg: "#262626" }}>Allocation</Button>
            <Button bg="#FFBCDC" color="#262626" _hover={{ bg: "#262626" }}>Accounts</Button>
            <Button bg="#FFBCDC" color="#262626" _hover={{ bg: "#262626" }}>Profile</Button>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box flex="1" p={4} bg="#5F5F5F">
          <Heading textColor={"#FFFFFF"}>Calculating your future ...</Heading>
          {/* Pull from API */}
          
          
        </Box>
      </Flex>
    </ChakraProvider>
);
}

import React from 'react';
import { ChakraProvider, Flex, VStack, Button, Box, Heading, Image, IconButton } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Accounts() {
  let navigate = useNavigate();
  return (
    <ChakraProvider>
      <Flex height="130vh">
        {/* Navigation Sidebar */}
        <Box bg="#262626" width="250px" color="white" p={4}>
          <VStack spacing={4} align="stretch">
            <Image src="../logo.png" boxWidth="150px" boxHeight="55px" objectFit="cover" alt="Logo" mb={8}></Image> 
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/q1')}>Allocation</Button>
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/accounts')}>Accounts</Button>
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/')} >Logout</Button>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box flex="1" p={4} bg="#5F5F5F">
          <Heading color={"#FFFFFF"}>Accounts</Heading>
          {/* Pull from API */}
          <IconButton
            aria-label="Add new"
            icon={<FiPlus />}
            isRound={true}
            size="lg"
            position="absolute"
            right="16px"
            top="16px"
            bgColor="#FFBCDC"
            color="#262626"
            onClick={() => navigate('/AccountCreation')}
          />
          
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Accounts;

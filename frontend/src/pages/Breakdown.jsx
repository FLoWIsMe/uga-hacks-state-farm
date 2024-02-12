import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChakraProvider, Box, Flex, Button, VStack, extendTheme } from '@chakra-ui/react';
import { Pie } from 'react-chartjs-2';

export default function Breakdown() {
  let navigate = useNavigate();
  
  // Data for the pie chart
  const data = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };

  // Define a custom theme to apply global styles
  const customTheme = extendTheme({
    styles: {
      global: {
        'html, body': {
          backgroundColor: '#5F5F5F',
          color: 'white',
        },
        '#main-container': {
          minHeight: '100vh',
          padding: '4',
          backgroundColor: '#5F5F5F',
        },
      },
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Flex>
        <Box width="250px" color="white" p={4} bg="#262626">
          <VStack align="stretch">
            <Button color="#262626" bg="#FCBCDC">Navigation 1</Button>
            <Button color="#262626" bg="#FCBCDC">Navigation 2</Button>
            <Button color="#262626" bg="#FCBCDC">Navigation 3</Button>
          </VStack>
        </Box>
        <Box flex="1" p={4} color="white">
          <Pie data={data} />
          <Button mt={4} bgColor="#FCBCDC" color="#262626" onClick={() => navigate('/potential')}>
            See Potential
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

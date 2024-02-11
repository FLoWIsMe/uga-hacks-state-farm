import React from 'react';
import { ChakraProvider, Flex, Box, Heading, Button, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

function Potential() {
  let navigate = useNavigate();

  // Example graph data and options (customize as needed)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Performance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40], // Example data
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <ChakraProvider>
      <Flex height="100vh">
        {/* Navigation Sidebar */}
        <Box bg="#262626" width="250px" color="white" p={4}>
          <VStack spacing={4} align="stretch">
            {/* Reusing the sidebar from the Accounts page */}
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/Breakdown')}>Allocation</Button>
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/Accounts')}>Accounts</Button>
            <Button bg="#FFBCDC" color="#262626" onClick={() => navigate('/')}>Logout</Button>
          </VStack>
        </Box>

        {/* Main Content Area */}
        <Box flex="1" p={4} bg="#5F5F5F">
          <Heading mb={4}>Potential</Heading>
          {/* Graph */}
          <Line data={data} options={options} />

          {/* Navigation Button */}
          <Button
            mt={4}
            bg="#FFBCDC"
            color="#262626"
            onClick={() => navigate('/Accounts')}
          >
            Accounts
          </Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default Potential;

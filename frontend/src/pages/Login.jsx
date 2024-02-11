import React, { useState } from 'react';

import { ChakraProvider, Box, VStack, Input, Button, Heading, Text } from '@chakra-ui/react';

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleLogin = () => {
    // You can now access login credentials in the 'credentials' object
    console.log(credentials);

    // Add your logic for handling login, such as authentication or redirection
  };

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
          borderWidth={1}
          borderRadius="lg"
          boxShadow="lg"
          color="#FFBCDC"
        >
          <Heading color="#262626">Login</Heading>
          <Text color="#262626">Please enter your credentials</Text>
          <Input
            id="username"
            placeholder="Username"
            bg="#FFFFFF"
            onChange={handleChange}
            value={credentials.username}
          />
          <Input
            id="password"
            placeholder="Password"
            type="password"
            bg="#FFFFFF"
            onChange={handleChange}
            value={credentials.password}
          />
          <Button
            bg="#FCBCDC"
            color="#262626"
            onClick={handleLogin}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default LoginPage;

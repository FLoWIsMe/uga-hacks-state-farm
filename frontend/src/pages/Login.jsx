<<<<<<< HEAD
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
=======
// import { Stack, Text, Button, Box, Icon} from '@chakra-ui/react'

// export default function Login() {

// return(
//  <Stack
//    width="100vw"
//    height="100vh"
//    maxWidth="100%"
//    background="#5F5F5F"
//    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
//  >
//    <span className="unsupported" />
//    <Text
//      fontFamily="Inter"
//      fontWeight="regular"
//      fontSize="32px"
//      color="#FFFFFF"
//      width="293px"
//      height="38px"
//      maxWidth="100%"
//      textAlign="center"
//    >
//      Email
//    </Text>
//    <span className="unsupported" />
//    <Text
//      fontFamily="Inter"
//      fontWeight="regular"
//      fontSize="32px"
//      color="#FFFFFF"
//      width="293px"
//      height="38px"
//      maxWidth="100%"
//      textAlign="center"
//    >
//      Password
//    </Text>
//    <Icon>
//      <Box width="415px" height="71px" maxWidth="100%" background="#262626" />
//      <Text
//        fontFamily="Inter"
//        fontWeight="semibold"
//        fontSize="32px"
//        color="#FFFFFF"
//        width="249px"
//        height="56px"
//        maxWidth="100%"
//        textAlign="center"
//      >
//        Next
//      </Text>
//      <Stack width="26px" height="23px" />
//    </Icon>
//    <Stack width="238px" height="87px">
//      <Box width="238px" height="87px" />
//    </Stack>
//    <Box>
//      <Box
//        borderRadius="80px"
//        width="391px"
//        height="83px"
//        maxWidth="100%"
//        background="#FCBCDC"
//      />
//      <Text
//        fontFamily="Inter"
//        fontWeight="semibold"
//        fontSize="32px"
//        color="#000000"
//        width="352px"
//        height="40px"
//        maxWidth="100%"
//        textAlign="center"
//      >
//        Login
//      </Text>
//    </Box>
//  </Stack>
// )
// }

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
>>>>>>> origin/main

import React from 'react';
import { Stack, Text, Box } from '@chakra-ui/react';

export default function Calculating() {

  return (
    <Stack
      width="100vw"
      height="100vh"
      maxWidth="100%"
      background="#5F5F5F"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Stack width="300px" height="900px" maxWidth="100%" background="#262626">
        <Stack width="300px" height="91px" maxWidth="100%" background="#FFBCDC">
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="32px"
            color="#262626"
            width="164px"
            height="33px"
            textAlign="center"
          >
            Allocation
          </Text>
          <Stack width="32px" height="29px" />
        </Stack>
        <Stack width="300px" height="91px" maxWidth="100%" background="#FFBCDC">
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="32px"
            color="#262626"
            width="164px"
            height="33px"
            textAlign="center"
          >
            Accounts
          </Text>
          <Stack width="32px" height="32px" />
        </Stack>
        <Stack width="300px" height="91px" maxWidth="100%" background="#FFBCDC">
          <Text
            fontFamily="Inter"
            fontWeight="semibold"
            fontSize="32px"
            color="#262626"
            width="164px"
            height="33px"
            textAlign="center"
          >
            Profile
          </Text>
          <Stack width="32px" height="32px" />
        </Stack>
        <Stack width="32px" height="32px" />
      </Stack>
      <Stack width="254px" height="96px" maxWidth="100%">
        <Box width="254px" height="96px" maxWidth="100%" />
      </Stack>
      <Text
        fontFamily="Inter"
        fontWeight="semibold"
        fontSize="32px"
        color="#FFFFFF"
        width="1032px"
        height="38px"
        maxWidth="100%"
        textAlign="center"
      >
        Calculating Your Future ...
      </Text>
    </Stack>
  );
};


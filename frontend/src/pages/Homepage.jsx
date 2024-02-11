import { Button, ButtonGroup } from '@chakra-ui/react'
import { Center, Text } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'

export const Homepage = () => (
    <Stack
        width="1357px"
        height="900px"
        maxWidth="100%"
        background="#5F5F5F"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
        <Stack width="238px" height="87px">
            <Box width="238px" height="87px" />
        </Stack>
        <Icon>
            <Box
                borderRadius="80px"
                width="508px"
                height="121px"
                maxWidth="100%"
                background="#FCBCDC"
            />
            <Text
                fontFamily="Inter"
                fontWeight="semibold"
                fontSize="32px"
                color="#262626"
                width="378.98px"
                height="51.54px"
                maxWidth="100%"
                textAlign="center"
            >
                LOGIN
            </Text>
        </Icon>
        <Icon>
            <Box
                borderRadius="80px"
                width="508px"
                height="121px"
                maxWidth="100%"
                background="#FCBCDC"
            />
            <Text
                fontFamily="Inter"
                fontWeight="semibold"
                fontSize="32px"
                color="#262626"
                width="378.98px"
                height="51.54px"
                maxWidth="100%"
                textAlign="center"
            >
                LOGIN
            </Text>
        </Icon>
    </Stack>
)

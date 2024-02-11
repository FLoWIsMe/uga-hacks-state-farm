import { Stack, Text, Icon, Box } from '@chakra-ui/react'


export const Login = () => (
 <Stack
   width="1357px"
   height="900px"
   maxWidth="100%"
   background="#5F5F5F"
   boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
 >
   <span className="unsupported" />
   <Text
     fontFamily="Inter"
     fontWeight="regular"
     fontSize="32px"
     color="#FFFFFF"
     width="293px"
     height="38px"
     maxWidth="100%"
     textAlign="center"
   >
     Email
   </Text>
   <span className="unsupported" />
   <Text
     fontFamily="Inter"
     fontWeight="regular"
     fontSize="32px"
     color="#FFFFFF"
     width="293px"
     height="38px"
     maxWidth="100%"
     textAlign="center"
   >
     Password
   </Text>
   <Icon>
     <Box width="415px" height="71px" maxWidth="100%" background="#262626" />
     <Text
       fontFamily="Inter"
       fontWeight="semibold"
       fontSize="32px"
       color="#FFFFFF"
       width="249px"
       height="56px"
       maxWidth="100%"
       textAlign="center"
     >
       Next
     </Text>
     <Stack width="26px" height="23px" />
   </Icon>
   <Stack width="238px" height="87px">
     <Box width="238px" height="87px" />
   </Stack>
   <Box>
     <Box
       borderRadius="80px"
       width="391px"
       height="83px"
       maxWidth="100%"
       background="#FCBCDC"
     />
     <Text
       fontFamily="Inter"
       fontWeight="semibold"
       fontSize="32px"
       color="#000000"
       width="352px"
       height="40px"
       maxWidth="100%"
       textAlign="center"
     >
       Login
     </Text>
   </Box>
 </Stack>
)
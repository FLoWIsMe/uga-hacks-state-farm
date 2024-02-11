// Q3
import { Stack, Text, Box, Icon } from '@chakra-ui/react'


export const Q3 = () =>
{

return(
 <Stack
   width="1357px"
   height="900px"
   maxWidth="100%"
   background="#5F5F5F"
   boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
 >
   <Text
     fontFamily="Inter"
     fontWeight="semibold"
     fontSize="32px"
     color="#F5FCFD"
     width="1032px"
     height="50px"
     maxWidth="100%"
     textAlign="center"
   >
     What Is Your Risk Tolerance?
   </Text>
   <Stack width="508px" height="121px" maxWidth="100%">
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
       Select an option
     </Text>
   </Stack>
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
     <Stack width="254px" height="96px" maxWidth="100%">
       <Box width="254px" height="96px" maxWidth="100%" />
     </Stack>
   </Stack>
 </Stack>
)
}
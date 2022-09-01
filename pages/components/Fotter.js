import { VStack,
  Box,
  Spacer,
  Text,
  Flex
} from '@chakra-ui/react'
import { FaBeer,FaGithub, FaLinkedin,FaInstagram} from 'react-icons/fa';
import React from 'react'

function Fotter() {
  return (
    <div>
       <VStack border={"2px solid black"} h="25vh"  bg="black" color={'white'}>
        <Box mt={"2rem"} ml='1rem'>
         <Text fontSize={"2xl"}> Null Bytes &#169; copyright reserved 2022 </Text>
        </Box>
        <Spacer>
        </Spacer>
<Flex>
  <Box fontSize={"2xl"} p="1rem"><FaGithub/></Box>
  <Box fontSize={"2xl"}p="1rem"><FaLinkedin/></Box>
  <Box fontSize={"2xl"}p="1rem"><FaInstagram/></Box>
</Flex>
    </VStack>
    </div>
  )
}

export default Fotter
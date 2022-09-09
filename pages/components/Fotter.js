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
       <VStack h="25vh"  bg="#353536" color={'white'}>
        <Box mt={"2rem"} ml='1rem'>
         <Text fontSize={"2xl"}> Null Bytes &#169; copyright reserved 2022 </Text>
        </Box>
        <Spacer>
        </Spacer>
<Flex mb={'2rem'}>
  <Box fontSize={"2xl"} p="1rem"><FaGithub/></Box>
  <Box fontSize={"2xl"}p="1rem"><FaLinkedin/></Box>
  <Box fontSize={"2xl"}p="1rem"><FaInstagram/></Box>
</Flex>
    </VStack>
    </div>
  )
}

export default Fotter
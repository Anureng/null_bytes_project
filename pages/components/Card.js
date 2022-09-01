import React from 'react'
import { HStack,
  Box,
  Spacer,
  Text,
  Flex,
  VStack,
  Stack,
  Wrap,
  Center
} from '@chakra-ui/react'
import Image from 'next/image';
import { FaLinkedinIn,FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from '@chakra-ui/react'

function Card() {
  const [isLargerThan1280] = useMediaQuery('(max-width: 1280px)')
  return (
    <>
    
    <Flex p={'5rem'} flexWrap="wrap" gap={"3.5rem"} border="2px solid pink" w="100vw" h={"100vh"}>
    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/anurag.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Anurag Sidhu <br></br>
      Team Lead
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 
    
    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/deepak.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Deepak ovhal<br></br>
      Team Lead
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn cursor={'pointer'}/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/abhijeet.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Abhijeet Singh<br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/anand.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Anand choudhari <br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/ashish.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Aashish Gajadhane <br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/ankush.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Ankush Sonawne <br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/shyam_1.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- shyam swami <br></br>
      Team member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/saurabh.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- saurabh Jhadav <br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/Swapnil.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Swapnil Thik <br></br>
      Team Member
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 

    <Box border={"2px solid black"} height='53vh' w={'25vw'} p="2rem"  >
      {/* <Box border={'2px solid red'} h='20vh' w={'15vw'}  > */}
        <Image src={'/anurag.jpg'} height="200vh" width={"200vw"} objectFit="cover" border={'2px solid red'}/>
      {/* </Box> */}
    <Text fontSize="2xl">
      Name:- Anurag Sidhu <br></br>
      Team Lead
    </Text>
    <Flex gap="0.7rem" fontSize="2xl" mt="0.1rem">
    <FaLinkedinIn/>
    <FaInstagram/>
    </Flex>
    </Box> 
</Flex>

    </>

  )
}

export default Card
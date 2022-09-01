import { HStack,
  Box,
  Spacer,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'
import Image from 'next/image';
import { FaBeer,FaGithub, FaLinkedin,FaInstagram ,FaUser} from 'react-icons/fa';
import React from 'react'
import Fotter from './Fotter';

function Header() {
  return (
    <>
  <Stack direction={['column', 'row']} padding="1rem"  fontSize={'2xl'} spacing='50px' border={" 2px solid black"} >
    <Box ml={'2rem'}>

   
    <Image src="/logo.png" width="70vw" height="70vh" objectFit='cover' />
    </Box>
    <Spacer></Spacer>
    <nav> Home</nav>
    <nav> About</nav>
    <nav> Contact</nav>
    <nav> Members</nav>
  <Box>
  <FaUser  size={'2rem'} ></FaUser>
  </Box>
  </Stack>
  
  </>
  )
}

export default Header
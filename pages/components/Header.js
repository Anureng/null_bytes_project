import { HStack,
  Box,
  Spacer,
  Text,
  Flex,
  Stack
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image';
import { FaBeer,FaGithub, FaLinkedin,FaInstagram ,FaUser} from 'react-icons/fa';
import React from 'react'
import Fotter from './Fotter';

function Header() {
  return (
    <>
  <Stack direction={['column', 'row']} padding="1rem"  fontSize={'2xl'} spacing='50px'  color='white' bg='#353536'>
    <Box ml={'2rem'}>

    <Link href="./">
          <a>
          <Image src="/logo.png" width="70vw" height="70vh" objectFit='cover' />
          </a></Link>
  
    </Box>
    <Spacer></Spacer>
    <nav> 
      {/* <Text fontSize={'4xl'}  >Home</Text> */}
      <Link href="/">
          <a fontSize={'4xl'}>
          <Text fontSize={'4xl'}  >Home</Text> 
          </a>
        </Link>
    </nav>
    <nav> 
    <Link href="./About">
          <a fontSize={'4xl'}>
          <Text fontSize={'4xl'}  >About</Text> 
          </a></Link>
    </nav>
    <nav> 
    <Link href="./Contact">
          <a fontSize={'4xl'}>
          <Text fontSize={'4xl'}  >Contact</Text> 
          </a></Link>
    </nav>
    <nav> 
    <Link href="./Members">
          <a fontSize={'4xl'}>
          <Text fontSize={'4xl'}  >Member</Text> 
          </a></Link>
    </nav>
  <Box>
  
  </Box>
  </Stack>
  
  </>
  )
}

export default Header
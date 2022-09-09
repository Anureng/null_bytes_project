import { HStack,
  Box,
  Spacer,
  Text,
  Flex,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image';
import { GiHamburgerMenu,GiCancel } from 'react-icons/Gi';
import { useDisclosure} from '@chakra-ui/react'
import React from 'react'

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('right')
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
    <GiHamburgerMenu onClick={onOpen} cursor={"pointer"} size={ '3rem'} color="white"  />
  <Box>
  
  </Box>
  <Drawer  onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent bg="#353536" color={"white"} height="100vh">
          <DrawerHeader borderBottomWidth='1px' display={"flex"} gap={"6rem"} mt={"1rem"} bg="#353536" color="white"> Null Bytes
          <GiCancel onClick={onClose} cursor={"pointer"}/> 
          </DrawerHeader>
          
          <DrawerBody bg="cyan">
          
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
  
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  </Stack>
  

        
  </>
  )
}

export default Header
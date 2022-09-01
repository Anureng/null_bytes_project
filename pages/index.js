import { Box, Button, Center, Heading, HStack ,Spacer,Text} from '@chakra-ui/react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header  from "./components/Header";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
  <>
<Header/>
<Center  h="100vh" w="99vw" overflowX={'hidden'} border={'2px solid blue'}> 
  <Box  p='2rem' ml={'1rem'} mb='19rem' h='50vh' >
    <Heading> Hello Coders</Heading><br/>
    {/* <Text> our community is teach about coding and all. <br/> If your from Bsc or any other degree you get your dream and we will guide you.</Text> */}
    <Text fontSize={'6xl'}>
      we are, </Text><br/>
      <Text fontSize={'9xl'} color='cyan' mr='2rem'>NULL BYTES</Text><br/>
    <Button fontSize={'2xl'} bg='cyan' mt={'1rem'} >Event</Button>
  </Box>
</Center>
<Fotter></Fotter>
  </>
  )
}

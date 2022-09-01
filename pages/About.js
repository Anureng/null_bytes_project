import { Box, Center, VStack,Text, Heading } from '@chakra-ui/react';
import React from 'react'
import Header from "./components/Header";
import Fotter from "./components/Fotter";
function About() {
  return (
    <>
    <Header/>
   <Center border={'2px solid black'} height='90vh'>
<VStack border={'2px solid red'} height='70vh' width={'73vw'} borderRadius='7rem' spacing={'2rem'}>
<Heading mt={'1rem'}>About</Heading> <hr/>
<Text fontSize={'2xl'} p='1rem'> the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations. 
  <br/>
  the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
  <br></br>
  the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.the main body of a book or other piece of writing, as distinct from other material such as notes, appendices, and illustrations.
</Text>
</VStack>
   </Center>
   <Fotter/>
    </>
  )
}

export default About
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Input, Link, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import '../App.css'
import {FaBars} from 'react-icons/fa'
import SmoothScrollLink from '../utils/SmoothScrollLink'

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputRef = useRef()

  return (
    <>
    <Flex display={{base:'none', sm:'flex'}} gap={10} alignItems='center' justifyContent='space-between' w='100%'>
      <Box>
        <Text fontWeight='bold'  bgClip='text' bgGradient='linear(to-l, #7928CA, #178582)' fontSize='xxx-large'>
           Arish Ali
           </Text>
      </Box>
    <Flex bg='white' justifyContent='space-around' w='65%' rounded='16px' p={3} flexWrap='wrap'>
       <SmoothScrollLink to="#home"> <Text className='NavCon'>Home</Text></SmoothScrollLink>
        <SmoothScrollLink to="#about"><Text className='NavCon'>About</Text></SmoothScrollLink>
       <SmoothScrollLink to='#skills'> <Text className='NavCon'>Skills</Text></SmoothScrollLink>
       <SmoothScrollLink to='#stacks'>  <Text className='NavCon'>Stacks</Text></SmoothScrollLink>
       <SmoothScrollLink to='#projects'> <Text className='NavCon'>Projects</Text></SmoothScrollLink> 
       <SmoothScrollLink to='#contact'>  <Text className='NavCon'>Contact</Text></SmoothScrollLink>
    </Flex>
    <Box>
      <Link href='https://drive.google.com/file/d/1vNoscNnEkizqMrIrDt4IBJt92VohefJc/view?usp=sharing' download='ArishAli-FullStackWebDeveloper-XxjR.pdf'>
      <Button bgColor='#178582' color='#0A1828'  fontSize={24} fontWeight='bold'>Resume</Button>
      </Link>
    </Box>
    </Flex>
    <Box display={{base:'block', sm:'none'}} >
        <Flex direction='column' border='1px solid white' rounded='lg'> 
        <FaBars color='white' size={32} onClick={onOpen} />
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={inputRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor='#0A1828' color='#178582'>
          <DrawerCloseButton />
          <DrawerHeader color='#178582' fontWeight='bold' bgClip='text' bgGradient='linear(to-l, #7928CA, #178582)' fontSize='40px' textAlign='center'>Arish Ali</DrawerHeader>

          <DrawerBody>
            <Flex direction='column' alignItems='center' justifyContent='space-around' h='100%'>
            <Flex w='80%' bg='#178582' color='#0A1828' rounded='lg' flexWrap='wrap' gap={4} p={5} justifyContent='space-around'>
              <Text className='NavCon1'>Home</Text>
              <Text className='NavCon1'>About</Text>
              <Text className='NavCon1'>Skills</Text>
              <Text className='NavCon1'>Stacks</Text>
              <Text className='NavCon1'>Projects</Text>
              <Text className='NavCon1'>Contact</Text>
            </Flex>
            <Box>
            <Link href='https://drive.google.com/file/d/1vNoscNnEkizqMrIrDt4IBJt92VohefJc/view?usp=sharing' download='ArishAli-FullStackWebDeveloper-XxjR.pdf'>
      <Button bgColor='#178582' fontSize={24} fontWeight='bold'>Resume</Button>
      </Link>
            </Box>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' color='#178582' fontWeight='bold' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        </Flex>
    </Box>
    </>
  )
}

export default Navbar
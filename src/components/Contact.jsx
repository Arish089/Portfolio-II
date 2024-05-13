import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <Box p={5} w='100%' id='contact'>
  <Flex direction='column' m='auto' w={{base:'90%',sm:'65%',md:'50%'}} bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center' gap={8} py={5} px={{base:1,md:5}} rounded='lg' border='1px solid darkGrey'>
  
  <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
      Contact
      </Heading>

      <Flex flexWrap='wrap' w='100%' justifyContent='space-around' gap={2} p={{base:1,md:5}}>
        
        <Flex bgColor='#0A1828' flexWrap='wrap' rounded='lg' border='1px solid #178582'  alignItems='center' gap={2} color='#178582' p={2}>
            <FaEnvelope />
            <Link href='mailto:arish.ali089@gmail.com'>
            <Text>arish.ali089@gmail.com</Text>
            </Link>
        </Flex>
        <Flex bgColor='#0A1828' flexWrap='wrap' rounded='lg' border='1px solid #178582' alignItems='center' gap={2} color='#178582' p={2}>
            <FaPhone />
            <Text>+91-8340194014</Text>
        </Flex>
        <Flex bgColor='#0A1828' flexWrap='wrap' rounded='lg' border='1px solid #178582' alignItems='center' gap={2} color='#178582' p={2}>
        <FaLinkedin />
            <Link href='https://www.linkedin.com/in/arish-ali-7416261b7/'>
            <Text>Arish Ali</Text>
            </Link>
        </Flex>
        <Flex bgColor='#0A1828' flexWrap='wrap' rounded='lg' border='1px solid #178582' alignItems='center' gap={2} color='#178582' p={2}>
        <FaGithub />
            <Link href='https://github.com/Arish089'>
            <Text>Arish Ali</Text>
            </Link>
        </Flex>
      </Flex>
      </Flex></Box>
  )
}

export default Contact
import { Box, Flex, Heading, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Box p={5}  w='100%'>
<Flex direction='column' gap={10} bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center' textAlign='center' p={5} rounded='lg' border='0.5px solid darkGrey' > 
<Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40}>
  About Me
</Heading>
  <Image src='https://i.postimg.cc/SsZjchVj/DP.jpg' w='20%'  />
  <Text color='#178582' fontSize='20' fontWeight='semibold' >

  <Text color='mediumseagreen' fontSize='24'>Hey, I'm Arish Ali</Text> 
  A proactive MERN stack developer skilled in <span style={{color:'mediumseagreen'}}>MongoDB, Express.js, React, and Node.js,</span> with additional expertise in <span style={{color:'mediumseagreen'}}>Next.js,
   data structures, algorithms (DSA), and Python.</span> Proficient in bridging the gap between server-side and client-side development,
    I excel at crafting dynamic web applications using <span style={{color:'mediumseagreen'}}>RESTful APIs</span>  for an enhanced user experience. With strong problem-solving
     skills and a collaborative mindset, I continuously strive to deliver outstanding outcomes. Let's build something amazing together!
  </Text>
</Flex>
<Image />
    </Box>
  )
}

export default About
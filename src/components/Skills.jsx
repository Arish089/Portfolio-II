import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Skills = () => {
  return (
    <Box p={5} w='100%' id='skills'>
        <Flex direction='column' bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center'  p={{base:1,md:5}} rounded='lg' border='0.5px solid darkGrey'>
        
        <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
            Skills
            </Heading>

            <Flex justifyContent='space-around' gap={5} w='100%' p={{base:2,md:5}} flexWrap='wrap'>

                <Flex className='skills' direction='column' bg='#0A1828' color='#178582' alignItems='center'  gap={2} rounded='lg' border='2px solid black' >
                    <Image src='https://www.htmlpanda.com/assets-new/images/front-end-logo-black.png' w='50%' />
                    <Flex direction='column' borderTop='2px solid black' bgColor='rgb(15, 15, 19)'  w='100%' flexWrap='wrap' alignItems='center' gap={5} py={5} >
                        <Text fontSize={28} color='seagreen' fontWeight='semibold'>Front End</Text>
                        <Text fontSize={18} fontWeight='semibold'>HTML, CSS, Javascript, react.js & next.js</Text>
                    </Flex>
                </Flex>

                <Flex className='skills' direction='column' bg='#0A1828' color='#178582' alignItems='center'   gap={2} rounded='lg' border='2px solid black'>
                    <Image src='https://www.htmlpanda.com/assets-new/images/front-end-logo-black.png'  w='50%'/>
                    <Flex direction='column' borderTop='2px solid black' bgColor='rgb(15, 15, 19)'  w='100%' flexWrap='wrap' alignItems='center' gap={5} py={5} >
                        <Text fontSize={28} color='seagreen' fontWeight='semibold'>Back End</Text>
                        <Text fontSize={18}  fontWeight='semibold'>Express, Node.js, MongoDB, Python & DSA</Text>
                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    </Box>
  )
}

export default Skills
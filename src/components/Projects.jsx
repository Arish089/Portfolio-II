import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SwiperContent from '../utils/SwiperContent'

const Projects = () => {
  return (
    <Box p={{base:1,md:5}} w='100%'>
        <Flex direction='column' rounded='lg' border='0.5px solid darkGrey'
         bgImage="url('https://img.freepik.com/premium-photo/abstract-programming-background-with-code-lines-3d-rendering-random-extruded-square-shapes-extruded-reflective-surface-with-pieces-software-developing-code_363039-185.jpg')" 
        w='100%' bgSize='cover' bgRepeat='repeat-y' bgPos='bottom' flexWrap='wrap' alignItems='center'  p={{base:'1',md:5}}>
            <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
            Projects
            </Heading>
            <Box w={{base:'99%',sm:'90%',md:'80%'}}>
              <SwiperContent />
            </Box>
            </Flex>
    </Box>
  )
}

export default Projects
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Stats = () => {
  return (
  <Box p={5} w='100%'>
    <Flex direction='column' bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center'  p={{base:1,md:5}}
    rounded='lg' border='0.5px solid darkGrey'>
  
  <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
      Github Stats
      </Heading>
      <Flex direction='column' alignItems='center' gap={5} p={2}>
        <Flex>
            <Image src='https://raw.githubusercontent.com/Arish089/readme/master/profile-summary-card-output/calm/0-profile-details.svg'/>
        </Flex>
        <Flex flexWrap='wrap' justifyContent='space-between'>
            <Image src='https://raw.githubusercontent.com/Arish089/readme/master/profile-summary-card-output/calm/1-repos-per-language.svg' w='50%'/>
            <Image src='https://raw.githubusercontent.com/Arish089/readme/master/profile-summary-card-output/calm/2-most-commit-language.svg' w='50%'/>
        </Flex>
        <Flex flexWrap='wrap' justifyContent='space-between'>
            <Image src='https://raw.githubusercontent.com/Arish089/readme/master/profile-summary-card-output/calm/3-stats.svg' w='50%'/>
            <Image src='https://raw.githubusercontent.com/Arish089/readme/master/profile-summary-card-output/calm/4-productive-time.svg' w='50%'/>
        </Flex>
      </Flex>
      </Flex></Box>
  )
}

export default Stats
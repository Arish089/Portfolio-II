import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const Tools = () => {
  return (
    <Box p={5} w='100%'>
        <Flex direction='column' bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center' gap={5} py={5} px={{base:1,sm:4,md:16}}
        rounded='lg' border='0.5px solid darkGrey'>
        
        <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
            Tools
            </Heading>
            <Flex justifyContent='space-between'  w='100%' p={{base:1,md:10}} gap={10} flexWrap='wrap' rounded='lg'>
                <Box w={{base:'40%',sm:'30%',md:'20%'}}>
                    <Image src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' w='90%'/>
                </Box>
                <Box w={{base:'40%',sm:'30%',md:'20%'}}>
                    <Image src='https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp' w='90%'/>
                </Box>
                <Box w={{base:'40%',sm:'30%',md:'20%'}}>
                    <Image src='https://blog.kakaocdn.net/dn/BtYd5/btsy6i6iR6d/MaQMnt5wPhrGervuQS6ba1/img.png' w='90%' />
                </Box>
                <Box w={{base:'40%',sm:'30%',md:'20%'}}>
                    <Image src='https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/2.22.1/1714906667089/Microsoft.VisualStudio.Services.Icons.Default' w='90%'/>
                </Box>
            </Flex>
            </Flex></Box>
  )
}

export default Tools
import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const TechStacks = () => {
  return (
    <Box p={5} w='100%' id='stacks'>
        <Flex direction='column' bgColor='rgb(25, 25, 29)' flexWrap='wrap' alignItems='center' gap={5}  py={5} px={{base:1,sm:4,md:16}}
        rounded='lg' border='0.5px solid darkGrey'>
        
        <Heading bgClip='text' bgGradient='linear(to-l, #178582, #142f4e)' fontSize={40} >
            Tech Stacks
            </Heading>
            <Flex justifyContent='space-between' w='100%' bg='white' p={{base:1,md:10}} gap={10} flexWrap='wrap' rounded='lg'>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmou6evgeGnMsU4Kac3TEv60q65uqVigxib1NYMmoFw&s' w='90%'/></Box> 
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_-uc6ZN_kiIA0ks36PBLP5SPgi4Drf7JPhe28Y2WsygjI5SagcNVszXZ_nV6nvik9h4w&usqp=CAU' w='90%' h='30vh'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqP1LidxtOqTEtPDAI7UlbSgo-FRJwWd8lPcXcFWcl3w&s' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://cdn.pixabay.com/photo/2024/03/31/02/11/python-8665904_1280.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDbQlCygAPVWjXuUTGjMu80JP5x9QOrce3Q9JBgJ4Uw&s' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQub3LR_se1t36nRE_fgbIrbk7f9yFeG0iyMqjo1lf1SA&s' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://getlogovector.com/wp-content/uploads/2021/01/tailwind-css-logo-vector.png' w='90%'/></Box>
               <Box w={{base:'36%',sm:'25%',md:'18%'}}> <Image src='https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhh56bp2p4umdkm2xn8nx.png' w='90%'/></Box>  
            </Flex>
            </Flex>
            </Box>
  )
}

export default TechStacks
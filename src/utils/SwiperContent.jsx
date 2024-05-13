import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';

import {Keyboard,Scrollbar, Mousewheel, Navigation, Pagination} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Box, Button, Flex, Image, Link, Text } from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons'

const SwiperContent = ()=> {
    return (
      <>
        <Swiper 
          cssMode={true}
          centeredSlides={true}
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation,Scrollbar, Pagination, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide  >
         <Flex direction='column' gap={8} flexWrap='wrap' color='white' alignItems='center' py={16}>

          <Image src='https://i.postimg.cc/c4cLJZV7/Cronometer-Eat-smarter-Live-better-Google-Chrome-18-03-2024-00-01-16.png' w={{base:'90%',sm:'75%',md:'50%'}}/>
          <Flex direction='column' fontSize={{base:16,sm:18,md:22}} fontWeight='semibold' gap={5} flexWrap='wrap' textAlign='center' color='#178582'>
            <Text fontSize={{base:20,sm:24,md:28}} color='seagreen' fontWeight='bold'>Cronometer Webapp</Text>
            <Text >The Cronometer web project is a nutrition tracking platform designed to help users make informed dietary choices.
                    The project aims to provide a user-friendly and informative experience for individuals interested in tracking their nutrition and 
                    promotes mobile responsiveness and compatibility across various devices.
            </Text>
            <Text>Tech Stack: <span style={{color:'seagreen', fontSize:'24px',}}>Javascript | HTML | CSS</span></Text>
          </Flex>

          <Flex justifyContent={{base:'center',sm:'space-between'}} gap={2} w={{base:'80%',sm:'80%',md:'80%'}} flexWrap='wrap'>
          <Link href='https://github.com/Arish089/CW-PROJECT' isExternal={true} target='_blank'>
            <Button bgColor='#178582'>Git Hub <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            <Link href='https://crono-lite.netlify.app/' target='_blank' isExternal={true}>
            <Button bgColor='#178582'>Live Site <ExternalLinkIcon mx='2px' /></Button>
            </Link>
          </Flex>

         </Flex>
         </SwiperSlide>

          <SwiperSlide  >
          <Flex direction='column' gap={8} flexWrap='wrap' color='white' alignItems='center' py={16}>

          <Image src='https://i.postimg.cc/QCmGbn5j/Screenshot-36.png'  w={{base:'90%',sm:'75%',md:'50%'}}/>

          <Flex direction='column' fontSize={{base:16,sm:18,md:22}} fontWeight='semibold' gap={5} flexWrap='wrap' textAlign='center' color='#178582'>
            <Text fontSize={{base:20,sm:24,md:28}} color='seagreen' fontWeight='bold'>Youtube-Midas</Text>
            <Text >This React YouTube project is a SPA built by using Vite and React frameworks, designed to provide users with a seamless and efficient 
        experience for browsing and watching YouTube videos. It leverages modern web technologies to deliver a fast, ultra-responsive, and feature-rich user interface.
            </Text>
            <Text>Tech Stack: <span style={{color:'seagreen', fontSize:'24px'}}>React | Vite | HTML | Tailwindcss | RESTful API</span></Text>
          </Flex>

          <Flex justifyContent={{base:'center',sm:'space-between'}} gap={2} w={{base:'80%',sm:'80%',md:'80%'}} flexWrap='wrap'>
            <Link href='https://github.com/Arish089/youtube_midas' isExternal={true} target='_blank'>
            <Button bgColor='#178582'>Git Hub <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            <Link href='https://youtube-midas.netlify.app/' target='_blank' isExternal={true}>
            <Button bgColor='#178582'>Live Site <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            </Flex>

         </Flex>
          </SwiperSlide>
          
          <SwiperSlide  >
         <Flex direction='column' gap={8} flexWrap='wrap' color='white' alignItems='center' py={16}>

          <Image src='https://i.postimg.cc/Y0wTR6k1/Document-Google-Chrome-18-03-2024-00-27-55.png' w={{base:'90%',sm:'75%',md:'50%'}}/>

          <Flex direction='column' fontSize={{base:16,sm:18,md:22}} fontWeight='semibold' gap={5} flexWrap='wrap' textAlign='center' color='#178582'>
            <Text fontSize={{base:20,sm:24,md:28}} color='seagreen' fontWeight='bold'>Tata-1mg</Text>
            <Text >It is a clone of popular healthcare platform Tata-1Mg, owned by Tata, built by using MERN stack .
                     It is a single page application incorporating firebase authentication, authorization, browsing products, search functionality, adding to cart functionality and
                     integrating payment gateway powered by Razorpay. It is highly responsive and has rich user interface. The API requests and CRUD operations are handled using express in
                      node.js environment with MongoDB used as database to store data. The frontend is deployed on netlify and backend on render.  
            </Text>
            <Text>Tech Stack: <span style={{color:'seagreen', fontSize:'24px'}}>React | Vite | MongoDB | Express | Node.js | RESTful API | CRUD | Firebase | Chakra UI | Payment Gateway</span></Text>
          </Flex>

          <Flex justifyContent={{base:'center',sm:'space-between'}} gap={2} w={{base:'80%',sm:'80%',md:'80%'}} flexWrap='wrap'>
            <Link href='https://github.com/Arish089/CW-2/' isExternal={true} target='_blank'>
            <Button bgColor='#178582'>Git Hub <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            <Link href='https://tata-1mgs.netlify.app/' target='_blank' isExternal={true}>
            <Button bgColor='#178582'>Live Site <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            </Flex>

         </Flex>
          </SwiperSlide>
          <SwiperSlide  >
         <Flex direction='column' gap={8} flexWrap='wrap' color='white' alignItems='center' py={16}>

          <Image src='https://i.postimg.cc/JnCTCRg8/Document-Google-Chrome-18-03-2024-00-27-32.png' w={{base:'90%',sm:'75%',md:'50%'}}/>

          <Flex direction='column' fontSize={{base:16,sm:18,md:22}} fontWeight='semibold' gap={5} flexWrap='wrap' textAlign='center' color='#178582'>
            <Text fontSize={{base:20,sm:24,md:28}} color='seagreen' fontWeight='bold'>Movix_</Text>
            <Text >It is a movie info app, incorporating firebase in three modes: anonymous, google, and email authentication. It has extremely rich interface and is
                    ultra responsive across all screens with elegant theme. It lets user browse through already defined sections of Movies, Tv soaps, Series, Anime and etc and also lets
                    you search and even look into more details about the respective content.
            </Text>
            <Text>Tech Stack: <span style={{color:'seagreen', fontSize:'24px'}}>React | Vite | Firebase | Chakra UI | RESTful API</span></Text>
          </Flex>

          <Flex justifyContent={{base:'center',sm:'space-between'}} gap={2} w={{base:'80%',sm:'80%',md:'80%'}} flexWrap='wrap'>
            <Link href='https://github.com/Arish089/CW-2.2' isExternal={true} target='_blank'>
            <Button bgColor='#178582'>Git Hub <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            <Link href='https://movix-089.netlify.app/' target='_blank' isExternal={true}>
            <Button bgColor='#178582'>Live Site <ExternalLinkIcon mx='2px' /></Button>
            </Link>
            </Flex>

         </Flex>
          </SwiperSlide>
          
        </Swiper>
      </>
    );
  }

export default SwiperContent
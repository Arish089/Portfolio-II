import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Box, Button, Flex, Link } from '@chakra-ui/react'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechStacks from './components/TechStacks'
import Tools from './components/Tools'
import Stats from './components/Stats'
import Contact from './components/Contact'
import {useNavigate} from 'react-router-dom'

function App() {
  return (
    <Flex direction='column' alignItems={{base:'start',sm:'center'}}  bgColor='#0A1828' p={5} gap={5}>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <TechStacks />
    <Tools />
    <Projects />
    <Stats />
    <Contact />
    <Flex width='100%' justifyContent='center'>
    <Link href='https://drive.google.com/file/d/14Amk-lQ9h3eAaiU4VAoD_wc4zA_hjCpd/view?usp=drive_link' download='ArishAli-FullStackWebDeveloper-jEoK.pdf'>
      <Button bgColor='#178582' color='#0A1828'  fontSize={24} fontWeight='bold'>Resume</Button>
      </Link>
    </Flex>
    </Flex>
    )
}

export default App

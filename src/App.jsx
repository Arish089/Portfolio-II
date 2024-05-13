import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Box, Button, Flex } from '@chakra-ui/react'
import About from './components/About'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import TechStacks from './components/TechStacks'
import Tools from './components/Tools'
import Stats from './components/Stats'
import Contact from './components/Contact'
//#178582
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
      <Button bgColor='#178582' color='#0A1828'>Resume</Button>
    </Flex>
    </Flex>
    )
}

export default App

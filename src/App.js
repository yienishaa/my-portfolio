import React from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './components/Home'
import theme from './CustomTheme'
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact'
import ProjectDescription from './components/Project-Description';


function App() {
  return (
    <ChakraProvider theme={theme} >
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ProjectDescription/>
    </ChakraProvider>
  );
}

export default App;

import React, { useRef } from 'react';
import './styles.css';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './components/Home'
import theme from './CustomTheme'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import ProjectDescription from './components/Project-Description'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion} from "framer-motion";
import {
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  
} from "framer-motion";
import { useInView } from 'react-intersection-observer';

const pages = [
  { id: 1, component: Home },
  { id: 2, component: About },
  { id: 3, component: Projects },
];

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}


function App() {
  return(
    <ChakraProvider theme={theme}>
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='my-portfolio/' element={<Home/>}/>
          <Route path='my-portfolio/about' element={<About/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    </ChakraProvider>
  );
}


export default App;

/*<div style={{ height: 500 }} />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {' '}
        {'is in view? ' + inView}
      </div>
      <motion.div
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 2, ease: 'easeOut' }}
        ref={ref}
        className="magic"
      />*/
 /*<ChakraProvider theme={theme} >
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <ProjectDescription/>
      <Contact/>
    </ChakraProvider>*/
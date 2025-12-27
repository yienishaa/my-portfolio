import React, { useRef } from 'react';
import {Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Home from './components/Home'
import theme from './CustomTheme'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'



import { motion} from "framer-motion";
import {
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  
} from "framer-motion";

const animateWhenInview ={
  initial: {
    opacity:0,
  },
  animate: {
    opacity:1,
    transition:{
      delay:0.5,
    }
  },
};

function App() {

  return (
    <ThemeProvider theme={theme} >
      <motion.div 
      variants={animateWhenInview}
      initial="initial"
      whileInView="animate">
        <Home/>
      </motion.div>
      <motion.div
      variants={animateWhenInview}
      initial="initial"
      whileInView="animate">
        <About/>
      </motion.div> 
      <motion.div
      variants={animateWhenInview}
      initial="initial"
      whileInView="animate">
        <Projects/>
      </motion.div> 
      {Projects.u}
      <motion.div
      variants={animateWhenInview}
      initial="initial"
      whileInView="animate">
        <Contact/>
      </motion.div>  
        
    </ThemeProvider>
    
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
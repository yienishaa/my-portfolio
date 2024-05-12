import React, { useRef } from 'react';
import './styles.css';
import {ChakraProvider} from '@chakra-ui/react';
import Home from './components/Home'
import theme from './CustomTheme'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import ProjectDescription from './components/Project-Description';
import { motion} from "framer-motion";
import {
  useViewportScroll,
  
  useTransform,
  
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';



function App() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 300], [0, 200]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }

  console.log(entry);
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };

  return (
    <ChakraProvider theme={theme} >
      <motion.div>
        <Home/>
        </motion.div>
       
      <motion.div 
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        viewport={{ once: true, amount: 0.8 }}
          >
        <About/>
       
      </motion.div>
      <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={spring}
      >
        <Projects/>
      </motion.div>
      <motion.div>
        <ProjectDescription/>
      </motion.div>
      <motion.div style={{ y: y3, x: 50 }}>
        <Contact/>
      </motion.div>
      
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
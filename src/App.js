import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import theme from './CustomTheme';

import { motion } from 'framer-motion';

const animateWhenInview = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <motion.div variants={animateWhenInview} initial="initial" whileInView="animate">
        <Home />
      </motion.div>

      <motion.div variants={animateWhenInview} initial="initial" whileInView="animate">
        <About />
      </motion.div>

      <motion.div variants={animateWhenInview} initial="initial" whileInView="animate">
        <Projects />
      </motion.div>

      <motion.div variants={animateWhenInview} initial="initial" whileInView="animate">
        <Contact />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
import React from 'react';
import {ChakraProvider,Box} from '@chakra-ui/react';
import About from './components/About'
import theme from './CustomTheme'


function App() {
  return (
    <ChakraProvider theme={theme} >
      <About />
    </ChakraProvider>
  );
}

export default App;

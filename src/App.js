import React from 'react';
import {ChakraProvider,Box} from '@chakra-ui/react';
import TabNav from './components/TabNav';

import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  styles:{
    global: {
      body: {
        bgGradient: 'linear(to-r, gray.300, yellow.400, pink.200)',
      }
    }
  },
})


function App() {
  return (
    <ChakraProvider theme={theme} >
      <TabNav />
    </ChakraProvider>
  );
}

export default App;

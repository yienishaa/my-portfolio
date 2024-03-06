import React from 'react';
import {ChakraProvider,Box} from '@chakra-ui/react';
import TabNav from './components/TabNav';
import theme from './CustomTheme'


function App() {
  return (
    <ChakraProvider theme={theme} >
      <TabNav />
    </ChakraProvider>
  );
}

export default App;

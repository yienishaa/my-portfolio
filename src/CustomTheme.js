import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from './CustomContainerSize';



const theme = extendTheme({
    
    styles:{
        global: {
          'html,body':{
            //height: '100vh',
            bgGradient:'linear(to-tr, #b0abb5 , #a3b2ba )',
            bgRepeat: 'no-repeat',
          },
        },
      },
      components: {
        Container: containerTheme,
      },
})

export default theme;
import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from './CustomContainerSize';
import {headingTheme} from './HeadingTheme';

import "@fontsource/yeseva-one"; 
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

import { modalTheme } from './ModalTheme'




const theme = extendTheme({
  
  colors: {
    brand: {
      100: "#FFC8A5",
      200: "#FCB5AD",
      300: "#FFA2B1",
      400: "#F090B7",
      500: "#DB98B9",
      600: "#B796B9",
      700: "#9F8FB6",
      1000: "#120A8F",
      2000: "#01796F",
    },
    textBrand:{
      100: "#E7E4E3",
      200: "#E9ECEF",
      300: "#DEE2E6",
      400: "#CED4DA",
      500: "#ADB5BD",
      600: "#6C757D",
      700: "#495057",
      800: "#343A40",
      900: "#212529",
    },
  },
    
  styles:{
        global: {
          'html,body':{
            //bgGradient:'linear(to-b, brand.700 , brand.600, brand.500 ,brand.400, brand.300, brand.200, brand.100)',
            bgGradient:'linear(to-b, brand.2000 , brand.1000 )',
            bgRepeat: 'no-repeat',
            fontFamily: 'montserrat',
          },
          'heading':{
            fontFamily: 'yeseva-one',
          }
        },
      },
  components: {
     Container: containerTheme,
     Heading: headingTheme,
     Modal: modalTheme,
  },
  
})

export default theme;


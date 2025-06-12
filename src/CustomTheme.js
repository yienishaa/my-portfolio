import { extendTheme } from '@chakra-ui/react';
import { containerTheme } from './CustomContainerSize';
import {headingTheme} from './HeadingTheme';
import { buttonTheme } from './ButtonTheme'




import "@fontsource/yeseva-one"; 
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style

import { modalTheme } from './ModalTheme'


// These are the default breakpoints
const breakpoints = {
  base: '0em', // 0px
  sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
  md: '48em', // ~768px
  lg: '62em', // ~992px
  xl: '80em', // ~1280px
  '2xl': '96em', // ~1536px
}



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
      1001:"#C2F970",
      2001: "#203E84",
      
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
    breakpoints: {
      base: '0em', // 0px
      sm: '30em', // ~480px. em is a relative unit and is dependant on the font-size.
      md: '48em', // ~768px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    },
  },
    
  styles:{
        global: {
          'html,body':{
            //bgGradient:'linear(to-b, brand.700 , brand.600, brand.500 ,brand.400, brand.300, brand.200, brand.100)',
            bgGradient:'linear(to-t, brand.100 ,brand.2001 )',
            bgRepeat: 'no-repeat',
            fontFamily: 'montserrat',
            fontWeight: '400',
            FontFace: 'normal',
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
     Button: buttonTheme,
  },
  
})

export default theme;


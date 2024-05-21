import { defineStyle, defineStyleConfig } from '@chakra-ui/react'




const outline = defineStyle({
    border: '2px dashed', // change the appearance of the border
    borderRadius: 0, // remove the border radius
    fontWeight: 'semibold', // change the font weight
  })

  const brandPrimary = defineStyle({
    borderColor: 'white',
    borderRadius: '10',
    bg: 'textBrand.100',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    FontFace: 'normal',
    height: '100px',
    border: '1px',
  
    _hover: {
      background: "brand.2000",
      color: "white",
      borderColor: 'brand.2000',
    }
  })

  const projectButtons = defineStyle({
    borderColor: 'white',
    borderRadius: '10',
    bg: 'textBrand.100',
    fontFamily: 'Montserrat',
    fontWeight: '300',
    FontFace: 'normal',
    height: '100px',
    border: '1px',

    _hover: {
      background: "brand.2000",
      color: "white",
      borderColor: 'brand.2000',
    }
            
  })
  
  export const buttonTheme = defineStyleConfig({
    variants: { brandPrimary, outline, projectButtons },
  })
  
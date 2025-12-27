import { modalAnatomy as parts } from '@mui/material'
import { createMultiStyleConfigHelpers } from '@mui/material'

import logos from './components/images/25703377_10667651479944.svg'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: 'blackAlpha.200', //change the background
    
  },
  dialog: {
    borderRadius: 'md',
    backgroundImage: logos,
    backgroundPosition: 'bottom 10% right 5%',
    backgroundSize: '60%',
    backgroundRepeat: 'no-repeat',
    bg: 'brand.2001 ',
    
    
  },
})

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
})
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"
import "@fontsource/yeseva-one"; 

const custom = defineStyle({
    color: 'textBrand.100',
    fontFamily: 'yeseva one',
    fontSize: '7xl',
})

// export the component theme
export const headingTheme = defineStyleConfig({
    variants: {
        "custom": custom,
    },
})
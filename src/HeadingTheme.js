import { defineStyle, defineStyleConfig } from "@mui/material"
import "@fontsource/yeseva-one"; 

const custom = defineStyle({
    color: 'textBrand.100',
    fontFamily: 'yeseva one',
    fontSize: '7xl',
})
const mobile = defineStyle({
    color: 'textBrand.100',
    fontFamily: 'yeseva one',
    fontSize: '3xl',
})

// export the component theme
export const headingTheme = defineStyleConfig({
    variants: {
        "custom": custom,
        "mobile": mobile,
    },
})
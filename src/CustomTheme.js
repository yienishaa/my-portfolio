import { extendTheme } from "@chakra-ui/react"


const theme = extendTheme({
    
    styles:{
        global: {
          'html,body':{
            height: '100vh',
            bgGradient:'linear(to-tr, #b0abb5 , #a3b2ba )',
            bgRepeat: 'no-repeat',
          },
        },
      },
})

export default theme;
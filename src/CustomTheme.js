import { extendTheme } from "@chakra-ui/react"
import { tabsTheme } from "./components/TabNavStyle";
import { cardTheme } from "./components/CardStyle";

const theme = extendTheme({
    components: {
        Tabs: tabsTheme,
        Card: cardTheme,
    },
    styles:{
        global: {
          body: {
            bgGradient: 'linear(to-r, gray.300, yellow.400, pink.200)',
          },
          
        },
      },
})

export default theme;
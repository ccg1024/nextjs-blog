import { ChakraProvider } from '@chakra-ui/react'
import blogTheme from '@/lib/theme'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={blogTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

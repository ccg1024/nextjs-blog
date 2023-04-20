import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/components/layout'
import blogTheme from '@/lib/theme'
import '../styles/global.css'

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={blogTheme}>
      <Layout route={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

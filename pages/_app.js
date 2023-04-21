import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Layout from '@/components/layout'
import Font from '@/lib/font'
import blogTheme from '@/lib/theme'
import '../styles/global.css'

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={blogTheme}>
      <Font />
      <Layout route={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

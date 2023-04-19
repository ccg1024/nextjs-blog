import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// change global style
const styles = {
  global: props => ({
    body: {
      bg: mode('white', 'gray.50')(props)
    }
  })
}

const blogTheme = extendTheme({
  styles: styles
})

export default blogTheme

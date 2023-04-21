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

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#63B3ED', '#ED64A6')(props),
      textUnderlineOffset: 2
    })
  },
  Text: {
    variants: {
      'link-text': props => ({
        color: mode('#63B3ED', '#ED64A6')(props),
        fontFamily: "'M Plus Rouned 1c'"
      })
    }
  }
}

const blogTheme = extendTheme({
  styles: styles,
  components: components
})

export default blogTheme

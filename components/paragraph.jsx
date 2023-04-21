import React from 'react'
import { Box, Text, Heading, useColorModeValue } from '@chakra-ui/react'

export function Paragraph({ children }) {
  return (
    <Box marginY={4}>
      <Text textIndent="1rem">{children}</Text>
    </Box>
  )
}

export function ParagraphHead({ children }) {
  return (
    <Box marginY={4}>
      <Heading
        as="h3"
        fontSize="1.5rem"
        fontFamily="'M Plus Rounded 1c'"
        textDecoration="underline"
        textUnderlineOffset={6}
        textDecorationThickness={4}
        textDecorationColor={useColorModeValue(
          'blackAlpha.500',
          'whiteAlpha.400'
        )}
      >
        {children}
      </Heading>
    </Box>
  )
}

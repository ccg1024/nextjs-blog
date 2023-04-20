import React from 'react'
import { Box, Text, Heading } from '@chakra-ui/react'

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
        textDecoration="underline"
        textUnderlineOffset={6}
        textDecorationThickness={4}
        textDecorationColor="blackAlpha.500"
      >
        {children}
      </Heading>
    </Box>
  )
}

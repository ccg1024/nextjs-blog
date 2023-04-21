import React from 'react'
import { Box, Center, useColorModeValue } from '@chakra-ui/react'

export default function IndexHead({ infoData }) {
  return (
    <Box
      backgroundColor={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
      padding={2}
      borderRadius={5}
      boxShadow="lg"
    >
      <Center fontSize="1.2rem" fontWeight="bold">
        {infoData}
      </Center>
    </Box>
  )
}

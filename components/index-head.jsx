import React from 'react'
import { Box, Center } from '@chakra-ui/react'

export default function IndexHead({ infoData }) {
  return (
    <Box
      backgroundColor="blackAlpha.50"
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

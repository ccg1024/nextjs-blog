import React from 'react'
import Link from 'next/link'
import { Center, Heading, Button, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function NotFound() {
  return (
    <Box>
      <Center marginY={4}>
        <Heading>The page not Found!!!</Heading>
      </Center>
      <Center>
        <Button colorScheme="teal" rightIcon={<ChevronRightIcon />}>
          <Link href="/">Go Home</Link>
        </Button>
      </Center>
    </Box>
  )
}

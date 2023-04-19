import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from './navbar'

export default function Layout({ route, children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Crazyboy - Homepage</title>
      </Head>
      <Navbar />
      <Container maxW="container.lg" pt={16}>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

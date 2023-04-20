import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from './navbar'

export default function Layout({ route, children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Homepage</title>
      </Head>
      <Navbar path={route.asPath} />
      <Container maxW="container.lg" pt={20}>
        <Box>{children}</Box>
      </Container>
    </Box>
  )
}

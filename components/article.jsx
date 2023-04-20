import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

export default function Article({ title, children }) {
  return (
    <>
      {title && (
        <Head>
          <title>{title} - blog</title>
        </Head>
      )}
      <Box>{children}</Box>
    </>
  )
}

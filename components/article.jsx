import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'

export default function Article({ title, children }) {
  const newTitle = title ? title + '- blog' : 'Homepage'
  return (
    <>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Box>{children}</Box>
    </>
  )
}

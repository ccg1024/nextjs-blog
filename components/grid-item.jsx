import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Center, Text, Heading } from '@chakra-ui/react'
import styles from '../styles/imageLayer.module.css'

export default function GridItem({ thumbnail, title, href, children }) {
  return (
    <Link href={href}>
      <Box>
        <Box
          zIndex={1}
          position="relative"
          width="100%"
          className={styles.gridItem}
        >
          <Image src={thumbnail} alt={title} fill />
        </Box>
        <Center marginY={2}>
          <Heading as="h5" fontSize="1rem">
            {title}
          </Heading>
        </Center>
        <Text textAlign="center">{children}</Text>
      </Box>
    </Link>
  )
}

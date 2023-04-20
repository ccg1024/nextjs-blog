import React from 'react'
import Image from 'next/image'
import { Box } from '@chakra-ui/react'
import styles from '../styles/imageLayer.module.css'

export default function ImageLayer({ href, alt }) {
  return (
    <Box
      position="relative"
      width="100%"
      boxShadow="lg"
      zIndex={1}
      className={styles.imageLayer}
    >
      <Image src={href} fill alt={alt} />
    </Box>
  )
}

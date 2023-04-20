import React from 'react'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'
import styles from '../styles/imageLayer.module.css'

export default function ImageLayer({ href, alt }) {
  return (
    <Center>
      <Image
        src={href}
        width={200}
        height={150}
        alt={alt}
        className={styles.imageLayer}
      />
    </Center>
  )
}

import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Heading, Center } from '@chakra-ui/react'
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons'
import ImageLayer from './imageLayer'
import { ParagraphHead } from './paragraph'

export const DetailHead = ({ title, date, page }) => {
  return (
    <Flex gap={2} alignItems="start" marginY={8} flexWrap="wrap">
      <Heading as="h2" fontSize="2rem" fontFamily="'M Plus Rounded 1c'">
        {title}
      </Heading>
      <Box display="flex" alignItems="center" gap={2}>
        <Text backgroundColor={'gray.100'} padding={1} borderRadius="lg">
          {date}
        </Text>

        <ArrowRightIcon />

        <Link href="/">
          <Text variant="link-text">Home</Text>
        </Link>

        <ChevronRightIcon />

        <Link href={`/${page}`}>
          <Text variant="link-text">{page}</Text>
        </Link>
      </Box>
    </Flex>
  )
}

export const DetailImage = ({ id, title, coverSub, page, description }) => {
  return (
    <>
      <ImageLayer
        href={`/images/cover/${id}_${coverSub}.png`}
        alt={`${title}`}
      />
      <Center marginY={4}>{description}</Center>
      <ParagraphHead>{page}</ParagraphHead>
    </>
  )
}

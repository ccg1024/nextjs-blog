import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react'
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Article from '@/components/article'
import ImageLayer from '@/components/imageLayer'
import { ParagraphHead } from '@/components/paragraph'
import Section from '@/components/section'
import MarkComponent from '@/components/markdown'
import { getNoteList, getNoteData } from '@/lib/posts'

const NoteHead = ({ title, date }) => {
  return (
    <Flex gap={2} alignItems="start" marginY={8} flexWrap="wrap">
      <Heading as="h2" fontSize="2rem">
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

        <Link href="/note">
          <Text variant="link-text">Note</Text>
        </Link>
      </Box>
    </Flex>
  )
}

const Note = ({ noteData }) => {
  return (
    <Article title={'note'}>
      <Section delay={0.1}>
        <ImageLayer
          href={`/images/cover/${noteData.id}_note.png`}
          alt={`${noteData.title}`}
        />
        <ParagraphHead>Note</ParagraphHead>
      </Section>

      <Section delay={0.2}>
        <NoteHead title={noteData.title} date={noteData.date} />

        <Divider />

        <Box marginY={4}>
          <MarkComponent imgPrex={`/images/notes/${noteData.id}/`}>
            {noteData.content}
          </MarkComponent>
        </Box>
      </Section>
    </Article>
  )
}

export async function getStaticPaths() {
  // [{params: {id: xxx}}, {}]
  const paths = getNoteList()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const noteData = getNoteData(params.id)
  return {
    props: {
      noteData
    }
  }
}

export default Note

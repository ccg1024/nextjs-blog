import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import Article from '@/components/article'
import Section from '@/components/section'
import MarkComponent from '@/components/markdown'
import { DetailHead, DetailImage } from '@/components/detail-page'
import { getMarkdownId, getMarkdownData } from '@/lib/posts'

const Note = ({ noteData }) => {
  return (
    <Article title={'Note'}>
      <Section delay={0.1}>
        <DetailImage
          id={noteData.id}
          title={noteData.title}
          coverSub="note"
          page="Note"
          description={noteData.description}
        />
      </Section>

      <Section delay={0.2}>
        <DetailHead title={noteData.title} date={noteData.date} page="note" />

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
  const paths = getMarkdownId('notes')

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const noteData = getMarkdownData('notes', params.id)
  return {
    props: {
      noteData
    }
  }
}

export default Note

import React from 'react'
import { Box, Divider } from '@chakra-ui/react'
import Article from '@/components/article'
import Section from '@/components/section'
import MarkComponent from '@/components/markdown'
import { DetailHead, DetailImage } from '@/components/detail-page'
import { getMarkdownData, getMarkdownId } from '@/lib/posts'

const Work = ({ workData }) => {
  return (
    <Article title="work">
      <Section delay={0.1}>
        <DetailImage
          id={workData.id}
          title={workData.title}
          coverSub="work"
          page="Work"
          description={workData.description}
        />
      </Section>

      <Section delay={0.2}>
        <DetailHead title={workData.title} date={workData.date} page="work" />

        <Divider />

        <Box marginY={4}>
          <MarkComponent imgPrex={`/images/works/${workData.id}/`}>
            {workData.content}
          </MarkComponent>
        </Box>
      </Section>
    </Article>
  )
}

export async function getStaticPaths() {
  const paths = getMarkdownId('works')

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData = getMarkdownData('works', params.id)

  return {
    props: {
      workData
    }
  }
}

export default Work

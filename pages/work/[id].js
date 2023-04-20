import React from 'react'
import Link from 'next/link'
import { Box, Flex, Text, Heading, Divider } from '@chakra-ui/react'
import { ArrowRightIcon, ChevronRightIcon } from '@chakra-ui/icons'
import Article from '@/components/article'
import ImageLayer from '@/components/imageLayer'
import { ParagraphHead } from '@/components/paragraph'
import Section from '@/components/section'
import MarkComponent from '@/components/markdown'
import { getWorkData, getWorkList } from '@/lib/posts'

const WorkHead = ({ title, date }) => {
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

        <Link href="/work">
          <Text variant="link-text">Work</Text>
        </Link>
      </Box>
    </Flex>
  )
}

const Work = ({ workData }) => {
  return (
    <Article title="work">
      <Section delay={0.1}>
        <ImageLayer
          href={`/images/cover/${workData.id}_work.png`}
          alt={`${workData.title}`}
        />
        <ParagraphHead>Work</ParagraphHead>
      </Section>

      <Section delay={0.2}>
        <WorkHead title={workData.title} date={workData.date} />

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
  const paths = getWorkList()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData = getWorkData(params.id)

  return {
    props: {
      workData
    }
  }
}

export default Work

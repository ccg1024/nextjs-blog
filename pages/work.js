import React from 'react'
import Article from '@/components/article'
import { Container, Box, SimpleGrid } from '@chakra-ui/react'
import Section from '@/components/section'
import { ParagraphHead } from '@/components/paragraph'
import GridItem from '@/components/grid-item'
import { getAllWorks } from '@/lib/posts'

export default function Work({ allWorks }) {
  return (
    <Article title="Work">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <ParagraphHead>Works</ParagraphHead>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            {allWorks &&
              allWorks.map(item => {
                return (
                  <Box
                    key={item.id}
                    border="1px solid black"
                    borderRadius="5px"
                    padding={2}
                  >
                    <GridItem
                      thumbnail={`/images/cover/${item.id}_work.png`}
                      title={item.title}
                      href={`/work/${item.id}`}
                    >
                      {item.description}
                    </GridItem>
                  </Box>
                )
              })}
          </SimpleGrid>
        </Section>
      </Container>
    </Article>
  )
}

export async function getStaticProps() {
  const allWorks = getAllWorks()

  return {
    props: {
      allWorks
    }
  }
}

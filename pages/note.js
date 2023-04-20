import React from 'react'
import { Box, SimpleGrid, Container } from '@chakra-ui/react'
import Article from '@/components/article'
import Section from '@/components/section'
import { ParagraphHead } from '@/components/paragraph'
import GridItem from '@/components/grid-item'
import { getAllNotes } from '@/lib/posts'

export default function Note({ allNotes }) {
  return (
    <Article title="Notes">
      <Container maxW="container.md">
        <Section delay={0.1}>
          <ParagraphHead>Notes</ParagraphHead>
        </Section>
        <Section delay={0.2}>
          <SimpleGrid columns={[1, 1, 2]} gap={8}>
            {allNotes &&
              allNotes.map(item => {
                return (
                  <Box
                    key={item.id}
                    border="1px solid black"
                    borderRadius="5px"
                    padding={2}
                  >
                    <GridItem
                      thumbnail={`/images/cover/${item.id}_note.png`}
                      title={item.title}
                      href={`/note/${item.id}`}
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
  const allNotes = getAllNotes()

  return {
    props: {
      allNotes
    }
  }
}

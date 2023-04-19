import Layout from '@/components/layout'
import { Box, Text, Container, Flex } from '@chakra-ui/react'
import IndexHead from '@/components/index-head'
import { getIndexInfoData } from '../lib/posts'

export default function Home({ infoData }) {
  return (
    <>
      <Layout>
        <Container maxW="container.md">
          <IndexHead infoData={infoData} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const { infoData } = getIndexInfoData()
  return {
    props: {
      infoData: infoData
    }
  }
}

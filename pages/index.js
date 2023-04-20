import Article from '@/components/article'
import { Box, Container, Link, SimpleGrid } from '@chakra-ui/react'
import IndexHead from '@/components/index-head'
import { Paragraph, ParagraphHead } from '@/components/paragraph'
import Section from '@/components/section'
import GridItem from '@/components/grid-item'
import { getIndexInfoData } from '../lib/posts'

export default function Home({ infoData }) {
  return (
    <>
      <Article>
        <Container maxW="container.md">
          <Section delay={0.1}>
            <IndexHead infoData={infoData} />
          </Section>
          <Section delay={0.2}>
            <ParagraphHead>简述</ParagraphHead>
            <Paragraph>
              该项目通过 nextJs 脚手架创建，技术栈为 NextJS ，ReactJS ，ChakraUI
              。尝试构建静态博客网站。项目源码地址为
              <Link href="https://github.com/ccg1024/nextjs-blog.git" pl={2}>
                source
              </Link>
              ，博客内容通过 NextJS 获取 Markdown 文件生成。
            </Paragraph>
          </Section>

          <Section delay={0.3}>
            <ParagraphHead>Notes</ParagraphHead>
            <SimpleGrid columns={[1, 1, 2]} gap={8}>
              <Box>
                <GridItem
                  thumbnail="/images/cover/vim-plug_note.png"
                  title="Novim Plugin"
                  href="/note/vim-plug"
                >
                  Neovim 插件管理工具—— vim-plug
                </GridItem>
              </Box>
              <Box>
                <GridItem
                  thumbnail="/images/cover/lsp-config_note.png"
                  title="LSP config"
                  href="/note/lsp-config"
                >
                  Neovim LSP 配置笔记
                </GridItem>
              </Box>
            </SimpleGrid>
          </Section>

          <Section delay={0.4}>
            <ParagraphHead>Works</ParagraphHead>
            <SimpleGrid columns={[1, 1, 2]} gap={8}>
              <Box>
                <GridItem
                  thumbnail="/images/cover/imarkdown_work.png"
                  title="Imarkdown"
                  href="/work/imarkdown"
                >
                  A cross-platform markdown editor with light/dark preview theme
                </GridItem>
              </Box>
            </SimpleGrid>
          </Section>

          <Section delay={0.5}>
            <ParagraphHead>Info</ParagraphHead>
            <Paragraph>
              This project was inspired by{' '}
              <Link href="https://www.craftz.dog/">
                https://www.craftz.dog/
              </Link>
            </Paragraph>
          </Section>
        </Container>
      </Article>
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

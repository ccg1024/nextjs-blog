import React from 'react'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import ReactMarkdown from 'react-markdown'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco'
import {
  Box,
  Code,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'

import MarkdownStyle from '@/lib/markdown-style'

const MarkComponent = ({ imgPrex, children }) => {
  const colors = {
    blockQuote: useColorModeValue('gray.100', 'blackAlpha.500'),
    code: useColorModeValue('#3d7aed', '#ff63c3')
  }
  return (
    <>
      <MarkdownStyle />
      <ReactMarkdown
        className="preview"
        components={{
          blockquote: ({ node, ...props }) => {
            return (
              <Box
                borderRadius="md"
                bg={colors.blockQuote}
                padding="1rem"
                marginY="1rem"
                boxShadow="lg"
                {...props}
              />
            )
          },
          a: ({ node, ...props }) => {
            return <Link textAlign="justify" {...props} />
          },
          ul: ({ node, ...props }) => {
            props.ordered = 'false'
            return <UnorderedList p={0} {...props} />
          },
          ol: ({ node, ...props }) => {
            props.ordered = 'true'
            return <OrderedList p={0} {...props} />
          },
          li: ({ node, ...props }) => {
            props.ordered = props.ordered.toString()
            return <ListItem textAlign="justify" {...props} />
          },
          p: ({ node, ...props }) => {
            return <Text {...props} />
          },
          img: ({ node, src, alt, ...props }) => {
            if (imgPrex) {
              src = imgPrex + src.split('/')[src.split('/').length - 1]
            }
            return (
              <Image
                src={src}
                alt={alt}
                {...props}
                borderRadius="md"
                boxShadow="lg"
                m="auto"
                marginY="2rem"
              />
            )
          },
          table: ({ node, ...props }) => {
            return (
              <TableContainer mb={2} mt={2} {...props}>
                <Table variant="simple" textAlign="left" {...props} />
              </TableContainer>
            )
          },
          thead: ({ node, ...props }) => {
            return <Thead {...props} />
          },
          tbody: ({ node, ...props }) => {
            return <Tbody {...props} />
          },
          tr: ({ node, ...props }) => {
            delete props.isHeader
            return <Tr {...props} />
          },
          td: ({ node, ...props }) => {
            delete props.isHeader
            return <Td {...props} />
          },
          th: ({ node, ...props }) => {
            delete props.isHeader
            return <Th fontSize="1em" {...props} />
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={docco}
                language={match[1]}
                showLineNumbers="true"
                PreTag="div"
                customStyle={{
                  marginTop: '10px',
                  marginBottom: '10px',
                  borderRadius: '5px'
                }}
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <Code
                fontWeight="bold"
                color={colors.code}
                className={className}
                fontSize="1em"
                backgroundColor="unset"
                {...props}
              >
                {children}
              </Code>
            )
          }
        }}
        remarkPlugins={[remarkGfm, remarkMath]}
      >
        {children}
      </ReactMarkdown>
    </>
  )
}

export default MarkComponent

import React from 'react'
import { Global } from '@emotion/react'

const MarkdownStyle = () => {
  return (
    <Global
      styles={{
        '.preview': {
          padding: '12px',
          textAlign: 'justify',
          fontSize: '1em'
        },
        '.preview h1': {
          fontSize: '2em',
          margin: '10px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h2': {
          fontSize: '1.8em',
          margin: '8px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h3': {
          fontSize: '1.6em',
          margin: '6px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h4': {
          fontSize: '1.4em',
          margin: '4px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h5': {
          fontSize: '1.2em',
          margin: '4px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h6': {
          fontSize: '1em',
          margin: '4px 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview p': {
          margin: '10px 0'
        },
        '.preview ul': {
          margin: '10px 0'
        }
      }}
    />
  )
}

export default MarkdownStyle

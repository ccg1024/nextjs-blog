import React from 'react'
import { Global } from '@emotion/react'

const MarkdownStyle = () => {
  return (
    <Global
      styles={{
        '.preview': {
          textAlign: 'left',
          fontSize: '1rem'
        },
        '.preview h1': {
          fontSize: '2rem',
          margin: '1.5rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h2': {
          fontSize: '1.8rem',
          margin: '1.4rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h3': {
          fontSize: '1.6rem',
          margin: '1.3rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h4': {
          fontSize: '1.4rem',
          margin: '1.2rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h5': {
          fontSize: '1.2rem',
          margin: '1.1rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview h6': {
          fontSize: '1rem',
          margin: '1rem 0',
          fontWeight: 'bold',
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          textDecorationColor: '#A0AEC0'
        },
        '.preview p': {
          margin: '1rem 0'
        }
      }}
    />
  )
}

export default MarkdownStyle

import { Global, css } from '@emotion/react'

export default function Font() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500;700&display=swap');
      `}
    />
  )
}

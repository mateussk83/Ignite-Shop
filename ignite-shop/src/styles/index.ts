import { createStitches } from '@stitches/react'
//configuração do stitches
// e fizemos desestruturação para poder pegar uma informação só de todas essas 
export const {
 config,
 styled,
 css,
 globalCss,
 keyframes,
 getCssText,
 theme,
 createTheme
} = createStitches({
 theme: {
  colors: {
   rocketseat: '#8257e6'
  }
 }
})


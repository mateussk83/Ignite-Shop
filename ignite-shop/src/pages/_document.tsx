import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
 return(
  <Html>
   <Head>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    {/* esta tag serve para renderezar o css no serversizeRender da aplicação resumindo na pagina do next.js */}
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />   
   </Head>
   <body>
    <Main/>
    <NextScript/>
   </body>
  </Html>

 )
}
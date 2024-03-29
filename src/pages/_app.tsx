import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global';

import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';
import { CartContextProvider } from '../contexts/CartContext';


export default function App({ Component, pageProps }: AppProps) {
  
  globalStyles();

  return (
    <Container>
        <CartContextProvider>
        <Header />
      <Component {...pageProps} />
        </CartContextProvider>
    </Container>
  )
}


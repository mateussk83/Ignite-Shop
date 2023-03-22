import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global';

import { Container } from '../styles/pages/app';
import Image from 'next/image';
import { Handbag, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from 'react';
import { Header } from '../components/Header';


export default function App({ Component, pageProps }: AppProps) {
  const [ showModal, setShowModal ] = useState(false)
  
  globalStyles();

  function closeModal() {
    setShowModal(false)
  }
  return (
    <Container>

      
        <Header />
       
      <Component {...pageProps} />

    </Container>
  )
}


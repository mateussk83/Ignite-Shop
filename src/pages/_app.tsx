import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global';

import logoImg from "../assets/logo.svg"
import { Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import { Handbag, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from 'react';
import { Modal } from '../components/modal';


export default function App({ Component, pageProps }: AppProps) {
  const [ showModal, setShowModal ] = useState(false)
  
  globalStyles();

  function closeModal() {
    setShowModal(false)
  }
  return (
    <Container>

      <Header>
        <Image src={logoImg} alt="" />

    
        <button onClick={() => {setShowModal(true)}}>
          
        <Handbag size={32} color="#8D8D99" />
        </button>
      </Header>
        {
          showModal ?
          <Modal closeModal={closeModal}/>
          : <></>
        }

       
      <Component {...pageProps} />

    </Container>
  )
}


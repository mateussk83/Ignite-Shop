import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { HeaderContainer, OpenCartButton } from '../styles/components/header';
import logoImg from "../assets/logo.svg"
import { Handbag, X } from 'phosphor-react';
import { CartModal } from './CartModal';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../contexts/CartContext';

export function Header() {
  const products = useContextSelector(CartContext, (context) => {
    return context.products
})


function teste() {
  console.log(products)
}

 return (
  <HeaderContainer>
      <Image src={logoImg} alt="" />

    <Dialog.Root>
     <Dialog.Trigger asChild onClick={teste}>
      <OpenCartButton><Handbag size={24}/> </OpenCartButton>
     </Dialog.Trigger>
     
     
     <CartModal products={products} />


    </Dialog.Root>
  </HeaderContainer>
 )
}
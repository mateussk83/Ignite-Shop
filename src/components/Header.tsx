import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { HeaderContainer, OpenCartButton } from '../styles/components/header';
import logoImg from "../assets/logo.svg"
import { Handbag, X } from 'phosphor-react';
import { CartModal } from './CartModal';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../contexts/CartContext';
export function Header() {
  const quantity = useContextSelector(CartContext, (context) => {
    return context.quantity
  } )

 return (
  <HeaderContainer>
      <Image src={logoImg} alt="" />

    <Dialog.Root>
     <Dialog.Trigger asChild>
      <OpenCartButton>
        <Handbag size={24}/>
        {quantity > 0 ? <span>{quantity}</span> : null}
        </OpenCartButton>
      
     </Dialog.Trigger>
     
     
     <CartModal />


    </Dialog.Root>
  </HeaderContainer>
 )
}
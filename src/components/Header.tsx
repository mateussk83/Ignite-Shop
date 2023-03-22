import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { HeaderContainer, OpenCartButton } from '../styles/components/header';
import logoImg from "../assets/logo.svg"
import { Handbag, X } from 'phosphor-react';
import { CartModal } from './CartModal';

export function Header() {
 return (
  <HeaderContainer>
      <Image src={logoImg} alt="" />

    <Dialog.Root>
     <Dialog.Trigger asChild>
      <OpenCartButton><Handbag size={24}/> </OpenCartButton>
     </Dialog.Trigger>
     
     
     <CartModal />


    </Dialog.Root>
  </HeaderContainer>
 )
}
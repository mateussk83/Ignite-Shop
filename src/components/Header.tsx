import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { HeaderContainer, OpenCartButton, HeaderContainerSuccess, Container } from '../styles/components/header';
import logoImg from "../assets/logo.svg"
import { Handbag, X } from 'phosphor-react';
import { CartModal } from './CartModal';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../contexts/CartContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function Header() {
  const quantity = useContextSelector(CartContext, (context) => {
    return context.quantity
  } )

  const { pathname } = useRouter()

  const showCardButton = pathname !== '/success'
  return (
    <Container>
      

    {showCardButton ?  (
      
      <HeaderContainer>
      <Link href="/">
      <Image src={logoImg} alt="" />
      </Link>
      
      
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
         ) : 
         <HeaderContainerSuccess>
          <Link href="/">
             <Image src={logoImg} alt="" />
            </Link>
         </HeaderContainerSuccess>
        }
        
        
      </Container>
        )
        
}
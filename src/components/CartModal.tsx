import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { CloseButton, Content, Overlay, Title } from '../styles/components/cartModal';

export function CartModal() {

 return (
  <Dialog.Portal>
      <Overlay>
       <Content>

        <Title>Carrinho de Compra</Title>

        <CloseButton > 
           <X size={24}/>
          </CloseButton>
        


       </Content>
      </Overlay>
     </Dialog.Portal>
 )
}
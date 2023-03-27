import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { IProduct } from '../contexts/CartContext';
import { CloseButton, Content, ContentProduct, ImageProduct, OverAll, Overlay, Quantities, Product, Values, Title } from '../styles/components/cartModal';
import { useContextSelector } from 'use-context-selector'

interface ICartModal {
    products: IProduct[]
}

export function CartModal({ products }: ICartModal) {
  
    return (
        <Dialog.Portal>
            <Overlay>
                <Content>

                    <Title>Carrinho de Compra</Title>

                    <CloseButton >
                        <X size={24} />
                    </CloseButton>



                    {products?.map((product) => {
                        return (
                            <Product>

                                <ImageProduct>

                                </ImageProduct>
                                <ContentProduct>
                                    <span>{product.title}</span>
                                    <strong>R$ 79,90</strong>

                                    <a href="">Remover</a>
                                </ContentProduct>
                            </Product>
                        )
                    })}

                    <OverAll>
                        <Quantities>
                            <span>Quantidade</span>
                            <span>1 Item</span>

                        </Quantities>

                        <Values>
                            <strong>Valor Total</strong>
                            <strong>R$ 270,00</strong>
                        </Values>

                        <button>Finalizar Compra</button>


                    </OverAll>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}
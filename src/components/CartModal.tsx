import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import { X } from 'phosphor-react';
import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { CartContext } from '../contexts/CartContext';
import { usePrice } from '../hooks/usePrice';
import { CloseButton, Content, ContentProduct, ImageProduct, OverAll, Overlay, Quantities, Product, Values, Title } from '../styles/components/cartModal';



export function CartModal() {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const cartProducts = useContextSelector(CartContext, (context) => {
        return context.cartProducts
    })

    const removeProductsFromCart = useContextSelector(CartContext, (context) => {
        return context.removeProductsFromCart
    })

    const quantity = useContextSelector(CartContext, (context) => {
        return context.quantity
    })


    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true)

            const productsToBuy = cartProducts.map((product) => {
                return {
                    price: product.defaultPriceId,
                    quantity: 1,
                }
            })

            const response = await axios.post('/api/checkout', {
                itemsToBuy: productsToBuy,
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch {
            // O certo seria conectar com uma ferramenta de observalidade (Datadog / Sentry / etc...)

            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar ao checkout')
        }
    }

    const price = usePrice()

    return (
        <Dialog.Portal>
            <Overlay>
                <Content>

                    <Title>Carrinho de Compra</Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>



                    {cartProducts?.map((product) => {
                        return (
                            <Product key={product.id}>
                                <ImageProduct src={product.imageUrl} height={101} width={93} alt="" >
                                </ImageProduct>
                                <ContentProduct>
                                    <span>{product.title}</span>
                                    <strong>{new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format((product.price as number) / 100)}</strong>

                                    <a onClick={() => { removeProductsFromCart(product.id) }}>Remover</a>
                                </ContentProduct>
                            </Product>
                        )
                    })}

                    <OverAll>
                        <Quantities>
                            <span>Quantidade</span>
                            <span>{quantity} Item</span>

                        </Quantities>

                        <Values>
                            <strong>Valor Total</strong>
                            <strong>{new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format((price.total as number) / 100)}</strong>
                        </Values>

                        <button onClick={handleBuyProduct}>Finalizar Compra</button>


                    </OverAll>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}
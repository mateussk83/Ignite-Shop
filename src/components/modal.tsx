import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { BodyModal, BodyProduct, Quantities, DetailsProduct, HeaderModal, ImageProduct, ModalContainer, OverAll, Product, Values } from "../styles/components/modal"
interface IModal {
  closeModal(): void
}

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export function Modal({ closeModal }: IModal) {
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([])
  
  let priceAllProducts = 0
  let price = ""

  async function ProductsInCart() {
    try {

      const response = await axios.get('/api/cart', {
      })


      response.data.map((product:any) => {
        setProductsInCart(products => [...products, product])
        })
    }
    catch (err) {
      console.log(err)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  useEffect(() => {
    ProductsInCart()

  }, [priceAllProducts])

  return (

    <ModalContainer>
      <BodyModal>
        <HeaderModal>
          <a onClick={() => { closeModal() }}>
            <X size={24} color="#8D8D99" />
          </a>
        </HeaderModal>

        <Product>
          <h3>Sacola de Compras</h3>

          {
          productsInCart.length > 0 ? 
            productsInCart.map(product => {
              price = String(product.price)
              price = price.substring(3)
              console.log(7 + Number(price))

              return (
                <BodyProduct key={product.id}>
              <Image src={product.imageUrl} width={101} height={93} alt="" ></Image>
              <DetailsProduct>
                <span>{product.title}</span>
                <strong>{product.price}</strong>
                <a><strong>Remover</strong></a>
              </DetailsProduct>
            </BodyProduct>
          )
        })
        : 
        null
      }
        

        </Product>

        <OverAll>
          <Quantities>
            <span>Quantidade</span>
            <span>1 Item</span>
          </Quantities>
          <Values>
            <strong>Valor Total</strong>
            <strong>R$ {String(priceAllProducts)}</strong>
          </Values>

          <a href="">Finalizar Compra</a>

        </OverAll>

      </BodyModal>
    </ModalContainer>

  )
}

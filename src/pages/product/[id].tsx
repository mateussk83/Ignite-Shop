import { CartContext } from "@/src/contexts/CartContext";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Stripe from "stripe";
import { useContextSelector } from "use-context-selector";

interface ProductProps {
  product: {
    id: string;
    title: string;
    imageUrl: string;
    price: number;
    description: string
    defaultPriceId: string
  }
}


export default function Product({ product }: ProductProps) {
  const addProductsToCart = useContextSelector(CartContext, (context) => {
    return context.addProductsToCart
  })

  function handleAddProductToCart() {
    const addNewProductToCart = { ...product }
    console.log(addNewProductToCart)
    addProductsToCart(addNewProductToCart)

  }


  return (
    <>

      <Head>
        <title>{product.title} | Ignite Shop</title>
      </Head>

      <ProductContainer>

        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" priority={true}/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.title}</h1>
          <span>{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format((product.price as number) / 100)}</span>

          <p>{product.description}</p>

          <button onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NUgxQGuDuLXh36' } }
    ],
    fallback: true
  }
}


export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = String(params?.id);


  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        title: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
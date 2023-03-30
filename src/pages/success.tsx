import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string
  orderQuantity: number
  productImages: string[]
}

export default function Success({ customerName, orderQuantity, productImages }: SuccessProps){
 return(
  <>
  <Head>
    <title>Compra efetuada | Ignite Shop</title>
    <meta name="robots" content="noindex"/>
  </Head>

  <SuccessContainer>

   <ImageContainer>
  {
    
    productImages.map((ImageUrl) => {
      return (
        <Image src={ImageUrl} width={120} height={110} alt="" key={ImageUrl}/>    
        )})
      }
  </ImageContainer>
      <h1> Compra Efetuada! </h1>
  
   <p>
    Uhull <strong>{customerName}</strong>, sua compra de {orderQuantity} já está a caminho da sua casa.
   </p>

  <Link href='/'>
  Voltar ao catálogo
  </Link>

  </SuccessContainer>
  </>
 )

}



export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items.data', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const orderQuantity = session.line_items?.data.length
  const productImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  console.log(productImages)
  return {
    props: {
      customerName,
      orderQuantity,
      productImages,
    },
  }
}
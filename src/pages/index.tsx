import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useContextSelector } from "use-context-selector";
import { CartContext, IProduct } from "../contexts/CartContext";

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const addProductsToCart  = useContextSelector(CartContext, (context) => {
    return context.addProductsToCart
  })

  
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (

            <Product key={product.id} className="keen-slider__slide">
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />

              </Link>
              <footer>
                <div>
                  <strong>{product.title}</strong>
                  <span>{new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format((product.price as number) / 100)}</span>
                </div>
                <button
                  onClick={() => {
                    addProductsToCart({
                      id: product.id,
                      title: product.title,
                      imageUrl: product.imageUrl,
                      price: product.price,
                      defaultPriceId: product.defaultPriceId
                    });
                  }}
                >
                  <Handbag size={32} weight="bold" color="#fff" />
                </button>
              </footer>
            </Product>

          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      title: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};

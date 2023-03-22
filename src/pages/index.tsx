import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import { useKeenSlider } from "keen-slider/react";

import { HomeContainer, Product } from "../styles/pages/home";

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

interface HomeProps {
  products: IProduct[];
}

export default function Home({ products }: HomeProps) {
  const [ isCreatingproductInCart, setIsCreatingproductInCart] = useState(false);

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });
  async function handleAddProductInCart({
    id,
    imageUrl,
    title,
    price,
  }: IProduct) {
    try {
      setIsCreatingproductInCart(true);

      const uai = await axios.post("/api/products", {
        product_stripe: id,
        imageUrl: imageUrl,
        title: title,
        price: price,
      });

    } catch (err) {
      //conectar com alguma ferramenta de observabilidade (Datadog/ Sent)
      setIsCreatingproductInCart(false);

      alert("Falha ao redirecionar ao checkout!");
    }
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (

            <Product className="keen-slider__slide">
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
                    handleAddProductInCart({
                      id: product.id,
                      title: product.title,
                      imageUrl: product.imageUrl,
                      price: product.price,
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
      price: price.unit_amount
    };
  });
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};

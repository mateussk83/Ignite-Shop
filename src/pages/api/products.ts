import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


interface IProduct {
  product_stripe: string;
  title: string;
  imageUrl: string;
  price: number;
}

const prisma = new PrismaClient({
  rejectOnNotFound: false,
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
      prisma.product
      const { product_stripe, title, imageUrl, price }:IProduct = req.body;

      const product = await prisma.product.create({
        data: {
          product_stripe,
          title,
          imageUrl,
          price
        }
      })

        console.log(product)
      return res.status(201).json({ product });
    }

  else if (req.method === "GET") {
    const products = await prisma.product.findMany()
    return res.status(200).json(products)
  }

  else if(req.method === "DELETE") {

    const { id }= req.body;

    const productFind = await prisma.product.findFirst({where: {id : id}})

    if(!productFind) {
      return res.status(400).json({message: "User Not Found!"})
    }

    await prisma.product.delete({where: {id : id}})


    // await prisma.product.(id)

    return res.status(200)
  }
}

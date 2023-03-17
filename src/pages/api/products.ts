import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
interface IProduct {
  id_product: string;
  title: string;
  imageUrl: string;
  price: number;
}

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
      const { id_product, title, imageUrl, price }:IProduct = req.body;

      const product = await prisma.product.create({
        data: {     
            id_product,
            title,
            imageUrl,
            price,
          },
        })

        console.log(product)
      return res.status(201).json({ product });
    }

  else if (req.method === "GET") {
    const products = await prisma.product.findMany()
    return res.status(200).json(products)
  }

  else if(req.method === "DELETE") {
    await prisma.product.deleteMany()

    return res.status(200)
  }
}

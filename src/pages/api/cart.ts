import { NextApiRequest, NextApiResponse } from "next";

interface IProduct {
 id: string;
 title: string;
 imageUrl: string;
 price: number;
}

const products = [] as IProduct[]

export default function(req:NextApiRequest, res: NextApiResponse) {

 if(req.method === "POST") {
  const { id, title, imageUrl,price } = req.body;

  const product = {
   id,
   title,
   imageUrl,
   price
  }
  
  products.push(product)
  return res.status(201)
 }

 if(req.method === "GET") {
  return res.json(products)
 }
}
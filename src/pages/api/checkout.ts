import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { itemsToBuy } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!itemsToBuy) {
    return res.status(400).json({ error: 'Items not found' })
  }

  const successUrl = `https://ignite-shop-ptdphotap-mateussk83.vercel.app//success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `https://ignite-shop-ptdphotap-mateussk83.vercel.app//`
  console.log(successUrl)

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: itemsToBuy,
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
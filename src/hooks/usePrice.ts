
import { useContextSelector } from 'use-context-selector'
import { CartContext } from '../contexts/CartContext'

export function usePrice() {
  const cartProducts = useContextSelector(CartContext, (context) => {
   return context.cartProducts
  })

  const price = cartProducts?.reduce(
    (acc, cartItem) => {
      acc.total += cartItem.price

      return acc
    },
    { total: 0 },
  )

  return price
}
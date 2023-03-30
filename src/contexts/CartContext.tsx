import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'


interface CartContextProviderProps {
  children: ReactNode[]
}

export interface IProduct {
  id: string
  title: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface ProductCartProps {
  id: string
  title: string
  imageUrl: string
  price: number
  description?: string
  defaultPriceId: string
}

interface CartContextProps {
  cartProducts: ProductCartProps[]
  quantity: number
  addProductsToCart: (shirt: ProductCartProps) => void
  removeProductsFromCart: (id: string) => void
  orderAlreadyExist: (id: string) => boolean
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<ProductCartProps[]>([])

  const quantity = cartProducts.length

  function addProductsToCart(shirt: ProductCartProps) {
    setCartProducts((state) => [...state, shirt])
  }

  function removeProductsFromCart(id: string) {
    const withoutDeletedOne = cartProducts.filter((cartItem) => {
      return cartItem.id !== id
    })

    setCartProducts(withoutDeletedOne)
  }

  function orderAlreadyExist(id: string) {
    const orderAlreadyExist = cartProducts.some((cartItem) => cartItem.id === id)

    return orderAlreadyExist
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        quantity,
        addProductsToCart,
        removeProductsFromCart,
        orderAlreadyExist,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
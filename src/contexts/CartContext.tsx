import { ReactNode, useCallback, useState } from "react"
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";


export interface IProduct {
  id?: number;
  idStripe: string;
  title: string;
  imageUrl: string;
  price: number;
}

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextType {
  products: IProduct[],
  createProducts: (data: IProduct) => Promise<void>

}

let count = 0

export const CartContext = createContext({} as ProductsContextType)

export function CartProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  const createProducts = useCallback(
    async (data: IProduct) => {
      count =+ 1
      const product = {
        id: count,
        idStripe: data.idStripe,
        imageUrl: data.imageUrl,
        title: data.title,
        price: data.price
      } as IProduct

      setProducts((data) => [product, ...data])
      console.log(products)
    }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        createProducts
      }}
    >
      {children}
    </CartContext.Provider>

  )
}
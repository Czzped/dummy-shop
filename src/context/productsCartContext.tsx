import { useState, createContext, useContext } from "react"
import { IProduct } from "../types/IProduct"

interface CartContextProps {
    productsCart: IProduct[],
    productsCartVisibility: boolean,
    refreshCart: () => void,
    removeProductOnCart: (id: number) => void,
    resetProductsCartVisibility: () => void
}

export const ProductCartContext = createContext({} as CartContextProps)

export function productsCartContextProvider({ children }: { children: React.ReactNode }) {
    const [productsCart, setCartProducts] = useState(Array<IProduct>)
    const [productsCartVisibility, setProductsCartVisibility] = useState(false)

    function refreshCart() {
        const productsOnCart = localStorage.getItem('products-cart') ?? '[]'
        const productsOnCartJSON: IProduct[] = JSON.parse(productsOnCart)

        setCartProducts(productsOnCartJSON)
    }

    function removeProductOnCart(id: number) {
        const filteredProductsOnCart = productsCart.filter(product => product.id !== id)
        setCartProducts(filteredProductsOnCart)
    }

    function resetProductsCartVisibility() {
        setProductsCartVisibility(!productsCartVisibility)
    }

    if (productsCart.length === 0) {
        refreshCart()
    }

    const productsCartContext = {
        productsCart,
        productsCartVisibility,
        refreshCart,
        removeProductOnCart,
        resetProductsCartVisibility
    }

    return (
        <ProductCartContext.Provider value={productsCartContext}>
            {children}
        </ProductCartContext.Provider>
    )
}

export const useProductsCartContext = () => useContext(ProductCartContext)
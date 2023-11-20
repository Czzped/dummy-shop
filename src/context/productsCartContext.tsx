import { useState, createContext, useEffect, useContext } from "react"
import { IProduct } from "../types/IProduct"
import { toast } from "react-toastify"

interface CartContextProps {
    productsCart: IProduct[],
    productsCartVisibility: boolean,
    refreshCart: () => void,
    removeProductOnCart: (id: number) => void,
    resetProductsCartVisibility: () => void,
    addProductOnCart: (newProduct: IProduct) => void
}

export const ProductCartContext = createContext({} as CartContextProps)

export function ProductsCartContextProvider({ children }: { children: React.ReactNode }) {
    const [productsCart, setProductsCart] = useState(Array<IProduct>)
    const [productsCartVisibility, setProductsCartVisibility] = useState(false)

    function refreshCart() {
        const productsOnCart = localStorage.getItem('products-cart') ?? '[]'
        const productsOnCartJSON: IProduct[] = JSON.parse(productsOnCart)

        setProductsCart(productsOnCartJSON)
    }

    function removeProductOnCart(id: number) {
        const filteredProductsOnCart = productsCart.filter(product => product.id !== id)
        setProductsCart(filteredProductsOnCart)
    }

    function resetProductsCartVisibility() {
        setProductsCartVisibility(!productsCartVisibility)
    }

    function addProductOnCart(newProduct: IProduct) {
        const productCartValidation = productsCart.find(product => product.id === newProduct.id)

        if (!productCartValidation) {
            const newProductsCart = [...productsCart, newProduct]
            setProductsCart(newProductsCart)

            return toast('🤑Product added')
        }

        toast('❗Product already added')

    }

    useEffect(() => {
        refreshCart()
    }, [])

    useEffect(() => {
        const stringfiedProductsCart = JSON.stringify(productsCart)
        localStorage.setItem('products-cart', stringfiedProductsCart)
    }, [productsCart])

    const productsCartContext = {
        productsCart,
        productsCartVisibility,
        refreshCart,
        removeProductOnCart,
        resetProductsCartVisibility,
        addProductOnCart
    }

    return (
        <ProductCartContext.Provider value={productsCartContext}>
            {children}
        </ProductCartContext.Provider>
    )
}

export const useProductsCartContext = () => useContext(ProductCartContext)
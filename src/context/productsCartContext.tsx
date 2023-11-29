import { useState, createContext, useEffect, useContext } from "react"
import { IProduct } from "../types/IProduct"
import { toast } from "react-toastify"
import Stripe from "stripe"

interface CartContextProps {
    productsCart: Stripe.Product[],
    productsCartVisibility: boolean,
    refreshCart: () => void,
    removeProductOnCart: (id: string) => void,
    resetProductsCartVisibility: () => void,
    addProductOnCart: (newProduct: Stripe.Product) => void
}

export const ProductCartContext = createContext({} as CartContextProps)

export function ProductsCartContextProvider({ children }: { children: React.ReactNode }) {
    const [productsCart, setProductsCart] = useState(Array<Stripe.Product>)
    const [productsCartVisibility, setProductsCartVisibility] = useState(false)

    function refreshCart() {
        const productsOnCart = localStorage.getItem('products-cart') ?? '[]'
        const productsOnCartJSON: Stripe.Product[] = JSON.parse(productsOnCart)

        setProductsCart(productsOnCartJSON)
    }

    function removeProductOnCart(id: string) {
        const filteredProductsOnCart = productsCart.filter(product => product.id !== id)
        setProductsCart(filteredProductsOnCart)
    }

    function resetProductsCartVisibility() {
        setProductsCartVisibility(!productsCartVisibility)
    }

    function addProductOnCart(newProduct: Stripe.Product) {
        const productCartValidation = productsCart.find(product => product.id === newProduct.id)

        if (!productCartValidation) {
            const newProductsCart = [...productsCart, newProduct]
            setProductsCart(newProductsCart)

            return toast.success('🤑Product added', {
                theme: "dark",
            });
        }

        return toast.error('Product already added', {
            theme: "dark",
        });

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
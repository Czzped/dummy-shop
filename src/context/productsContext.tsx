import { useState, createContext, useContext } from "react"
import { ReactNode } from "react"
import Stripe from "stripe"
import { productsData } from "../lib/stripe"

interface ProductsContextProps {
    products: Stripe.Product[],
    updateProductsData: (newProductsData: Stripe.Product[]) => void,
    resetProductsData: () => void
    filterProducts: (query: string) => void,
    filterProduct: (id: string) => Promise<Stripe.Product>,
    filterCategory: (category: string) => void
}

export const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState(productsData)

    function updateProductsData(newProductsData: Stripe.Product[]) {
        setProducts(newProductsData)
    }

    function resetProductsData() {
        setProducts(productsData)
    }

    async function filterProducts(query: string) {
        const lowerCaseQuery = query.toLocaleLowerCase()
        const filteredProducts = productsData.filter(product => product.name.toLocaleLowerCase().includes(lowerCaseQuery))

        setProducts(filteredProducts)
    }

    async function filterProduct(id: string) {
        const filteredProduct = productsData.find(product => product.id === id) as Stripe.Product

        return filteredProduct
    }

    async function filterCategory(category: string) {
        const filteredProducts = productsData.filter(product => product.metadata.category === category)

        setProducts(filteredProducts)
    }

    const productsContext = {
        products,
        updateProductsData,
        resetProductsData,
        filterProducts,
        filterProduct,
        filterCategory
    }

    return (
        <ProductsContext.Provider value={productsContext}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
import { fetchProductsApi } from "../services/fetchProductsApi"
import { useState, useEffect, createContext, useContext } from "react"
import { IProduct } from "../types/IProduct"
import { ReactNode } from "react"
import Stripe from "stripe"
import { productsData } from "../lib/stripe"

interface ProductsContextProps {
    productsData: Stripe.Product[],
    updateProductsData: (newProductsData: Stripe.Product[]) => void,
    resetProductsData: () => Stripe.Product[],
    filterProducts: (query: string) => void,
    filterProduct: (id: number) => Promise<IProduct>,
    filterCategory: (category: string) => void
}

export const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState(Array<Stripe.Product>)

    useEffect(() => {
        setProducts(productsData)
    }, [])

    function updateProductsData(newProductsData: Stripe.Product[]) {
        setProducts(newProductsData)
    }

    function resetProductsData() {
        fetchProductsApi().then(products => setProducts(products))

        return productsData
    }

    async function filterProducts(query: string) {
        const productsData: Stripe.Product[] = await fetchProductsApi().then(products => products)

        const lowerCaseQuery = query.toLocaleLowerCase()
        const filteredProducts = productsData.filter(product => product.name.toLocaleLowerCase().includes(lowerCaseQuery))

        setProducts(filteredProducts)
    }

    async function filterProduct(id: number) {
        const productsData: IProduct[] = await fetchProductsApi().then(products => products)
        const filteredProduct = productsData.find(product => product.id === id) as IProduct

        return filteredProduct
    }

    async function filterCategory(category: string) {
        const productsData: Stripe.Product[] = await fetchProductsApi().then(products => products)

        const filteredProducts = productsData.filter(product => product.metadata.category === category)

        setProducts(filteredProducts)
    }

    const productsContext = {
        productsData,
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
import { fetchProductsApi } from "../services/fetchProductsApi"
import { useState, useEffect, createContext, useContext } from "react"
import { IProduct } from "../types/IProduct"

interface ProductsContextProps {
    productsData: IProduct[],
    updateProductsData: (newProductsData: IProduct[]) => void,
    resetProductsData: () => IProduct[],
    filterProducts: (query: string) => void,
    filterProduct: (id: number) => Promise<IProduct>
}

export const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [productsData, setProductsData] = useState(Array<IProduct>)

    useEffect(() => {
        fetchProductsApi().then(products => setProductsData(products))
    }, [])

    function updateProductsData(newProductsData: IProduct[]) {
        setProductsData(newProductsData)
    }

    function resetProductsData(originalProductsData = []) {
        fetchProductsApi().then(products => setProductsData(products))

        return productsData
    }

    async function filterProducts(query: string) {
        const productsData: IProduct[] = await fetchProductsApi().then(products => products)

        const lowerCaseQuery = query.toLocaleLowerCase()
        const filteredProducts = productsData.filter(product => product.title.toLocaleLowerCase().includes(lowerCaseQuery))

        setProductsData(filteredProducts)
    }

    async function filterProduct(id: number) {
        const productsData: IProduct[] = await fetchProductsApi().then(products => products)
        const filteredProduct = productsData.find(product => product.id === id) as IProduct

        return filteredProduct
    }

    const productsContext = {
        productsData,
        updateProductsData,
        resetProductsData,
        filterProducts,
        filterProduct
    }

    return (
        <ProductsContext.Provider value={productsContext}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
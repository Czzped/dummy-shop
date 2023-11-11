import { fetchProductsApi } from "../services/fetchProductsApi"
import { useState, useEffect, createContext, useContext } from "react"
import { IProduct } from "../types/IProduct"

interface ProductsContextProps {
    productsData: IProduct[],
    updateProductsData: (newProductsData: IProduct[]) => void,
    resetProductsData: () => IProduct[],
    filterProducts: (query: string) => void
}

export const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsContextProvider({ children }: { children: React.ReactNode }) {
    const [originalProductsData, setOriginalProductsData] = useState(Array<IProduct>)
    const [productsData, setProductsData] = useState(Array<IProduct>)

    function updateProductsData(newProductsData: IProduct[]) {
        setProductsData(newProductsData)
    }

    function resetProductsData() {
        setProductsData(originalProductsData)

        return productsData
    }

    function filterProducts(query: string) {
        const lowerCaseQuery = query.toLocaleLowerCase()
        const filteredProducts = originalProductsData.filter(product => product.title.toLocaleLowerCase().includes(lowerCaseQuery))

        setProductsData(filteredProducts)
    }

    const productsContext = {
        productsData,
        updateProductsData,
        resetProductsData,
        filterProducts
    }

    useEffect(() => {
        fetchProductsApi().then(products => setOriginalProductsData(products))
        resetProductsData()
    }, [])

    return (
        <ProductsContext.Provider value={productsContext}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
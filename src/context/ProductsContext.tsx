import { fetchProductsApi } from "../services/fetchProductsApi"
import { useState, useEffect, createContext } from "react"
import { IProduct } from "../types/IProduct"

export const ProductsContext = createContext({})

export function UseProductsContext({ children }: { children: React.ReactNode }) {
    const [productsData, setProductsData] = useState(Array<IProduct>)

    useEffect(() => {
        fetchProductsApi().then(products => setProductsData(products))
    }, [])

    function updateProductsData(newProductsData: IProduct[]) {
        setProductsData(newProductsData)
    }

    function resetProductsData() {
        fetchProductsApi().then(products => setProductsData(products))
    }

    const productsContext = {
        productsData,
        updateProductsData,
        resetProductsData
    }

    return (
        <ProductsContext.Provider value={productsContext}>
            {children}
        </ProductsContext.Provider>
    )
}
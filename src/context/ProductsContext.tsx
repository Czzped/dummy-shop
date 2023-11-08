import { fetchProductsApi } from "../services/fetchProductsApi"
import { useState, useEffect, createContext, useContext } from "react"
import { IProduct } from "../types/IProduct"

interface ProductsContextProps {
    productsData: IProduct[],
    updateProductsData: (newProductsData: IProduct[]) => void,
    resetProductsData: () => IProduct[]
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

    function resetProductsData() {
        fetchProductsApi().then(products => setProductsData(products))

        return productsData
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

export const useProductsContext = () => useContext(ProductsContext)
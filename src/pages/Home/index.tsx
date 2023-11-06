import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";

import { fetchProductsApi } from "../../services/fetchProductsApi";
import { useEffect, useState } from "react"

export function Home() {
    const [productsData, setProductsData] = useState([])

    async function getProducts() {
        const productsData = await fetchProductsApi()

        setProductsData(productsData.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section>
            <SearchBar setProductsData={setProductsData} />
            <Products productsData={productsData} />
        </section>
    )
}
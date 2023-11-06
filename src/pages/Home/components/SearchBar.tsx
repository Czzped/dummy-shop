import { fetchProductsApi } from "../../../services/fetchProductsApi"
import { SetStateAction, FormEvent, useState, useEffect } from "react"

interface IPropsAtributtes {
    setProductsData: React.Dispatch<SetStateAction<never[]>>
}

export function SearchBar({ setProductsData }: IPropsAtributtes) {
    const [originalProductsData, setOriginalProductData] = useState([])

    async function getProducts() {
        const productsData = await fetchProductsApi()

        setOriginalProductData(productsData.products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <input type="text" placeholder="What Are You Looking For?" />
            <br /><br />
        </>
    )
}
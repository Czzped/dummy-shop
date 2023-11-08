import { useParams } from "react-router-dom"
import { fetchProductsApi } from "../../services/fetchProductsApi"
import { useEffect, useState } from "react"
import { IProduct } from "../../types/IProduct"
import { ProductInformation } from "./components/ProductInformation"

export function Product() {
    const { productId } = useParams()
    const [product, setProduct] = useState<IProduct>()

    async function getProduct(id: string | undefined) {
        const products = await fetchProductsApi()
        const result: IProduct = products.find((product: IProduct) => {
            if (id) {
                return product.id === +id
            }
        })

        setProduct(result)
    }

    useEffect(() => {
        getProduct(productId)
    }, [])

    return (
        <>
            {
                product ?
                    <ProductInformation product={product} />
                    :
                    <h1>Product Not Founded.</h1>
            }
        </>
    )
}
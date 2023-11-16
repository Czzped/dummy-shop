import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useProductsContext } from "../../context/productContext"
import { ProductInformation } from "./components/ProductInformation"
import { IProduct } from "../../types/IProduct"

export function Product() {
    const [product, setProduct] = useState<IProduct>()

    const { productId } = useParams()
    const { filterProduct } = useProductsContext()

    useEffect(() => {
        async function getProduct() {
            if (productId) {
                const filteredProduct = await filterProduct(+productId)
                setProduct(filteredProduct)
            }
        }

        getProduct()
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
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useProductsContext } from "../../context/productsContext"
import { ProductInformation } from "./components/ProductInformation"
import Stripe from "stripe"

export function Product() {
    const [product, setProduct] = useState<Stripe.Product>()

    const { productId } = useParams()
    const { filterProduct } = useProductsContext()

    useEffect(() => {
        async function getProduct() {
            if (productId) {
                const filteredProduct = await filterProduct(productId)
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
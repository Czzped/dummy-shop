import Stripe from "stripe";
import { useProductsContext } from "../../../context/productsContext"
import { ProductPainel } from "./ProductsPainel";


export function Products() {
    const { products } = useProductsContext()


    return (
        <div className="flex flex-1 flex-wrap justify-center gap-8">
            {

                products.length > 0 ?
                    products.map((product: Stripe.Product) => {
                        return (
                            <ProductPainel key={product.id} product={product} />
                        )
                    })
                    :

                    <h2 className="font-semibold">Oops...It seems that we don't have nothing in the moment :(</h2>
            }
        </div >
    )
}
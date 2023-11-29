import { Link } from "react-router-dom"
import Stripe from "stripe";
import { useProductsContext } from "../../../context/productsContext"
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsCartContext } from "../../../context/productsCartContext";


export function Products() {
    const { products } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()

    return (
        <>
            {
                products.length > 0 ?
                    products.map((product: Stripe.Product) => {
                        const { id, name, images, default_price, metadata } = product
                        //@ts-ignore
                        const price = (default_price.unit_amount) / 100

                        return (
                            <div key={id}>
                                <img src={images[0]} alt={`${name}-img`} />
                                <h2>{name}</h2>
                                <div>
                                    <h3><CurrencyDollar color="#108810" size={30} />{price}</h3>
                                    <h3>{metadata.rating}<Star size={30} color="#ffce00" weight="fill" /></h3>
                                </div>
                                <div>
                                    <Link to={"/products/" + id}>
                                        <button>see more</button>
                                    </Link>
                                    <button onClick={() => addProductOnCart(product)}>add to the cart</button>
                                </div>
                            </div>
                        )
                    })
                    :

                    <h2>Oops...It seems that we don't have nothing in the moment:(</h2>
            }
        </>
    )
}
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsContext } from "../../../context/productsContext";
import { useProductsCartContext } from "../../../context/productsCartContext";
import "react-toastify/dist/ReactToastify.css";
import Stripe from "stripe";

interface IProductInformationProps {
    product: Stripe.Product
}

export function ProductInformation({ product }: IProductInformationProps) {
    const { images, metadata, name, description, default_price } = product
    //@ts-ignore
    const price = (default_price.unit_amount) / 100

    const { resetProductsData } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()


    useEffect(() => {
        resetProductsData()
    }, [])

    return (
        <section>
            <img src={images[0]} alt="product-thumbnail" />
            <h1>
                {name}
            </h1>
            <h3>
                {metadata.rating} <Star size={30} color="#ffce00" weight="fill" />
            </h3>
            <b>{metadata.avaliationsAmount} avaliations</b>
            <p>
                {description}
            </p>
            <h1>
                <CurrencyDollar color="#108810" size={30} /> {price}
            </h1>
            <div>
                <Link to={"/"}>
                    <button>
                        back
                    </button>
                </Link>
                <button onClick={() => addProductOnCart(product)}>
                    add to the cart
                </button>
            </div>
        </section >
    )
}
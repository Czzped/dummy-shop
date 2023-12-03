import Stripe from "stripe"
import { Link } from "react-router-dom"

import { Star, CurrencyDollar, Eye } from "phosphor-react";
import { useProductsCartContext } from "../../../context/productsCartContext";
import { useState } from "react";

export function ProductPainel(props: { product: Stripe.Product }) {
    const { addProductOnCart } = useProductsCartContext()

    const [isProductEyeDivVisible, setProductEyeDivVisible] = useState(false)

    const { id, name, images, default_price, metadata } = props.product
    //@ts-ignore
    const price = (default_price.unit_amount) / 100



    return (
        <div
            onMouseOver={() => setProductEyeDivVisible(true)}
            onMouseOut={() => setProductEyeDivVisible(false)}
            className="flex flex-col w-[80vw] rounded duration-300 border-2 border-linesColor md:w-[30rem] hover:m-[0.3rem]">
            <Link
                to={"/products/" + id}
                className="flex flex-1 relative justify-center items-center p-8 md:min-h-[25rem]">
                <img src={images[0]} alt={`${name}-img`} className="w-[50%]" />
                {
                    isProductEyeDivVisible ?
                        (
                            <div className="flex justify-center items-center absolute bg-black w-full h-full opacity-50">
                                <Eye size={85} color="#572C57" />
                            </div>
                        )
                        :
                        <div></div>
                }
            </Link>
            <div className="flex flex-col justify-between gap-4 p-4 min-h-[15rem] border-t-2 border-linesColor">
                <h1 className="text-2xl font-normal">{name}</h1>
                <div>
                    <div className="flex items-center">
                        <CurrencyDollar color="#108810" size={30} />
                        <h3 className="text-[28px] text-moneyColor">{price}</h3>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Star color="#572C57" weight="fill" size={22} />
                        <h3 className="text-[20px] text-primaryColor">{metadata.rating}</h3>
                    </div>
                </div>

                <button
                    className="flex justify-center rounded-xl p-4 bg-secondaryColor hover:opacity-80"
                    onClick={() => addProductOnCart(props.product)}>add to the cart</button>

            </div>
        </div>
    )
}
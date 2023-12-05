import Stripe from "stripe"
import { Link } from "react-router-dom"
import { Button } from "../../../components/Button";

import { Star, Eye } from "phosphor-react";
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
            className="flex flex-col w-[90vw] rounded duration-300 border-2 border-linesColor md:w-[30rem] hover:m-[0.3rem]">
            <Link
                to={"/products/" + id}
                className="flex flex-1 relative justify-center items-center p-8 md:min-h-[25rem]">
                <img src={images[0]} alt={`${name}-img`} className="w-[50%]" />
                {
                    isProductEyeDivVisible ?
                        (
                            <div className="flex justify-center items-center absolute bg-black w-full h-full opacity-60">
                                <Eye size={85} color="#572C57" />
                            </div>
                        )
                        :
                        <div></div>
                }
            </Link>
            <div className="flex flex-col justify-between gap-4 p-4 min-h-[15rem] text-white bg-black border-t-2 border-linesColor">
                <h1 className="text-2xl font-normal">{name}</h1>
                <div>
                    <h3 className="text-[1.75rem] text-moneyColor">${price}</h3>
                    <div className="flex gap-1 items-center">
                        <Star color="#572C57" weight="fill" size={22} />
                        <h2 className="text-[1.25rem] text-primaryColor">{metadata.rating}</h2>
                    </div>
                </div>

                <Button eventOnClick={() => addProductOnCart(props.product)} buttonText="add to the cart" additionalStyle="p-4" />
            </div>
        </div>
    )
}
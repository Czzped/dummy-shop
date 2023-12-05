import { useEffect } from "react"
import { useProductsContext } from "../../../context/productsContext";
import { useProductsCartContext } from "../../../context/productsCartContext";

import { Button } from "../../../components/Button";

import { Star, CurrencyDollar } from "phosphor-react";

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
        <section className="flex flex-col gap-4 p-4 lg:flex-row">
            <img src={images[0]} alt="product-thumbnail" />

            <div className="flex flex-col gap-20 p-8">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-semibold">
                            {name}
                        </h1>

                        <span className="text-moneyColor text-4xl">
                            ${price}
                        </span>
                    </div>

                    <div>
                        <div className="flex gap-1 items-center">
                            <Star color="#572C57" weight="fill" size={22} />
                            <h2 className="text-[1.25rem] text-primaryColor">{metadata.rating}</h2>
                        </div>
                        <b>{metadata.avaliationsAmount} avaliations</b>
                    </div>

                    <p className="text-xl font-medium">
                        {description}
                    </p>
                </div>

                <Button eventOnClick={() => addProductOnCart(product)} buttonText="add to the cart" additionalStyle="p-4" />
            </div>
        </section >
    )
}
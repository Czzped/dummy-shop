import { Link } from "react-router-dom"
import Stripe from "stripe";
import { useProductsContext } from "../../../context/productsContext"
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsCartContext } from "../../../context/productsCartContext";


export function Products() {
    const { products } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()

    return (
        <div className="flex justify-center flex-wrap gap-8">
            {
                products.length > 0 ?
                    products.map((product: Stripe.Product) => {
                        const { id, name, images, default_price, metadata } = product
                        //@ts-ignore
                        const price = (default_price.unit_amount) / 100

                        return (
                            <div key={id} className="flex flex-col w-[80vw] rounded-xl duration-300 gap-4 border-2 border-linesColor md:w-[30rem] hover:mb-4">
                                <Link
                                    to={"/products/" + id}
                                    className="flex flex-1 justify-center items-center p-8 md:min-h-[25rem]">
                                    <img src={images[0]} alt={`${name}-img`} className="w-[50%]" />
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
                                        onClick={() => addProductOnCart(product)}>add to the cart</button>

                                </div>
                            </div>
                        )
                    })
                    :

                    <h2>Oops...It seems that we don't have nothing in the moment:(</h2>
            }
        </div >
    )
}
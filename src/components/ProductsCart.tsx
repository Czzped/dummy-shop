import { useProductsCartContext } from "../context/productsCartContext"

import { XCircle } from "phosphor-react";
import { Link } from "react-router-dom";

import { Button } from "./Button";

export function ProductsCart() {
    const { productsCartVisibility, isLoading, clearCart, resetProductsCartVisibility, buyProductsOnCart, removeProductOnCart, productsCart } = useProductsCartContext()
    const totalAmount = productsCart.reduce((totalAmount, { default_price }) => {
        //@ts-ignore
        const price = (default_price.unit_amount) / 100

        return totalAmount + price
    }, 0)

    return (
        productsCartVisibility ?
            <div className="fixed flex justify-end items-center w-full z-20">
                <div className="flex justify-center flex-col gap-8 p-8 h-screen w-screen bg-thirdColor text-white lg:w-[40vw]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl">Products <span className="text-primaryColor">Cart</span></h1>
                        <button
                            onClick={resetProductsCartVisibility}
                        >
                            <XCircle className="text-4xl cursor-pointer hover:opacity-50" />
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 w-full overflow-auto max-h-[80%] gap-10">

                        {
                            productsCart.map(product => {
                                //@ts-ignore
                                const price = (product.default_price.unit_amount) / 100

                                return (
                                    <div className="flex gap-4 w-full" key={product.id}>
                                        <Link
                                            to={"/products/" + product.id}
                                            className="flex justify-center items-center rounded bg-white w-[70%] p-2 hover:opacity-80"
                                        >
                                            <img src={product.images[0]} alt={`${product.name}-img`} className="max-w-[50%]" />
                                        </Link>
                                        <div
                                            className="flex flex-col justify-between w-full gap-4 px-2">
                                            <div className="flex flex-col gap-2 break-words">
                                                <h2 className="text-xl">{product.name}</h2>
                                                <h2>
                                                    <span className="text-moneyColor text-xl">
                                                        ${price}
                                                    </span>
                                                </h2>
                                            </div>

                                            <Button eventOnClick={() => removeProductOnCart(product.id)} buttonText="remove product" additionalStyle="p-2" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="flex flex-col gap-4">
                        <button
                            className="flex justify-center p-1 w-[5rem] font-semibold rounded bg-red-500 hover:opacity-80"
                            onClick={clearCart}
                        >
                            clear
                        </button>
                        <h3 className="flex items-end gap-4 text-xl">
                            Total Amount:
                            <span className="text-moneyColor">
                                ${totalAmount}
                            </span>
                        </h3>

                        <Button
                            eventOnClick={buyProductsOnCart}
                            buttonText={isLoading ? "Loading..." : "Finish Cart"}
                            additionalStyle="p-4"
                        />
                    </div>
                </div >
            </div >
            :
            <div>
            </div>

    )
}
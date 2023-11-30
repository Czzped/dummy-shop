import { useProductsCartContext } from "../context/productsCartContext"
import { CurrencyDollar } from "phosphor-react";
import { Link } from "react-router-dom";

export function ProductsCart() {
    const { productsCartVisibility, isLoading, buyProductsOnCart, removeProductOnCart, productsCart } = useProductsCartContext()
    const totalAmount = productsCart.reduce((totalAmount, { default_price }) => {
        //@ts-ignore
        const price = (default_price.unit_amount) / 100

        return totalAmount + price
    }, 0)

    return (
        productsCartVisibility ?
            <div>
                <div>
                    <h1>Products Cart</h1>
                    <div>
                        {
                            productsCart.map(product => {
                                //@ts-ignore
                                const price = (product.default_price.unit_amount) / 100

                                return (
                                    <div key={product.id}>
                                        <img src={product.images[0]} alt="product-img" />
                                        <div>
                                            <h2>{product.name}</h2>
                                            <h2><CurrencyDollar size={24} color="#108810" />{price}</h2>
                                            <div>
                                                <button onClick={() => removeProductOnCart(product.id)}>remove product</button>
                                                <Link to={`products/${product.id}`}>
                                                    <button>see product</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <h3>Total Amount: {totalAmount}</h3>
                    <button onClick={buyProductsOnCart}>{
                        isLoading ? "Loading" : "Finish Cart"
                    }</button>
                    <hr />

                    <br /><br />
                </div>
            </div >
            :
            <div>
            </div>

    )
}
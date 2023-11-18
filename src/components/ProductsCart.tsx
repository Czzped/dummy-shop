import { useProductsCartContext } from "../context/productsCartContext"
import { CurrencyDollar } from "phosphor-react";
import { Link } from "react-router-dom";

export function ProductsCart() {
    const { productsCartVisibility, removeProductOnCart, productsCart } = useProductsCartContext()
    const totalAmount = productsCart.reduce((totalAmount, { price }) => {
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
                                return (
                                    <div>
                                        <img src={product.image} alt="product-img" />
                                        <div>
                                            <h2>{product.title}</h2>
                                            <h2><CurrencyDollar size={24} color="#108810" />{product.price}</h2>
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
                    <button>Finish the Cart</button>
                    <hr />

                    <br /><br />
                </div>
            </div >
            :
            <div>
            </div>

    )
}
import { Link } from "react-router-dom"
import { IProduct } from "../../../types/IProduct"
import { useProductsContext } from "../../../context/ProductsContext"
import { Star, CurrencyDollar } from "phosphor-react";


export function Products() {
    const { productsData, } = useProductsContext()

    return (
        <>
            {
                productsData.length > 0 ?
                    productsData.map(({ id, title, thumbnail, price, rating }: IProduct) => {
                        return (
                            <div key={id}>
                                <img src={thumbnail} alt={`${title}-img`} />
                                <h2>{title}</h2>
                                <div>
                                    <h3><CurrencyDollar color="#108810" size={30} />{price}</h3>
                                    <h3>{rating}<Star size={30} color="#ffce00" weight="fill" /></h3>
                                </div>
                                <div>
                                    <Link to={"/products/" + id}>
                                        <button>see more</button>
                                    </Link>
                                    <button>add to the cart</button>
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
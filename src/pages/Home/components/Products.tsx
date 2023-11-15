import { Link } from "react-router-dom"
import { IProduct } from "../../../types/IProduct"
import { useProductsContext } from "../../../context/productsContext"
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsCartContext } from "../../../context/productsCartContext";


export function Products() {
    const { productsData } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()

    function handleProductAditionToTheCart(product: IProduct) {
        addProductOnCart(product)
    }


    return (
        <>
            {
                productsData.length > 0 ?
                    productsData.map((product: IProduct) => {
                        const { id, title, image, price, rating } = product
                        return (
                            <div key={id}>
                                <img src={image} alt={`${title}-img`} />
                                <h2>{title}</h2>
                                <div>
                                    <h3><CurrencyDollar color="#108810" size={30} />{price}</h3>
                                    <h3>{rating.rate}<Star size={30} color="#ffce00" weight="fill" /></h3>
                                </div>
                                <div>
                                    <Link to={"/products/" + id}>
                                        <button>see more</button>
                                    </Link>
                                    <button onClick={() => handleProductAditionToTheCart(product)}>add to the cart</button>
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
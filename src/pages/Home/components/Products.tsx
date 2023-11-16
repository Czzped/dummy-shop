import { Link } from "react-router-dom"
import { IProduct } from "../../../types/IProduct"
import { useProductsContext } from "../../../context/productContext"
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsCartContext } from "../../../context/productsCartContext";
import { ToastContainer } from "react-toastify";


export function Products() {
    const { productsData } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()

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
                                    <button onClick={() => addProductOnCart(product)}>add to the cart</button>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                    />
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
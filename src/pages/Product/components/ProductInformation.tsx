import { IProduct } from "../../../types/IProduct";
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { Star, CurrencyDollar } from "phosphor-react";
import { useProductsContext } from "../../../context/productContext";
import { useProductsCartContext } from "../../../context/productsCartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IProductInformationProps {
    product: IProduct
}

export function ProductInformation({ product }: IProductInformationProps) {
    const { image, rating, title, description, price } = product

    const { resetProductsData } = useProductsContext()
    const { addProductOnCart } = useProductsCartContext()


    useEffect(() => {
        resetProductsData()
    }, [])

    return (
        <section>
            <img src={image} alt="product-thumbnail" />
            <h1>
                {title}
            </h1>
            <h3>
                {rating.rate} <Star size={30} color="#ffce00" weight="fill" />
            </h3>
            <b>{rating.count} avaliations</b>
            <p>
                {description}
            </p>
            <h1>
                <CurrencyDollar color="#108810" size={30} /> {price}
            </h1>
            <div>
                <Link to={"/"}>
                    <button>
                        back
                    </button>
                </Link>
                <button onClick={() => addProductOnCart(product)}>
                    add to the cart
                </button>

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
        </section >
    )
}
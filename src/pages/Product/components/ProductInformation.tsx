import { IProduct } from "../../../types/IProduct";
import { Link } from "react-router-dom";

interface IProductInformationProps {
    product: IProduct
}

export function ProductInformation({ product }: IProductInformationProps) {
    const { thumbnail, rating, title, description, stock, price } = product

    return (
        <section>
            <img src={thumbnail} alt="product-img" />
            <h3>
                {rating} stars
            </h3>
            <h1>
                {title}
            </h1>
            <p>
                {description}
            </p>
            <span>
                <b>
                    {stock} in stock
                </b>
            </span>
            <h1>
                $ {price}
            </h1>
            <div>
                <Link to={"/"}>
                    <button>
                        back
                    </button>
                </Link>
                <button>
                    add to the cart
                </button>
            </div>
        </section >
    )
}
import { IProduct } from "../../../types/IProduct";
import { Link } from "react-router-dom";
import { Star, CurrencyDollar } from "phosphor-react";

interface IProductInformationProps {
    product: IProduct
}

export function ProductInformation({ product }: IProductInformationProps) {
    const { thumbnail, rating, title, description, stock, price } = product

    return (
        <section>
            <img src={thumbnail} alt="product-thumbnail" />
            <h3>
                {rating} <Star size={30} color="#ffce00" weight="fill" />
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
                <CurrencyDollar color="#108810" size={30} /> {price}
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
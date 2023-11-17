import { Link } from "react-router-dom"
import { ShoppingCartSimple, House } from "phosphor-react"
import { useProductsCartContext } from "../context/productsCartContext"

export function Header() {
    const { resetProductsCartVisibility } = useProductsCartContext()

    return (
        <header>
            <nav>
                <h1>Dummy <span>Shop</span></h1>

                <ul>
                    <li>
                        <Link to={"/"}>
                            <House size={30} />
                        </Link>
                    </li>
                    <li>
                        <ShoppingCartSimple onClick={() => resetProductsCartVisibility()} size={30} />
                    </li>
                </ul>
            </nav>
        </header >
    )
}
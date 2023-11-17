import { Link } from "react-router-dom"
import { ShoppingCartSimple, House } from "phosphor-react"

export function Header() {
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
                        <ShoppingCartSimple size={30} />
                    </li>
                </ul>
            </nav>
        </header >
    )
}
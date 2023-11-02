import { Link } from "react-router-dom"

export function Header() {
    return (
        <header>
            <nav>
                <h1>Dummy <span>Shop</span></h1>

                <ul>
                    <li>
                        <Link to={"/"}>
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/cart"}>
                            cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
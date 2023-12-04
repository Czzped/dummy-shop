import { Link } from "react-router-dom"
import { ShoppingCartSimple, House } from "phosphor-react"
import { useProductsCartContext } from "../context/productsCartContext"

export function Header() {
    const { resetProductsCartVisibility } = useProductsCartContext()

    return (
        <header>
            <nav className="flex flex-col text-center items-center p-8 gap-4 w-[85vw] md:flex-row justify-between">
                <h1 className="text-4xl">Dummy <span className="text-primaryColor">Shop</span></h1>

                <ul className="flex gap-4">
                    <li className="cursor-pointer duration-[0.2s] hover:text-primaryColor">
                        <Link to={"/"}>
                            <House size={30} />
                        </Link>
                    </li>
                    <li className="cursor-pointer duration-[0.2s] hover:text-primaryColor">
                        <button onClick={() => resetProductsCartVisibility()}>
                            <ShoppingCartSimple size={30} />
                        </button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}
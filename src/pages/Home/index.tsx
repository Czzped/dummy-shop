import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";
import { useProductsCartContext } from "../../context/productsCartContext";

export function Home() {
    const { productsCart } = useProductsCartContext()

    return (
        <section>
            {
                productsCart.map(product => {
                    return (
                        <h1>{product.title}</h1>
                    )
                })
            }
            <div>
                <SearchBar />
                <Dropdown />
            </div>
            <Products />
        </section>
    )
}
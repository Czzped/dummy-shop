import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";

export function Home() {
    return (
        <section>
            <SearchBar />
            <Products />
        </section>
    )
}
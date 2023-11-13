import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "../../components/DropDown";

export function Home() {
    return (
        <section>
            <div>
                <SearchBar />
                < Dropdown />
            </div>
            <Products />
        </section>
    )
}
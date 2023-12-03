import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";
import { Dropdown } from "./components/Dropdown";

export function Home() {

    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col  gap-6 items-center">
                <SearchBar />
                <Dropdown />
            </div>
            <Products />
        </section>
    )
}
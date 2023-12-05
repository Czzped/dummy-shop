import { Products } from "./components/Products";
import { SearchBar } from "./components/SearchBar";
import { CategoriesButtons } from "./components/CategoriesButtons";

export function Home() {

    return (
        <section className="flex flex-col flex-1 p-4 w-[90vw] gap-16">
            <div className="flex flex-col gap-6 items-center">
                <SearchBar />
                <CategoriesButtons />
            </div>
            <Products />
        </section>
    )
}
import { ChangeEvent } from "react"
import { useProductsContext } from "../../../context/productContext";

export function SearchBar() {
    const { filterProducts } = useProductsContext()

    function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
        filterProducts(ev.currentTarget.value.toLowerCase())
    }

    return (
        <>
            <input type="text" placeholder="What Are You Looking For?"
                onChange={(ev) => handleSearch(ev)}
            />
            <br />
            <br />
        </>
    )
}
import debounce from "lodash.debounce";
import { useCallback, useState, ChangeEvent } from "react"
import { useProductsContext } from "../../../context/ProductsContext";

export function SearchBar() {
    const { filterProducts } = useProductsContext()
    const [loadingMessage, setLoadingMessage] = useState('')

    function handleProductsFilter(queryValue: string) {
        setLoadingMessage("")
        filterProducts(queryValue.toLowerCase())
    }

    const debouncedHandleSearch = useCallback(debounce(handleProductsFilter, 500), []);

    function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
        setLoadingMessage("Loading Search...")
        debouncedHandleSearch(ev.target.value)
    }

    return (
        <>
            <input type="text" placeholder="What Are You Looking For?"
                onChange={ev => handleSearch(ev)}
            />
            <br />
            <span>{loadingMessage}</span>
            <br />
        </>
    )
}
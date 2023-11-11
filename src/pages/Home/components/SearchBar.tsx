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

    return (
        <>
            <input type="text" placeholder="What Are You Looking For?"
                onChange={ev => handleProductsFilter(ev.currentTarget.value)}
            />
            <br />
            <span>{loadingMessage}</span>
            <br />
        </>
    )
}
import { useProductsContext } from "../../../context/productsContext";

import { debounce } from "lodash";

export function SearchBar() {
    const { filterProducts } = useProductsContext()

    const handleDebounceSearch = (debounce((query: string) => {
        filterProducts(query)
    }, 500))

    return (
        <>
            <input
                type="text"
                placeholder="What Are You Looking For?"
                onChange={(ev) => {
                    handleDebounceSearch(ev.currentTarget.value)
                }}
                className="w-[75vw] p-2 outline-none text-xl border-b-2 duration-150 border-linesColor focus:border-primaryColor md:w-[40rem]"
            />
        </>
    )
}
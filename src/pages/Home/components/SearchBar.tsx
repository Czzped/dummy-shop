import { ChangeEvent } from "react"
import { useProductsContext } from "../../../context/productsContext";

export function SearchBar() {
    const { filterProducts } = useProductsContext()

    function handleSearch(ev: ChangeEvent<HTMLInputElement>) {
        filterProducts(ev.currentTarget.value.toLowerCase())
    }

    return (
        <>
            <input
                type="text"
                placeholder="What Are You Looking For?"
                onChange={(ev) => handleSearch(ev)}
                className="w-[75vw] p-2 outline-none text-xl border-b-4 duration-150 border-secondaryColor focus:border-primaryColor md:w-[40rem]"
            />
        </>
    )
}
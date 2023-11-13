import { useProductsContext } from "../../../context/ProductsContext"

export function Dropdown() {
    const { resetProductsData, filterCategory } = useProductsContext()

    function handleSelectCategoryChange(category: string) {
        if (category === 'All') {
            return resetProductsData()
        }

        filterCategory(category)
    }

    return (
        <>
            <select onChange={(ev) => handleSelectCategoryChange(ev.currentTarget.value)} name="categories">
                <option value="All">All</option>
                <option value="electronics">electronics</option>
                <option value="jewelery">jewelery</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
            </select >
        </>
    )
}
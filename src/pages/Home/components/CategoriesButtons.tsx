import { useProductsContext } from "../../../context/productsContext"

export function CategoriesButtons() {
    const { resetProductsData, filterCategory } = useProductsContext()

    function handleSelectCategoryChange(category: string) {
        if (category === 'All') {
            return resetProductsData()
        }

        filterCategory(category)
    }

    const categories = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"]

    return (
        <>
            <div className="flex justify-center flex-wrap gap-4 min-h-[2rem]">
                {
                    categories.map((category) => {
                        return (
                            <button
                                key={Math.random() * 1000000000}
                                onClick={(ev) => handleSelectCategoryChange(ev.currentTarget.innerText)}
                                className="text-lg font-medium duration-200 hover:text-primaryColor hover:mb-1"
                            >
                                {category}
                            </button>
                        )
                    })
                }
            </div >
        </>
    )
}
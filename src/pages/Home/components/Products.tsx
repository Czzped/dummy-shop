import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface IProduct {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: string[]
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
}

export function Products() {
    const [productsData, setProductsData] = useState([])

    async function fetchProductsApi() {
        const response = await fetch('https://dummyjson.com/products')
        const productsData = await response.json()

        setProductsData(productsData.products)
    }

    useEffect(() => {
        fetchProductsApi()
    }, [])

    return (
        <>
            {
                productsData.length > 0 ?
                    productsData.map(({ id, title, images, price, rating }: IProduct) => {
                        return (
                            <div key={id}>
                                <img src={images[0]} alt={`${title}-img`} />
                                <h2>{title}</h2>
                                <div>
                                    <h3>{price}$</h3> - <h3>{rating}</h3>
                                </div>
                                <div>
                                    <Link to={"/" + id}>
                                        <button>see more</button>
                                    </Link>
                                    <button>add to the cart</button>
                                </div>
                            </div>
                        )
                    })
                    :

                    <h2>Oops...It seems that we don't have nothing in the moment:(</h2>
            }
        </>
    )
}
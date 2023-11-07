export async function fetchProductsApi() {
    const response = await fetch('https://dummyjson.com/products')
    const { products } = await response.json()

    return products
}
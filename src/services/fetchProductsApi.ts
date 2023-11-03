export async function fetchProductsApi() {
    const response = await fetch('https://dummyjson.com/products')
    const productsData = await response.json()

    return productsData
}
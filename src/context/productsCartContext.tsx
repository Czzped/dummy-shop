import { useState, createContext, useEffect, useContext } from "react"
import { toast } from "react-toastify"
import Stripe from "stripe"
import { getStripeData } from "../lib/stripe"

interface CartContextProps {
    productsCart: Stripe.Product[],
    productsCartVisibility: boolean,
    isLoading: boolean,
    refreshCart: () => void,
    removeProductOnCart: (id: string) => void,
    resetProductsCartVisibility: () => void,
    addProductOnCart: (newProduct: Stripe.Product) => void,
    buyProductsOnCart: () => void
}

export const ProductCartContext = createContext({} as CartContextProps)

export function ProductsCartContextProvider({ children }: { children: React.ReactNode }) {
    const [productsCart, setProductsCart] = useState(Array<Stripe.Product>)
    const [productsCartVisibility, setProductsCartVisibility] = useState(false)
    const [isLoading, setLoading] = useState(false)

    function refreshCart() {
        const productsOnCart = localStorage.getItem('products-cart') ?? '[]'
        const productsOnCartJSON: Stripe.Product[] = JSON.parse(productsOnCart)

        setProductsCart(productsOnCartJSON)
    }

    function removeProductOnCart(id: string) {
        const filteredProductsOnCart = productsCart.filter(product => product.id !== id)
        setProductsCart(filteredProductsOnCart)
    }

    function resetProductsCartVisibility() {
        setProductsCartVisibility(!productsCartVisibility)
    }

    function addProductOnCart(newProduct: Stripe.Product) {
        const productCartValidation = productsCart.find(product => product.id === newProduct.id)

        if (!productCartValidation) {
            const newProductsCart = [...productsCart, newProduct]
            setProductsCart(newProductsCart)

            return toast.success('🤑Product added');
        }

        return toast.error('Product already added');

    }

    async function buyProductsOnCart() {
        if (productsCart.length === 0) {
            return toast.error('The cart is empty!')
        }

        const { stripePromise } = await getStripeData()
        const Stripe = await stripePromise
        setLoading(true);

        const itens = productsCart.map(productsCart => {
            const productsInformation = {
                //@ts-ignore
                price: productsCart.default_price.id,
                quantity: 1
            }

            return productsInformation
        })

        const checkoutOptions = {
            lineItems: itens,
            mode: "subscription",
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`
        };

        try {
            //@ts-ignore
            const { error } = await Stripe?.redirectToCheckout(checkoutOptions);
            console.log("Stripe checkout error", error);

        } catch (err) {
            toast.error('Fail to redirect to checkout!')
            console.log(err)
        } finally {
            setLoading(false);
            localStorage.setItem('products-cart', '[]')
        }
    }

    useEffect(() => {
        refreshCart()
    }, [])

    useEffect(() => {
        const stringfiedProductsCart = JSON.stringify(productsCart)
        localStorage.setItem('products-cart', stringfiedProductsCart)
    }, [productsCart])

    const productsCartContext = {
        productsCart,
        productsCartVisibility,
        isLoading,
        refreshCart,
        removeProductOnCart,
        resetProductsCartVisibility,
        addProductOnCart,
        buyProductsOnCart
    }

    return (
        <ProductCartContext.Provider value={productsCartContext}>
            {children}
        </ProductCartContext.Provider>
    )
}

export const useProductsCartContext = () => useContext(ProductCartContext)
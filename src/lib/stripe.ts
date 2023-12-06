import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

let stripePromise: any
let productsData: any

export async function getStripeData() {
    if (!stripePromise) {
        stripePromise = loadStripe(String(import.meta.env.VITE_STRIPE_PUBLIC_KEY))
    }

    if (!productsData) {
        const stripe = new Stripe(
            import.meta.env.VITE_STRIPE_SECRET_KEY,
            {
                apiVersion: "2023-10-16",
                appInfo: {
                    name: "Ignite Shop",
                },
            }
        );

        const { data } = await stripe.products.list({
            expand: ["data.default_price"],
            limit: 1000
        });

        productsData = data.filter(product => product.metadata.available !== 'false')
    }

    return {
        stripePromise,
        productsData
    }
}
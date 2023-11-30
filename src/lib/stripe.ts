import { loadStripe } from "@stripe/stripe-js";
import Stripe from "stripe";

export const stripePromise = loadStripe(String(import.meta.env.VITE_STRIPE_PUBLIC_KEY))

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

export const productsData = data.filter(product => product.metadata.available !== 'false')
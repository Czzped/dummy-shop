import Stripe from "stripe";

export const stripe = new Stripe(
    import.meta.env.VITE_STRIPE_SECRET_KEY,
    {
        apiVersion: "2023-10-16",
        appInfo: {
            name: "Ignite Shop",
        },
    }
);

export const { data } = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 1000
});
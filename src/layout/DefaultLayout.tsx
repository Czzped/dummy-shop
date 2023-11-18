import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { ProductsCart } from "../components/ProductsCart";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <ProductsCart />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { ProductsCart } from "../components/ProductsCart";
import { ToastContainer } from "react-toastify"

export function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <ProductsCart />
                <ToastContainer theme="dark" />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
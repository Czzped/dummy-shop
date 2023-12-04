import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { ProductsCart } from "../components/ProductsCart";
import { ToastContainer } from "react-toastify"

export function DefaultLayout() {
    return (
        <div className="flex flex-col  items-center min-h-screen ">
            <Header />
            <ProductsCart />
            <main className="flex-1">
                <ToastContainer theme="dark" />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { ProductsCart } from "../components/ProductsCart";
import { ToastContainer } from "react-toastify"

export function DefaultLayout() {
    return (
        <div className="flex flex-col items-center min-h-screen p-8 gap-4">
            <Header />
            <main className="flex-1">
                <ProductsCart />
                <ToastContainer />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
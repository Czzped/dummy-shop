import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { ProductsCart } from "../components/ProductsCart";
import { ToastContainer } from "react-toastify"

export function DefaultLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <ProductsCart />
            <main className="flex flex-col flex-1 justify-center items-center mt-[8rem]">
                <ToastContainer theme="dark" />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
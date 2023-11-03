import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home/Home";
import { Cart } from "../pages/Cart/Cart";
import { Product } from "../pages/Product/Product";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/products/:productId",
                element: <Product />
            }
        ]
    }
]);

export default router
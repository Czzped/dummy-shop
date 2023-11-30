import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Success } from "../pages/Success";

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
                path: "/products/:productId",
                element: <Product />
            },
            {
                path: "/success",
                element: <Success />
            }
        ]
    }
]);

export default router
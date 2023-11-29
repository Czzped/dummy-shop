import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { ProductsContextProvider } from "./context/productsContext";
import { ProductsCartContextProvider } from "./context/productsCartContext";

export function App() {
  return (
    <>
      <ProductsCartContextProvider>
        <ProductsContextProvider>
          <RouterProvider router={router} />
        </ProductsContextProvider>
      </ProductsCartContextProvider>
    </>
  )
}
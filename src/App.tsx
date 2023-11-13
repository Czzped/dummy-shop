import { RouterProvider } from "react-router-dom";
import router from "./routes/route";
import { ProductsContextProvider } from "./context/productsContext";

export function App() {
  return (
    <>
      <ProductsContextProvider>
        <RouterProvider router={router} />
      </ProductsContextProvider>
    </>
  )
}
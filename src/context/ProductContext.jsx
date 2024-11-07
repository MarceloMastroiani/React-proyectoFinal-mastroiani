import { createContext } from "react";
import { useAllProducts } from "../hooks/useProducts";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { products, loading, error } = useAllProducts();

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

import React from "react";
import { useAllProducts } from "../hooks/useProducts";
import { LoaderComponent, ItemListContainer } from "../components";
import { SideBarComponent } from "../components";

export const Home = () => {
  const { products, loading, error } = useAllProducts(15);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
      <SideBarComponent />
    </div>
  );
};

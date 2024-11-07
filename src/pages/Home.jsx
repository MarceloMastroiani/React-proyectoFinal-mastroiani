import { React, useState, useContext, useEffect } from "react";
import { ItemListContainer } from "../components";
import { SideBarComponent } from "../components";
import { ProductsContext } from "../context/ProductContext";
import { LoaderComponent } from "../components";
import { useAllProductsByFilter } from "../hooks/useProducts";

export const Home = () => {
  const [dataCategory, setDataCategory] = useState("all");
  const { products, loading, error } = useContext(ProductsContext);
  const {
    products: productsCategorys,
    loading: loadingCategorys,
    error: errorCategorys,
    dataFilter,
  } = useAllProductsByFilter("products", "category", dataCategory);

  const sendFilters = (data) => {
    //Desestructurar data para poder pasarlo a useAllProductsByFilter
    const { categorys, mayorMenorPrecio } = data;
    setDataCategory(categorys);
  };

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer
          product={products}
          filterCategory={dataFilter}
          productsCategorys={productsCategorys}
          loadingCategorys={loadingCategorys}
          errorCategorys={errorCategorys}
        />
      )}

      <SideBarComponent sendFilters={sendFilters} />
    </div>
  );
};

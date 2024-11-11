import { React, useState, useContext } from "react";
import { ItemListContainer } from "../components";
import { SideBarComponent } from "../components";
import { ProductsContext } from "../context/ProductContext";
import { LoaderComponent } from "../components";

export const Home = () => {
  const [dataCategory, setDataCategory] = useState("all");
  const { products } = useContext(ProductsContext);

  const sendFilters = (data) => {
    //Desestructurar data para poder pasarlo a useAllProductsByFilter
    const { categorys, mayorMenorPrecio } = data;
    setDataCategory(categorys);
  };

  return (
    <div>
      <ItemListContainer dataCategory={dataCategory} product={products} />

      <SideBarComponent sendFilters={sendFilters} />
    </div>
  );
};

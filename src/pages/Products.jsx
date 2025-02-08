import { React, useState, useContext } from "react";
import { ItemListContainer } from "../components";
import { SideBarComponent } from "../components";
import { useAllProducts } from "../hooks/useProducts";

export const Products = () => {
  const [dataCategory, setDataCategory] = useState("all");
  const { products } = useAllProducts();
  console.log("products pr", products);

  // const { products } = useContext(ProductsContext);

  //Estafuncion recibe los datos del select y se guarda en dataCategory para poder usarlo en el componente ItemListContainer
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

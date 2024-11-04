import React from "react";
import { useForm } from "react-hook-form";
import "./SideBarFilter.css";

export const SideBarComponent = () => {
  //TODO:agregar logica de filtro
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sidebar">
      <div className="divContainer">
        <select name="mayorMenorPrecio" {...register("mayorMenorPrecio")}>
          <option value="order">Ordenar por</option>
          <option value="menorPrecio">Menor Precio</option>
          <option value="mayorPrecio">Mayor Precio</option>
        </select>

        <select name="categorys" {...register("categorys")}>
          <option value="category">Categoría</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
      <button className="botonFiltro">Filtrar</button>
    </form>
  );
};

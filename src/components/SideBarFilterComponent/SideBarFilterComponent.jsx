import React from "react";
import { useForm } from "react-hook-form";
import "./SideBarFilter.css";

export const SideBarComponent = ({ sendFilters }) => {
  //TODO:agregar logica de filtro
  const { register, handleSubmit } = useForm();

  const filterData = (data) => {
    sendFilters(data);
  };
  return (
    <form onSubmit={handleSubmit(filterData)} className="sidebar">
      <div className="divContainer">
        <select name="mayorMenorPrecio" {...register("mayorMenorPrecio")}>
          <option value="order">Ordenar por</option>
          <option value="menorPrecio">Menor Precio</option>
          <option value="mayorPrecio">Mayor Precio</option>
        </select>

        <select name="categorys" {...register("categorys")}>
          <option value="all">Categoría</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
      <button className="botonFiltro">Filtrar</button>
    </form>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import "./SideBarFilter.css";
import { useAllCategories } from "../../hooks/useProducts";
import { ButtonComponent } from "../ButtonComponent";

export const SideBarComponent = ({ sendFilters }) => {
  //Hook de react-hook-form para poder usar el select
  const { register, handleSubmit } = useForm();
  //Custom hook para obtener las categorias y poder agregarlas en el select
  const { categories, error } = useAllCategories();

  //Función que se ejecuta cuando se envía el formulario
  //Esta función manda los datos al componente padre (/src/pages/Home.jsx)
  const filterData = (data) => {
    sendFilters(data);
  };
  return (
    <form onSubmit={handleSubmit(filterData)} className="sidebar">
      <ButtonComponent text={"create"} />
      <div className="divContainer">
        <select name="mayorMenorPrecio" {...register("mayorMenorPrecio")}>
          <option value="order">Ordenar por</option>
          <option value="menorPrecio">Menor Precio</option>
          <option value="mayorPrecio">Mayor Precio</option>
        </select>

        {/* Ahota se puede agregar las categorias que se deseen, estas se mostrarán en el select */}
        <select name="categorys" {...register("categorys")}>
          <option value="all">Categoría</option>
          {error ? (
            <div>Hubo un error</div>
          ) : (
            categories.map((category) => (
              <option value={category} key={category}>
                {`${category}`}
              </option>
            ))
          )}
        </select>
      </div>
      <button className="botonFiltro">Filtrar</button>
    </form>
  );
};

import React from "react";
import "./SideBarFilter.css";

export const SideBarComponent = () => {
  //TODO:agregar logica de filtro

  return (
    <div className="sidebar">
      <div className="divContainer">
        <label htmlFor="menorPrecio">Menor Precio</label>
        <input name="menorPrecio" type="checkbox" />
      </div>

      <div className="divContainer">
        <label htmlFor="mayorPrecio">Mayor Precio</label>
        <input name="maorPrecio" type="checkbox" />
      </div>

      <div className="divContainer">
        <select name="category">
          <option value="laptops">laptops</option>
          <option value="smartphones">smartphones</option>
        </select>
      </div>
    </div>
  );
};

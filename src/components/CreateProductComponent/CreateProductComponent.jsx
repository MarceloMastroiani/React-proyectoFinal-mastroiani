import { AddProduct } from "../../firebase/config";
import { UploadFile } from "../../firebase/config";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./CreateProduct.css";

export const CreateProductComponent = () => {
  const { register, handleSubmit } = useForm();
  const [file, setFile] = useState(null);

  return (
    <form
      className="formContainer"
      //se envia el formulario a las funciones de firebase
      onSubmit={handleSubmit(async (data, e) => {
        e.preventDefault();

        try {
          //se envia el file a firebase
          const resut = await UploadFile(file);
          //se crea el nuevo producto
          const newProduct = {
            title: data.title,
            category: data.category,
            description: data.description,
            price: data.price,
            thumbnail: resut,
          };
          //se envia el nuevo producto a firebase
          await AddProduct(newProduct);
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <div className="divContainer">
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          //se registra el input
          {...register("title")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="category">Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="categoría"
          //se registra el input
          {...register("category")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          //se registra el input
          {...register("description")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          //se registra el input
          {...register("price")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="thumbnail">Foto del producto</label>
        <input
          type="file"
          name="thumbnail"
          //se guarda el file en el estado
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <button> Agregar producto </button>
    </form>
  );
};

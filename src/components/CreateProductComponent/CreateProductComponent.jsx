import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useForm } from "react-hook-form";
import "./CreateProduct.css";

export const CreateProductComponent = () => {
  const { register, handleSubmit } = useForm();
  const db = getFirestore();

  return (
    <form
      className="formContainer"
      onSubmit={handleSubmit(async (data) => {
        const newProduct = {
          title: data.title,
          category: data.category,
          description: data.description,
          price: data.price,
        };
        const docRef = await addDoc(collection(db, "products"), newProduct);

        console.log(docRef);
      })}
    >
      <div className="divContainer">
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo"
          {...register("title")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="category">Categoría</label>
        <input
          type="text"
          name="category"
          placeholder="categoría"
          {...register("category")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          {...register("description")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          name="price"
          placeholder="price"
          {...register("price")}
        />
      </div>

      <div className="divContainer">
        <label htmlFor="thumbnail">Foto del producto</label>
        <input type="file" name="thumbnail" {...register("thumbnail")} />
      </div>

      <button> Agregar producto </button>
    </form>
  );
};

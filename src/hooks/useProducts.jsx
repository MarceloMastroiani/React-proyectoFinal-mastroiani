/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { DB } from "../firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

export const useAllProducts = (limit) => {
  //ESTE CUSTON HOOKS SE USA PARA TRAER TODOS LOS PRODUCTOS DE LA BASE DE DATOS Y SE GUARDAN EN EL ESTADO DE REDUX

  //traer los productos del estado de redux
  const products = useSelector((state) => state.products);
  //se usa para mandar la acción al reducer y actualizar el estado
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(DB, "products");
    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //REDUX
        dispatch(fetchProducts(data));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // console.log("products redux", products);
  return { products, loading, error };
};

export const useSingleProduct = (id) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // const db = getFirestore();
    const docRef = doc(DB, "products", id);

    getDoc(docRef)
      .then((res) => {
        setProduct({ id: res.id, ...res.data() });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { product, loading, error };
};

export const useAllProductsByFilter = (
  collectionName,
  fieldToFilter,
  dataCategory
) => {
  const [dataFilter, setDataFilter] = useState();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const filterCategory = dataCategory;
    setDataFilter(filterCategory);
    // const db = getFirestore();
    const collectionRef = collection(DB, collectionName);

    const categoryQuery = query(
      collectionRef,
      where(fieldToFilter, "==", filterCategory)
    );

    getDocs(categoryQuery)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, [collectionName, fieldToFilter, dataCategory]);
  return { products, loading, error, dataFilter };
};

export const useAllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = collection(DB, "products");
    getDocs(collectionRef)
      .then((res) => {
        const result = res.docs.map((doc) => doc.data().category);

        //new set es un objeto que almacena los VALORES UNICOS de un array
        //new Set(result): Elimina las categorías duplicadas y
        //[...new Set(...)]: Convierte el Set en un array para poder trabajar fácilmente con él.
        const categoriasUnicas = [...new Set(result)];

        setCategories(categoriasUnicas);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);
  // console.log("categories", categories);
  return { categories, error, loading };
};

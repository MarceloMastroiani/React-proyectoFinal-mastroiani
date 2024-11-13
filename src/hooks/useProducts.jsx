/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  getDocs,
  collection,
  getDoc,
  doc,
  query,
  where,
  or,
  orderBy,
} from "firebase/firestore";
import { DB } from "../firebase/config";

export const useAllProducts = (limit) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const collectionRef = collection(DB, "products");
    getDocs(collectionRef)
      .then((res) => {
        const data = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

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

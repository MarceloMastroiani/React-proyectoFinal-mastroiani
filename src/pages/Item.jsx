import React, { useEffect, useState } from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Item = () => {

    const [ product, setProducts] = useState({});
    const {id} = useParams()
    useEffect(() => {
      axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
    }, [id]);

  return <ItemDetailContainer product={product} />
}

export default Item;
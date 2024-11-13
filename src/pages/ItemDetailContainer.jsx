import React from "react";

import { useParams } from "react-router-dom";
import { useSingleProduct } from "../hooks/useProducts";

import { LoaderComponent } from "../components";
import { ItemDetailComponent } from "../components";

export const ItemDetailContainer = () => {
  const { productId } = useParams();

  const { product, loading, error } = useSingleProduct(productId);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Error</div>
      ) : (
        <ItemDetailComponent product={product} />
      )}
    </div>
  );
};

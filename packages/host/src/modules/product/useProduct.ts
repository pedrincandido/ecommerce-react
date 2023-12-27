import { useState } from "react";
import { useGetProductByIdQuery } from "./useProduct.queries";

export const useProduct = () => {
  const [productId, setProductId] = useState<number>();

  const {
    data,
  } = useGetProductByIdQuery({ id: productId, enabled: productId !== undefined });

  return {
    product: data,
    setProductId,
  };
};

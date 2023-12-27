import { useState } from "react";
import { useGetProductByIdQuery } from "./useProduct.queries";

export const useProduct = () => {
  // const type = state?.type || (id && "edit") || "new";
  // const { product: persistedProduct, setProduct } = useHomeContext();
  // const [loaded, setLoaded] = useState(false);
  const [productId, setProductId] = useState<number>();

  const {
    data,
    // isLoading: isLoadingProduct,
    // fetchStatus: fetchStatusProduct,
  } = useGetProductByIdQuery({ id: productId, enabled: productId !== undefined });

  // const onSuccess = useCallback(() => {
  //   setLoaded(true);
  // }, [setLoaded]);

  // const {
  //   data: resCombos,
  //   // isLoading: isLoadingCombos,
  //   // fetchStatus: fetchStatusCombos,
  // } = useProdListCombosQuery(!loaded, onSuccess);

  return {
    product: data,
    // product:
    //   (type === "edit" && { id, ...resProduct?.data }) ||
    //   (type === "clone" && persistedProduct) ||
    //   (type === "new" && { status: "A" }),
    setProductId,
    // listCombos: resCombos?.data,
    // pageType: type,
  };
};

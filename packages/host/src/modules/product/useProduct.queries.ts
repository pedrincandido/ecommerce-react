import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductById } from "./services/product.service";

interface ProductQueryProps {
  id: number | undefined;
  enabled: boolean;
  onSuccess?: (data: any) => {};
  onError?: (data: any) => {};
}

export const useGetProductByIdQuery = ({ enabled, id, onError, onSuccess }: ProductQueryProps) => {
  const queryClient = useQueryClient();

  return useQuery(["getProductById", id], () => getProductById(id), {
    enabled,
    refetchOnWindowFocus: false,
    initialData: () => {
      const initialResults = queryClient.getQueryData(["getProductById", id])?.data;
      return initialResults ? { data: initialResults } : undefined;
    },
    onSuccess: onSuccess && onSuccess,
    onError: onError && onError,
  });
};

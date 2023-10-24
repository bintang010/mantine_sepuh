import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/features/query";

const useQueryProducts = (skip, options) => {
  return useQuery([`get-products`, { skip }], () => getProducts(skip), {
    ...options,
  });
};

export { useQueryProducts };

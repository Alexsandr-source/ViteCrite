import React from "react";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
}

export default function Products() {
  const { isPending, error, data } = useQuery<ProductsResponse>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Ошибка загрузки");
      }
      return response.json();
    },
    staleTime: 1000 * 60,
    gcTime: 1000 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data.products.slice(0, 10).map((product) => (
        <div className="bg-white" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}$</p>
        </div>
      ))}
    </>
  );
}

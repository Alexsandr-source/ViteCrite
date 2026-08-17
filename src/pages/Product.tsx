import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import "../index.scss";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to load product");
  return res.json();
}

export default function ProductDetails() {
  const { id } = useParams(); // id как строка
  const productId = Number(id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: Number.isFinite(productId),
  });

  if (isLoading) return <div className="t-white">Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return null;

  return (
    <div>
      <img src={data.thumbnail} alt={data.title} />
      <h2 className="t-white">{data.title}</h2>
      <p className="t-white">{data.price} $</p>
      <div className="t-white">id: {data.id}</div>
    </div>
  );
}

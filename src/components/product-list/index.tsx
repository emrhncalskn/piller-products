import { Product } from "@/types/product";
import React from "react";
import ProductCard from "../product-card";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex gap-5 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.slug} {...product} />
      ))}
    </div>
  );
}

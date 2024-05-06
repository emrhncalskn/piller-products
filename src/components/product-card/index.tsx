import { Product } from "@/types/product";
import Link from "next/link";
import React from "react";

export default function ProductCard({ slug, photo, name }: Product) {
  return (
    <Link
      href={`/urunler/${slug}`}
      className="overflow-hidden flex flex-col gap-x-4 gap-y-20 shadow-[0_2.8px_2.2px_rgba(0,0,0,0.034)] bg-white h-[400px] px-10 py-11 rounded-br-[60px]"
    >
      <h4 className="text-center">{name}</h4>
      <div className="h-full overflow-hidden mx-auto">
        <img
          src={photo}
          className="h-full object-contain px-[35px] py-[30px] scale-150"
          alt={name}
        />
      </div>
    </Link>
  );
}

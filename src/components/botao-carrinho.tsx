"use client";

import { useCart } from "@/context/CarrinhoContext";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images?.[0] || "/placeholder.jpg",
    });
  };

  return (
    <button aria-label="Adicionar ao carrinho" onClick={handleAdd}>
      Adicionar ao carrinho
    </button>
  );
}

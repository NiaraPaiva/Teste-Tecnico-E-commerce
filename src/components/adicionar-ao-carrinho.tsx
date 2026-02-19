"use client";

import { useCart } from "@/context/CarrinhoContext";

interface AdicionarAoCarrinhoProps {
  produto: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function AdicionarAoCarrinho({
  produto,
}: AdicionarAoCarrinhoProps) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem({
      id: produto.id,
      title: produto.title,
      price: produto.price,
      image: produto.image,
    });
  };

  return <button onClick={handleAdd}>Adicionar ao carrinho</button>;
}

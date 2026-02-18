import { getProdutos } from "@/api/produtos";
import Link from "next/link";

export default async function ProdutosPage() {
  const produtos = await getProdutos();
  return (
    <main>
      <h1>Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <Link href={`/produtos/${produto.id}`}>{produto.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

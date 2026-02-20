import Link from "next/link";
import Image from "next/image";
import styles from "./app.module.css";
import { getProdutos } from "@/api/produtos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Pagina de todos os produtos",
};

export default async function ProdutosPage() {
  const produtos = await getProdutos();
  return (
    <main>
      <h1 className={styles.titulo}>Produtos</h1>
      <ul className={styles.produtos}>
        {produtos.map((produto) => (
          <li
            className={styles.imagem}
            key={produto.id}
            aria-label="Acessar produto"
          >
            <Link href={`produtos/${produto.id}`}>
              {produto.images?.[0]?.startsWith("http") && (
                <Image
                  src={produto.images[0]}
                  alt={produto.title}
                  className={styles.imagem}
                  width={300}
                  height={300}
                />
              )}
              <div>
                <h2 className={styles.nome}>{produto.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

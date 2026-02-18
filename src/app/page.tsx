import Link from "next/link";
import Image from "next/image";
import styles from "./app.module.css";
import { getProdutos } from "@/api/produtos";

export default async function ProdutosPage() {
  const produtos = await getProdutos();
  return (
    <main>
      <h1>Produtos</h1>
      <ul className={styles.produtos}>
        {produtos.map((produto) => {
          return (
            <li key={produto.id} style={{ margin: "20px" }}>
              <Link href={`produtos/${produto.id}`}>
                {produto.images && produto.images[0] && (
                  <Image
                    src={produto.images[0]}
                    alt={produto.title}
                    width={100}
                    height={100}
                    quality={75}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    priority
                  />
                )}
                <div>
                  <h2 className="nome-produto">{produto.title}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

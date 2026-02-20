import styles from "./id.module.css";
import Image from "next/image";
import AdicionarAoCarrinho from "@/components/adicionar-ao-carrinho";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detalhes do produto",
  description: "Pagina do detalhes do produto",
};

type PageParams = { params: { id: string } };
type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`,
  );
  if (!response.ok) return <main>Produto não encontrado</main>;
  const data = (await response.json()) as Produto;

  const imageUrl = data.images?.[0]?.startsWith("http") ? data.images[0] : null;

  return (
    <main>
      <div className={styles.container}>
        {imageUrl && (
          <div className={styles.imagem}>
            <Image
              src={imageUrl}
              alt={data.title}
              fill
              className={styles.imagem}
              sizes="(max-width: 600px) 100vw, 50vw"
            />
          </div>
        )}
        <div className={styles.informacoes}>
          <div className={styles.titulo}>
            <h1>{data.title}</h1>
            <h2 className={styles.preco}>R$ {data.price}</h2>
          </div>
          <p>{data.description}</p>
          <div className={styles.button}>
            <AdicionarAoCarrinho
              produto={{
                id: data.id,
                title: data.title,
                price: data.price,
                image: imageUrl || "",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

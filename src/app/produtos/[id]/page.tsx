import Image from "next/image";
type PageParams = {
  params: {
    id: string;
  };
};

type Produto = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: never;
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${params.id}`,
  );

  if (!response.ok) {
    return <main>Produto não encontrado</main>;
  }

  const data = (await response.json()) as Produto;

  return (
    <main>
      <h1>{data.title}</h1>
      <h2>R$ {data.price}</h2>
      <div className="imagem-produto">
        {data.images && data.images[0] && (
          <Image
            src={data.images[0]}
            alt={data.title}
            width={100}
            height={100}
            quality={75}
            sizes="(max-width: 600px) 100vw, 50vw"
            priority
          />
        )}
        <div>{data.title}</div>
      </div>
      <p>{data.description}</p>
    </main>
  );
}

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
      <p>{data.description}</p>
    </main>
  );
}

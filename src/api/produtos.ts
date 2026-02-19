type Produto = {
  images: string[];
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
};
type Item = {
  id: number;
  name: string;
  slug: string;
  image: string[];
};

export async function getProdutos() {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return (await response.json()) as Produto[];
}

export async function getProduto(produto: string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${produto}`,
  );
  return (await response.json()) as Produto & {
    produtos: Item[];
  };
}

export async function getItem(produto: string, id: string) {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${produto}/${id}`,
  );
  return (await response.json()) as Item;
}

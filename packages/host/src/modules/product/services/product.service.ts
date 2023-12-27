export const getProductById = (id: number | undefined) => fetch(`/v1/cadastro/produto/${id}`);

export const getImage = (name: string) => `http://localhost:7010/images/${name.toLowerCase().replace(" ", "-")}.jpg`;

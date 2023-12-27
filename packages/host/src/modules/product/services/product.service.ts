// export const getProductById = (id: number | undefined) => fetch(`/v1/cadastro/produto/${id}`);

import { mockPokemon } from "./pokemon";

export const getProductById = (id: number | undefined): Promise<any> => {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      if (id) {
        resolve(
          new Response(JSON.stringify(mockPokemon), {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          })
        );
      } else {
        resolve(new Response(null, { status: 404 }));
      }
    }, 1000);
  });
};

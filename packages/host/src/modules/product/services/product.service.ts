// export const getProductById = (id: number | undefined) => fetch(`/v1/cadastro/produto/${id}`);

import { mockPokemon } from "./pokemon";

interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
}

export interface Pokemon {
  id: number;
  price: number;
  name: {
    english: string;
  };
  type: string[];
  base: BaseStats;
}

const getPokemonPrice = (base: BaseStats): number => Math.round(Object.values(base).reduce((a, n) => a + n) / 6);

const pokemonWithPrices = mockPokemon.map((p) => ({
  ...p,
  price: getPokemonPrice(p.base),
}));

export const getProductById = (idProduct: number | undefined): Promise<any> => {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      if (idProduct) {
        resolve(
          new Response(JSON.stringify(pokemonWithPrices.find(({ id }) => id === idProduct) || null), {
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

export const getImage = (name: string) =>
  `http://localhost:7010/images/${name.toLowerCase().replace(" ", "-")}.jpg`;

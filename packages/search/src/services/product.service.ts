import { mockPokemon } from "./pokemon";

interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
}

interface Pokemon {
  id: number;
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

export const searchPokemon = (q: string): Promise<any> => {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      if (q) {
        resolve(
          new Response(
            JSON.stringify(
              pokemonWithPrices
                .filter(({ name: { english } }) => english.toLowerCase().includes(q.toLowerCase()))
                .slice(0, 20)
            ),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
        );
      } else {
        resolve(new Response(JSON.stringify(mockPokemon), { status: 200 }));
      }
    }, 1000);
  });
};

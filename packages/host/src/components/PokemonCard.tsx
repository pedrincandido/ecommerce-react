import React from "react";
import { Col, Row } from "../styles/styles";

const AddToCart = React.lazy(() => import("checkout/AddToCart"));

export interface PokemonCardProps {
  id: number;
  children?: any;
  right?: boolean;
}

export const PokemonCard = ({ id, children, right }: PokemonCardProps) => {
  const { data: pokemon } = useQuery(["getPokemonById", { id }], getPokemonById);

  return (
    <div
      style={{
        marginTop: "1em",
        padding: "1em",
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
    >
      <Row>
        {pokemon && (
          <>
            {!right && (
              <Col xs={3}>
                <img src={getImage(pokemon)} style={{ width: "100%" }} />
              </Col>
            )}
            <Col xs={9}>
              <h1>{pokemon.name.english}</h1>
              {children}
              <Row>
                <Col xs={{ span: 1, offset: 8 }} style={{ fontWeight: "bold" }}>
                  ${pokemon.price}
                </Col>
                <Col xs={{ span: 3 }}>
                  <React.Suspense fallback={<span />}>
                    <AddToCart pokemon={pokemon} />
                  </React.Suspense>
                </Col>
              </Row>
            </Col>
            {right && (
              <Col xs={3}>
                <img src={getImage(pokemon)} style={{ width: "100%" }} />
              </Col>
            )}
          </>
        )}
      </Row>
    </div>
  );
};

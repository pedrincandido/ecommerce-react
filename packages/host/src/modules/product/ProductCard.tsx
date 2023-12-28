import React, { useEffect, useState } from "react";
import { ProductCardProps } from "./interfaces/product-card.interface";
// import { getImage } from "./services/product.service";
import { Pokemon, getProductById } from "./services/product.service";
import { Col, Row } from "./styles/styles";

export const ProductCard = ({ id, children, right }: ProductCardProps) => {
  const [product, setProduct] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getProductById(id);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

        {!right && <Col xs={3}>{/* <img src={getImage(product)} style={{ width: "100%" }} /> */}</Col>}
        <Col xs={9}>
          <h1>{product?.name.english}</h1>
          {children}
          <Row>
            <Col xs={5} style={{ fontWeight: "bold" }}>
              ${product?.price}
            </Col>
            <Col xs={3}>
              <React.Suspense fallback={<span />}>{/* <AddToCart pokemon={product} /> */}</React.Suspense>
            </Col>
          </Row>
        </Col>
        {right && <Col xs={3}>{/* <img src={getImage(product)} style={{ width: "100%" }} /> */}</Col>}
        {/* </> */}
        {/* )} */}
      </Row>
    </div>
  );
};

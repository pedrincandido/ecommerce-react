import React, { useEffect } from "react";
import { ProductCardProps } from "./interfaces/product-card.interface";
import { getImage } from "./services/product.service";
import { Col, Row } from "./styles/styles";
import { useProduct } from "./useProduct";

const AddToCart = React.lazy(() => import("checkout/AddToCart"));

export const ProductCard = ({ id, children, right }: ProductCardProps) => {
  const { product, setProductId } = useProduct();

  useEffect(() => {
    if (id) {
      setProductId(id);
    }
  }, [id, setProductId]);

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
        {product && (
          <>
            {!right && (
              <Col xs={3}>
                <img src={getImage(product)} style={{ width: "100%" }} />
              </Col>
            )}
            <Col xs={9}>
              <h1>{product.name.english}</h1>
              {children}
              <Row>
                <Col xs={5} style={{ fontWeight: "bold" }}>
                  ${product.price}
                </Col>
                <Col xs={3}>
                  <React.Suspense fallback={<span />}>
                    <AddToCart pokemon={product} />
                  </React.Suspense>
                </Col>
              </Row>
            </Col>
            {right && (
              <Col xs={3}>
                <img src={getImage(product)} style={{ width: "100%" }} />
              </Col>
            )}
          </>
        )}
      </Row>
    </div>
  );
};

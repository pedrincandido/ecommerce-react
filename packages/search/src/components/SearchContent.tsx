import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { CardImage, Col, Row, StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from "../styles/styles";
import CustomFormControl from "./CustomFormControl/CustomFormControl";

import { addItem } from "checkout/cartSlice";

// const AddToCart = React.lazy(() => import("checkout/cartSlice"));

const SearchContent = () => {
  const data: any = [];
  const dispatch = useDispatch();

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
  };

  const [search, searchSet] = React.useState("");
  // const { data } = useQuery(["searchPokemon", { q: search }], searchPokemon);

  return (
    <>
      <Row style={{ paddingTop: "1em" }}>
        <CustomFormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => searchSet(e.target.value)}
        />
      </Row>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 33%)",
          gridGap: "1em",
          paddingTop: "1em",
        }}
      >
        {data &&
          data.map((product: any) => (
            <StyledCard style={{ width: "18rem" }} key={product.name.english}>
              <CardImage
                // src={getImage(product)}
                style={{
                  maxHeight: 200,
                  objectFit: "contain",
                  width: "auto",
                  height: "auto",
                }}
              ></CardImage>
              <StyledCardBody>
                <StyledCardTitle>{product.name.english}</StyledCardTitle>
                <StyledCardText>{product.type.join(", ")}</StyledCardText>
                <Row>
                  <Col xs={4}>${product.price}</Col>
                  <Col xs={8}>
                    <React.Suspense fallback={<span />}>
                      <button onClick={() => handleAddItem(product)} style={{ width: "100%" }}>
                        Add To Cart
                      </button>
                    </React.Suspense>
                  </Col>
                </Row>
              </StyledCardBody>
            </StyledCard>
          ))}
      </div>
    </>
  );
};

export default SearchContent;

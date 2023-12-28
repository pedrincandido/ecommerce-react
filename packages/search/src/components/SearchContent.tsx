import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItem } from "checkout/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonWithPrices, searchPokemon } from "../services/product.service";
import { Col, Row, StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from "../styles/styles";
import CustomFormControl from "./CustomFormControl/CustomFormControl";
import { StyledButton } from "./styles";

const SearchContent = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(pokemonWithPrices);

  useEffect(() => {
    const doSearch = async () => {
      if (search.trim() !== "") {
        try {
          const response = await searchPokemon(search);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const results = await response.json();
          setProducts(results);
        } catch (error) {
          console.error("Failed to fetch products:", error);
          setProducts(pokemonWithPrices);
        }
      } else {
        setProducts(pokemonWithPrices);
      }
    };

    doSearch();
  }, [search]);

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
  };

  return (
    <>
      <Row style={{ paddingTop: "1em" }}>
        <CustomFormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        {products?.map((product: any) => (
          <StyledCard style={{ width: "18rem" }} key={product.name.english}>
            {/* <CardImage
              // src={getImage(product)}
              style={{
                maxHeight: 200,
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
            /> */}
            <StyledCardBody>
              <StyledCardTitle>{product.name.english}</StyledCardTitle>
              <StyledCardText>{product.type.join(", ")}</StyledCardText>
              <Row>
                <Col xs={4}>${product.price}</Col>
                <Col xs={8}>
                  <StyledButton onClick={() => handleAddItem(product)}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
                  </StyledButton>
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

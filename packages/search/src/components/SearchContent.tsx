import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItem } from "checkout/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { pokemonWithPrices, searchPokemon } from "../services/product.service";
import { CardGrid, Col, Row, StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from "../styles/styles";
import CustomFormControl from "./CustomFormControl/CustomFormControl";
import { StyledButton, StyledContainer } from "./styles";

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
    <StyledContainer>
      <Row style={{ paddingTop: "1em" }}>
        <CustomFormControl
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Row>
      <CardGrid>
        {products?.map((product: any) => (
          <StyledCard key={product.name.english}>
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
      </CardGrid>
    </StyledContainer>
  );
};

export default SearchContent;

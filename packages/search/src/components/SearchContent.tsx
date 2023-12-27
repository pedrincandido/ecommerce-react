import { addItem } from "checkout/cartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchPokemon as searchPokemonService } from "../services/product.service";
import { CardImage, Col, Row, StyledCard, StyledCardBody, StyledCardText, StyledCardTitle } from "../styles/styles";
import CustomFormControl from "./CustomFormControl/CustomFormControl";
import { mockPokemon } from "../services/pokemon";

const SearchContent = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(mockPokemon);

  console.log(products);

  useEffect(() => {
    const doSearch = async () => {
      if (search.trim() !== "") {
        try {
          const results = await searchPokemonService(search);
          setProducts(results);
        } catch (error) {
          console.error("Failed to fetch products:", error);
          setProducts([]);
        }
      } else {
        setProducts([]);
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
        {products.map((product: any) => (
          <StyledCard style={{ width: "18rem" }} key={product.name.english}>
            <CardImage
              // src={getImage(product)}
              style={{
                maxHeight: 200,
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
            />
            <StyledCardBody>
              <StyledCardTitle>{product.name.english}</StyledCardTitle>
              <StyledCardText>{product.type.join(", ")}</StyledCardText>
              <Row>
                <Col xs={4}>${product.price}</Col>
                <Col xs={8}>
                  <button onClick={() => handleAddItem(product)} style={{ width: "100%" }}>
                    Add To Cart
                  </button>
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

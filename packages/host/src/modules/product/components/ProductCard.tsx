import { useEffect, useState } from "react";
import { ProductCardProps } from "../interfaces/product-card.interface";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addItem } from "checkout/cartSlice";
import { useDispatch } from "react-redux";
import { Pokemon, getProductById } from "../services/product.service";
import { Card, CardContent, CardFooter, StyledButton } from "../styles/styles";

export const ProductCard = ({ id, children, right }: ProductCardProps) => {
  const dispatch = useDispatch();
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

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
  };

  return (
    <Card>
      <CardContent>
        <h1>{product?.name.english}</h1>
        {children}
        <div>${product?.price}</div>
      </CardContent>
      <CardFooter>
        <StyledButton onClick={() => handleAddItem(product)}>
          <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
        </StyledButton>
      </CardFooter>
    </Card>
  );
};

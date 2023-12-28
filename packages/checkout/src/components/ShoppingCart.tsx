import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem, removeItem } from "../store/cartSlice";
import { RootState } from "../store/store";
import { PokemonCard, PokemonTitle, StyledRemoveButton } from "./styles";

const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId: number) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((item: CardItem) => (
            <PokemonCard key={item.id}>
              <PokemonTitle>{item.name.english}</PokemonTitle>
              <p>Quantidade: {item.quantity}</p>
              <p>Preço: ${item.price}</p>
              <StyledRemoveButton onClick={() => handleRemoveItem(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </StyledRemoveButton>
            </PokemonCard>
          ))}
        </div>
      )}

      <div>
        <strong>Total Geral:</strong> ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}
      </div>
    </div>
  );
};

export default ShoppingCart;

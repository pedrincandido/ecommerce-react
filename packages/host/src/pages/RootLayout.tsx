import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "@mf-types/checkout/store";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { StyledContainer, StyledLink, StyledNav, StyledNavbar } from "./styles";

const selectTotalQuantity = (state: RootState) => {
  return state.cart.items.reduce((total, item) => total + item.quantity, 0);
};

const RootLayout = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <StyledContainer>
      <StyledNavbar>
        <StyledNav className="mr-auto">
          <div>
            <StyledLink to="/" style={{ color: "white" }}>
              Home
            </StyledLink>
          </div>

          <div>
            <StyledLink to="/search" style={{ color: "white" }}>
              Search
            </StyledLink>
          </div>
        </StyledNav>
        <div>
          <StyledLink
            to="/checkout"
            style={{
              paddingLeft: 10,
              paddingBottom: 15,
            }}
          >
            <FontAwesomeIcon style={{ color: "white" }} icon={faShoppingCart} />
            <span style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}>{totalQuantity}</span>
          </StyledLink>
        </div>
      </StyledNavbar>

      <Outlet />
    </StyledContainer>
  );
};

export default RootLayout;

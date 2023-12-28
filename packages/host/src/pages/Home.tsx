import { RootState } from "@mf-types/checkout/store";
import { Link, Outlet } from "react-router-dom";
import { StyledContainer, StyledNav, StyledNavbar } from "./styles";
import { useSelector } from "react-redux";

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
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </div>

          <div>
            <Link to="/search" style={{ color: "white" }}>
              Search
            </Link>
          </div>
        </StyledNav>
        <div>
          <Link
            to="/checkout"
            style={{
              paddingLeft: 10,
              paddingBottom: 15,
            }}
          >
            <span style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}>{totalQuantity}</span>
          </Link>
        </div>
      </StyledNavbar>

      <Outlet />
    </StyledContainer>
  );
};

export default RootLayout;

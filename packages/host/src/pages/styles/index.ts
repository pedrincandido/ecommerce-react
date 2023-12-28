import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  // Your custom styles here
`;

export const StyledNavbar = styled.nav`
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 56px;
`;

export const StyledNav = styled.div`
  display: flex;
  gap: 20px;


  > div {
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`

// export const StyledNavbarBrand = styled(Navbar.Brand)`
//   color: white; // Example style
//   // Other custom styles
// `;

// export const StyledNavbarToggle = styled(Navbar.Toggle)`
//   // Custom styles
// `;

// export const StyledNavbarCollapse = styled(Navbar.Collapse)`
//   // Custom styles
// `;

// export const StyledNav = styled(Nav)`
//   // Custom styles
// `;

// export const StyledNavLink = styled(Nav.Link)`
//   color: white; // Example style
//   // Other custom styles
// `;

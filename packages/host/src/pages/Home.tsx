import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { StyledContainer, StyledNav, StyledNavbar } from "./styles";

// const Home = React.lazy(() => import("home/Home"));
const Search = React.lazy(() => import("search/Search"));
// const Checkout = React.lazy(() => import("checkout/Checkout"));

const HomeRoute = () => <React.Suspense fallback={<div />}>{/* <Home /> */}</React.Suspense>;
const SearchRoute = () => (
  <React.Suspense fallback={<div />}>
    <Search />
  </React.Suspense>
);
const CheckoutRoute = () => <React.Suspense fallback={<div />}>{/* <Checkout /> */}</React.Suspense>;

const Home = ({ items = [], page = "home" }) => (
  <StyledContainer>
    <StyledNavbar>
      {/* <Navbar.Brand>
          <Link to="/" style={{ color: "white" }}>
            Pokeshop
          </Link>
        </Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      {/* <Navbar.Collapse id="basic-navbar-nav"> */}
      <StyledNav className="mr-auto">
        {/* <Nav.Link> */}
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        {/* </Nav.Link> */}
        {/* <Nav.Link> */}
        <Link to="/search" style={{ color: "white" }}>
          Search
        </Link>
        {/* </Nav.Link> */}
      </StyledNav>
      <Link
        to="/checkout"
        style={{
          paddingLeft: 10,
          paddingBottom: 15,
        }}
      >
        {/* <Cart color="white" size={30} /> */}
        <span style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}>
          {items.reduce((a, { count }) => a + count, 0)}
        </span>
      </Link>
      {/* </Navbar.Collapse> */}
    </StyledNavbar>
    {/* <StyledContainer>
        <Routes>
          <Route path="/">
            <HomeRoute />
          </Route>
          <Route path="/search">
            <SearchRoute />
          </Route>
          <Route path="/checkout">
            <CheckoutRoute />
          </Route>
        </Routes>
      </StyledContainer> */}
  </StyledContainer>
);

export default Home;

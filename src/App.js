import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiOpenedFoodCan } from "react-icons/gi";
const App = () => {
  return (
    <Router>
      <Nav>
        <div>
          <GiOpenedFoodCan />
          <Logo to={"/"}>FoodiesStop</Logo>
        </div>
      </Nav>
      <div>
        <Search />
        <Category />
        <Pages />
      </div>
    </Router>
 
  );
};
 
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;

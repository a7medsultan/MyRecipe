import Nav from "./components/Nav";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import RecipeDetails from "./components/RecipeDetails";
import "./app.css";
import { useState } from "react";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  const [recipeId, setRecipeId] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <RecipeList setRecipeId={setRecipeId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeId={recipeId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

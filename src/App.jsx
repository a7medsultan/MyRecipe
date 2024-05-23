import Nav from "./components/Nav";
import Search from "./components/Search";
import RecipeList from "./components/RecipeList";
import Container from "./components/Container";
import "./app.css";
import { useState } from "react";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <RecipeList foodData={foodData} />
      </Container>
    </div>
  );
}

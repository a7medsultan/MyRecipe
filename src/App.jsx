import Search from "./components/Search";
import RecipeList from "./components/RecipeList";

import { useState } from "react";

export default function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />

      <RecipeList foodData={foodData} />
    </div>
  );
}

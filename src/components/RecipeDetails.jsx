import { useEffect, useState } from "react";
import styles from "./recipedetails.module.css";
import Ingredient from "./Ingredient";
export default function RecipeDatails({ recipeId }) {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_Key = "12a27ddbbcdd47f2aeba7e66d918be31";
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);
      const data = await res.json();
      console.log(data);
      setRecipeDetails(data);
      setIsLoading(false);
    }
    fetchRecipe();
  }, [recipeId]);

  const prepTime = recipeDetails.readyInMinutes;
  const vegetarian = recipeDetails.vegetarian ? "Vegetarian" : "";

  return (
    <div className={styles.detailsContainer}>
      <div>
        <h1>{recipeDetails.title}</h1>
      </div>
      <div>
        <img
          className={styles.img}
          src={recipeDetails.image}
          alt={recipeDetails.title}
        />
      </div>
      <div>
        <span className={styles.tag}>
          Serves: {recipeDetails.servings} people
        </span>
        <span className={styles.tag}>{vegetarian}</span>
        <span className={styles.tag}>
          cocking time : {recipeDetails.readyInMinutes} min
        </span>
      </div>
      <div>
        <p className={styles.summery}>{recipeDetails.summary}</p>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <div className={styles.ingredientsContainer}>
          {isLoading
            ? "Loading, please wait ..."
            : recipeDetails.extendedIngredients.map((ingredient) => (
                <div className={styles.ingredientCard}>
                  <Ingredient ingredient={ingredient} />
                </div>
              ))}
        </div>
      </div>
      <div>
        <h3>Instruction</h3>
        <ul>
          {isLoading
            ? "Loading, please wait ..."
            : recipeDetails.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
        </ul>
      </div>
    </div>
  );
}

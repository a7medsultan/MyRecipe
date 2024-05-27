import RecipeListItem from "./RecipeListItem";
export default function RecipeList({ setRecipeId, foodData }) {
  return (
    <div>
      {foodData.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          setRecipeId={setRecipeId}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

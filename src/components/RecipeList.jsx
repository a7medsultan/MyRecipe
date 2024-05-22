import RecipeListItem from "./RecipeListItem";
export default function RecipeList({ foodData }) {
  return (
    <div>
      {foodData.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

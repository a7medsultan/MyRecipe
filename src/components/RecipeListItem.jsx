export default function RecipeListItem({ recipe }) {
  return (
    <div>
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <button>View Recipe</button>
    </div>
  );
}

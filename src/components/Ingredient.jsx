export default function Ingredient({ ingredient }) {
  return (
    <>
      <div className={styles.ingredientImg}>
        <img
          src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        />
      </div>
      <div>
        <p>
          <strong>{ingredient.name}</strong>
        </p>
        <p>
          {ingredient.amount} {ingredient.unit}
        </p>
      </div>
    </>
  );
}

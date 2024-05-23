import styles from "./recipelistitem.module.css";
export default function RecipeListItem({ recipe }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.itemImage}
          src={recipe.image}
          alt={recipe.title}
        />
      </div>
      <div className={styles.contentContainer}>
        <h3>{recipe.title}</h3>
      </div>
      <div className={styles.btnContainer}>
        <button className={styles.btn}>View Recipe</button>
      </div>
    </div>
  );
}

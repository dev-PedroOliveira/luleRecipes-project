import RecipeForm from '../recipe/RecipeForm';

import styles from './AddRecipes.module.css';

function AddRecipes() {
    function creatRecipes(recipe) {

    }
    return (
        <div className={styles.addrecipe_container}>
            <h1>Create Recipe</h1>
            <p>Write the details of your Recipe</p>
            <RecipeForm handleSubmit={creatRecipes} btnText="Create Recipe" />
        </div>
    );
}

export default AddRecipes;

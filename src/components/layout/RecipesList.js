import Card from '../form/Card';
import { Stack, Typography } from "@mui/material";
import { useRecipes } from "../../RecipesContext";


const RecipesList = () => {
  const { recipes, error, loading, removeRecipe } = useRecipes(); 

  if (loading) return <Typography>Carregando receitas...</Typography>;

  if (error) return <Typography>Erro: {error}</Typography>;

  return (
    <Stack 
      display="flex"
      flexWrap="wrap" // Corrigido de "flex-wrap"
      gap={2} // Corrigido para Material-UI
      justifyContent="center" // Corrigido de "justify-content"
      flexDirection="column"
    >
      {Array.isArray(recipes) && recipes.map((recipe) => (
        <Card
          key={recipe.recipeId} // Usando recipeId para o key
          id={recipe.recipeId} // Passando o ID correto
          name={recipe.name}
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          totalTime={recipe.totalTime}
          description={recipe.description}
          makingAmount={recipe.makingAmount}
          ingredients={recipe.ingredients}
          handleRemove={removeRecipe}
        />
      ))}
    </Stack>
  );
};

export default RecipesList;


import  React from "react";

export default function useRecipeFormFields(recipe) {
    
    const fields = React.useMemo(() => [
        {
            type: "text",
            text: "Name of Recipe",
            name: "name",
            placeholder: "Enter recipe name",
            value: recipe.name || '',
        },
        {
            type: "text",
            text: "Description of your Recipe",
            name: "description",
            placeholder: "Description",
            value: recipe.description || '',
        },
        {
            type: "text",
            text: "Preparation Time (minutes)",
            name: "prepTime",
            placeholder: "Preparation time",
            value: recipe.prepTime || '',
        },
        {
            type: "tetx",
            text: "Cook Time (minutes)",
            name: "cookTime",
            placeholder: "Coock time",
            value: recipe.cookTime || '',
        },
        {
            type: "text",
            text: "Total Time (minutes)",
            name: "totalTime",
            placeholder: "Total time",
            value: recipe.totalTime || '',
        },
        {
            type: "text",
            text: "Making Amount",
            name: "makingaAmount",
            placeholder: "Amount",
            value: recipe.makingAmount || '',
        },
        {
            type: "text",
            text: "Ingredients",
            name: "ingredients",
            placeholder: "Ingredients for your Recipe",
            value: recipe.ingredients || '',
        }
    ], []);

    return { fields };
}
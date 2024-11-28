import React, { createContext, useState, useContext, useCallback, useMemo } from "react";

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState();
    const [fields, setFields] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const myRecipes = useMemo(() => recipes?.filter((rec) => !rec.isFromApi, []));

    const addRecipe = (newRecipe) => {
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    };

    const removeRecipe = (id) => {
        setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.recipeId !== id))
    }

    const setRecipeFields = useCallback((recipe) => {
        const recipeToUse = recipe || {
            recipeId: null,
            name: null, 
            description: null,
            prepTime: null,
            cookTime: null,
            totalTime: null,
            makingAmount: null,
            ingredients: null,
        }

        setFields([
            {
                type: "text",
                text: "recipeId",
                name: "recipeId",
                placeholder: "",
                value: recipeToUse.recipeId || '',
            },
            {
                type: "text",
                text: "Name of Recipe",
                name: "name",
                placeholder: "Enter recipe name",
                value: recipeToUse.name || '',
            },
            {
                type: "text",
                text: "Description of your Recipe",
                name: "description",
                placeholder: "Description",
                value: recipeToUse.description || '',
            },
            {
                type: "text",
                text: "Preparation Time (minutes)",
                name: "prepTime",
                placeholder: "Preparation time",
                value: recipeToUse.prepTime || '',
            },
            {
                type: "text",
                text: "Coock Time (minutes)",
                name: "cookTime",
                placeholder: "Cook time",
                value: recipeToUse.cookTime || '',
            },
            {
                type: "text",
                text: "Total Time (minutes)",
                name: "totalTime",
                placeholder: "Total time",
                value: recipeToUse.totalTime || '',
            },
            {
                type: "text",
                text: "Making Amount",
                name: "makingAmount",
                placeholder: "Amount",
                value: recipeToUse.makingAmount || '',
            },
            {
                type: "text",
                text: "Ingredients",
                name: "ingredients",
                placeholder: "Ingredients for your Recipe",
                value: recipeToUse.ingredients || '',
            }
        ])
    }, []);     

    return (
        <RecipesContext.Provider value={{ recipes, myRecipes, addRecipe, removeRecipe, setRecipeFields, fields, setRecipes, setError, setLoading, error, loading }}>
            {children}
        </RecipesContext.Provider>
    );
};


export const useRecipes = () => useContext(RecipesContext);

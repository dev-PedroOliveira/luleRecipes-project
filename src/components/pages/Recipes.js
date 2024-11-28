import { Stack, Container } from "@mui/material";

import RecipesList from '../layout/RecipesList';
import LinkButton from '../layout/LinkButton';

import styles from './Recipes.module.css';
import { useState } from "react";

function Recipes () {

    return (
        <Stack className={styles.recipe_container}>
            <div className={styles.title_container}>
                <h1>Recipes</h1>
                <LinkButton to= "/recipes/add" text="Create your Recipe" />
            </div>          
            <Container>
                <RecipesList />
            </Container>
        </Stack>
    ) 
};

export default Recipes;
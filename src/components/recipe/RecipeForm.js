import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../../RecipesContext';

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from './RecipeForm.module.css';

import { Typography } from '@mui/material';

function getId(input) {
    return input.substring(input.lastIndexOf('/') + 1);
}

function RecipeForm({ btnText, handleSubmit }) {
    const navigate = useNavigate();
    const { recipes, loading, setRecipeFields, fields } = useRecipes();

    const pathname = window.location.pathname;
    const finalPath = getId(pathname);
    const recipeId = finalPath === 'add' ? undefined : finalPath;

    const smt = fields?.find((field) => field.name === 'recipeId');

    if (!recipeId && smt?.value) {
        setRecipeFields();
    }
    
    if (recipeId && loading) return <Typography>Carregando campos...</Typography>;
    
    const recipeFromURL = recipes?.find((rec) => rec.recipeId == recipeId);
    
    if (recipeId && !recipeFromURL) {
        navigate('/recipes/add');
    }

    if (!fields) setRecipeFields(recipeFromURL);
    const submit = (e) => {
        e.preventDefault();
        if (handleSubmit) handleSubmit(fields);
    };

    const handleChange = (e) => {
        const updatedField = {
            ...fields.find(field => field.name === e.target.name), value: e.target.value
        };
        
        setRecipeFields((prevFields) => [
            ...prevFields.filter(field => field.name !== e.target.name), updatedField,
        ]);    
    };
    
    return (
        <form onSubmit={submit} className={styles.form}>
            {fields &&
                fields.filter((field) => field.name !== 'recipeId')
                .map((field) => (
                    <Input
                        key={field.name}
                        type={field.type}
                        text={field.text}
                        name={field.name}
                        placeholder={field.placeholder}
                        handleOnChange={handleChange}
                        value={field.value}
                    />
                ))}
            <SubmitButton text={btnText} /> 
        </form>
    );
}

export default RecipeForm;



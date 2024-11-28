import React from 'react';
import styles from './Card.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LinkButton from '../layout/LinkButton';

const Card = ({ id, name, prepTime, cookTime, totalTime, makingAmount, ingredients, description, handleRemove }) => {
  const removeRecipe = (e) => {
    e.preventDefault();
    console.log("id recebido no card:", id)
    handleRemove(id); 
  };

  return (
    <div className={styles.card}>
      {name && <h3>{name}</h3>}
      {prepTime && <p><span>Preparation time:</span> {prepTime}</p>}
      {cookTime && <p><span>Time to cook:</span> {cookTime}</p>}
      {totalTime && <p><span>Total time:</span> {totalTime}</p>}
      {description && (
        <p className={styles.description}>
          <span>Description of the Recipe:</span> {description}
        </p>
      )}
      {makingAmount && <p><span>Amount:</span> {makingAmount}</p>}
      {ingredients && (
        <>
          <p><span>Ingredients:</span></p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </>
      )}
      <div className={styles.card_actions}>
        <LinkButton to={`edit/${id}`} icon={<EditIcon/>} text="Edit" />
        <button onClick={removeRecipe} className={styles.card_actions_button}>
          <DeleteIcon /> Delete
        </button>
      </div>
    </div>
  );
}; 

export default Card;
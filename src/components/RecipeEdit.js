import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContext } from './App'
// RANDOM ID
import { v4 as uuidv4 } from 'uuid';

export default function RecipeEdit({ selectedRecipe }) {

    const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(selectedRecipe.id, { ...selectedRecipe, ...changes })
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...selectedRecipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ ingredients: newIngredients })
    }

    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: "",
            amount: ""
        }

        handleChange({ ingredients: [...selectedRecipe.ingredients, newIngredient] })
    }

    function handleIngredientDelete(id) {
        handleChange({ ingredients: selectedRecipe.ingredients.filter(i => i.id !== id) })
    }

    return (
        <div className="recipe-edit">
            <div className="recipe-edit__remove-button-container">
                <button className="btn recipe-edit__remove-button" onClick={() => handleRecipeSelect(undefined)}
                >&times;</button>
            </div>

            <div className="recipe-edit__details-grid">
                <label htmlFor="name" className="recipe-edit__label">Name</label>
                <input type="text" name='name' id="name" className="recipe-edit__input"
                    value={selectedRecipe.name}
                    onChange={e => handleChange({ name: e.target.value })}
                />

                <label htmlFor="cookTime" className="recipe-edit__label">Cook Time</label>
                <input type="text" name='cookTime' id="cookTime" className="recipe-edit__input"
                    value={selectedRecipe.cookTime}
                    onChange={e => handleChange({ cookTime: e.target.value })}
                />

                <label htmlFor="servings" className="recipe-edit__label">Servings</label>
                <input type="number" min="1" name='servings' id="servings" className="recipe-edit__input"
                    value={selectedRecipe.servings}
                    onChange={e => handleChange({ servings: +e.target.value || '' })}
                />

                <label htmlFor="instructions" className="recipe-edit__label">Instructions</label>
                <textarea name="instructions" id="instructions" cols="30" rows="10" className="recipe-edit__input"
                    value={selectedRecipe.instructions}
                    onChange={e => handleChange({ instructions: e.target.value })}
                />
            </div>

            <br />
            <label className="recipe-edit__label">Ingredients</label>
            <div className="recipe-edit__ingredient-grid">
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {selectedRecipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit
                        key={ingredient.id}
                        ingredient={ingredient}
                        handleIngredientChange={handleIngredientChange}
                        handleIngredientDelete={handleIngredientDelete}
                    />
                ))}
            </div>
            <div className="recipe-edit__add-ingredient-btn-container">
                <button className="btn btn--primary"
                    onClick={() => handleIngredientAdd()}
                >Add Ingredient</button>
            </div>
        </div>
    )
}

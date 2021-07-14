import React, { useContext } from 'react'
import IngredientList from './IngredientList'
// IMPORTING CONTEXT
import { RecipeContext } from './App'

export default function Recipe(props) {

    // DESTRUCTURING VALUE(FUNCTION) OF USECONTEXT
    const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext)

    const {
        id,
        name,
        cookTime,
        servings,
        instructions,
        ingredients,
        // handleRecipeDelete
    } = props

    // TRAINING CODE
    // function Ingredient({ name, amount }) {
    //     return (
    //         <>
    //             <span>{name}</span>
    //             <span>{amount}</span>
    //         </>
    //     )
    // }

    // function IngredientList2({ ingredients }) {
    //     console.log(ingredients)
    //     const ingredientEl = ingredients.map(ingredient => {
    //         const { id, name, amount } = ingredient
    //         console.log(id, name, amount)

    //         return <Ingredient key={ingredient.id} {...ingredient} />

    //     })

    //     return (
    //         <div className="ingredient-grid">
    //             {ingredientEl}
    //         </div>
    //     )
    // }

    // ANOTHER TRAINING 
    function Ingredient({ name, amount }) {
        return (
            <>
                <span>{name}</span>
                <span>{amount}</span>
            </>
        )
    }

    function IngredientElement2({ ingredients }) {
        const ingredientEl = ingredients.map(ingredient => {
            return (
                <Ingredient key={ingredient.id} {...ingredient} />
            )
        })

        return (
            <div className="ingredient-grid">
                {ingredientEl}
            </div>
        )
    }

    return (
        <div className="recipe">
            <div className="recipe__header">
                <h3 className="recipe__title">{name}</h3>
                <div className="recipe__header--button__container--box">
                    <button className="btn btn--primary mr-1" onClick={() => handleRecipeSelect(id)}>Edit</button>
                    <button className="btn btn--secondary" onClick={() => handleRecipeDelete(id)}>Delete</button>
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Cook Time:</span>
                <span className="recipe__value">{cookTime}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Servings:</span>
                <span className="recipe__value">{servings}</span>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Instructions:</span>
                <div className="recipe__value recipe__value--indented recipe__instructions">
                    {instructions}
                </div>
            </div>
            <div className="recipe__row">
                <span className="recipe__label">Ingredients:</span>
                <div className="recipe__value recipe__value--indented">
                    {/* ORIGINAL CODE with functional components*/}
                    {/* <IngredientList ingredients={ingredients} /> */}

                    {/* TRAINING CODE */}
                    {/* <IngredientList2 ingredients={ingredients} /> */}

                    {/* ANOTHER TRAINING CODE */}
                    <IngredientElement2 ingredients={ingredients} />
                </div>
            </div>
        </div>
    )
}

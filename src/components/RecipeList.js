import React, { useContext } from 'react'
import Recipe from './Recipe'
// IMPORTING CONTEXT
import { RecipeContext } from './App'

export default function RecipeList(props) {

    // DESTRUCTURING VALUE(FUNCTION) OF USECONTEXT
    const { handleRecipeAdd } = useContext(RecipeContext)

    const {
        recipes,
        // handleRecipeAdd,
        // handleRecipeDelete
    } = props

    return (
        <div className="recipe-list">
            <div>
                {
                    recipes.map(recipe => {
                        {/* console.log(recipe) */ }
                        return (
                            <Recipe
                                key={recipe.id}
                                {...recipe}
                            // handleRecipeDelete={handleRecipeDelete}
                            />
                        )
                    })
                }
            </div>
            <div className="recipe-list__add-recipe-btn-container">
                <button className="btn btn--primary" onClick={handleRecipeAdd}>Add Recipe</button>
            </div>
        </div>
    )
}

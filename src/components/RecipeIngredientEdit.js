import React from 'react'

export default function RecipeIngredientEdit(props) {

    const {
        ingredient,
        handleIngredientChange,
        handleIngredientDelete
    } = props

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
    }

    return (
        <>
            <input
                type="text"
                className="recipe-edit__input"
                value={ingredient.name}
                onChange={e => handleChange({ name: e.target.value })}
            />
            <input
                type="text"
                className="recipe-edit__input"
                value={ingredient.amount}
                onChange={e => handleChange({ amount: e.target.value })}
            />
            <button className="btn btn--secondary"
                onClick={() => handleIngredientDelete(ingredient.id)}
            >&times;</button>
        </>
    )
}

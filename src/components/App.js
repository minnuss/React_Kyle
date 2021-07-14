import React, { useState, useEffect } from 'react'
// LEFT PART OF SCREEN
import RecipeList from './RecipeList'
import '../css/App.css'

// RIGHT PART OF SCREEN
import RecipeEdit from './RecipeEdit'

// RANDOM ID
import { v4 as uuidv4 } from 'uuid';
// console.log(uuidv4())

// JUST A VARIABLE FOR LOCAL STORAGE KEY
const LOCAL_STORAGE_KEY = 'learningReactWithKyle.recipes'

// PASSING CONTEXT TO OTHER DIRECT COMPONENTS
export const RecipeContext = React.createContext()

// MAIN LEFT SIDE APP
function App() {

  // USE STATE
  const [data, setData] = useState(sampleRecipes)

  // USET STATE FOR EDIT RECIPES
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  // find selectedRecipe and set it to selectedRecipeId
  const selectedRecipe = data.find(recipe => recipe.id === selectedRecipeId)
  // console.log(selectedRecipe)

  // SETTING VALUE FOR CONTEXT, object of two functions
  const recipeContextValue = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
    handleRecipeSelect: handleRecipeSelect,
    handleRecipeChange: handleRecipeChange
  }

  // FUNCTION FOR SELECTED RECIPE USESTATE
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  // READ DATA FROM LOCAL STORAGE - needs to be first, before save data to local storage
  useEffect(() => {
    // console.log('rendered read local storage')

    const recipesLocalStorageData = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (recipesLocalStorageData) {
      setData(JSON.parse(recipesLocalStorageData))
    }
  }, []) // empty array, means it will load only once, when page reload

  // SAVE DATA TO LOCAL STORAGE - needs to be second, after reading data from local storage
  useEffect(() => {
    // console.log('rendered save local storage')

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }, [data]) // value in array means useEffect will trigger every time "data" change, it will RERENDER

  // ALLOW CHANGES TO BE MADE IN EDIT SECTION
  function handleRecipeChange(id, recipe) {
    // making a copy of useState data
    const newRecipe = [...data]
    // find index of the selected recipe
    const index = newRecipe.findIndex(recipe => recipe.id === id)
    // set old recipe from data to new recipe
    newRecipe[index] = recipe
    setData(newRecipe)
  }

  // ADD BUTTON WITH useState
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }
    // persist changes to new recipe add
    setSelectedRecipeId(newRecipe.id)
    // load old data and then add new recipe after 
    setData([...data, newRecipe]);
  }

  // DELETE BUTTON WITH useState
  function handleRecipeDelete(id) {
    if (setSelectedRecipeId != null && setSelectedRecipeId === id) {
      setSelectedRecipeId(undefined);
    }
    setData(data.filter(recipe => recipe.id !== id));
  }

  // WRAPING A RETURN VALUE TO A CONTEXT PROVIDER
  return (
    <>
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList
          recipes={data}
        // handleRecipeAdd={handleRecipeAdd}
        // handleRecipeDelete={handleRecipeDelete}
        />
        {/* hide edit section if there is no selected recipe */}
        {selectedRecipe && <RecipeEdit selectedRecipe={selectedRecipe} />}
      </RecipeContext.Provider>
    </>
  );
}

// DEFAULT SAMPLE RECIPES
const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat Chicken.',
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on Pork\n2. Put pork in oven\n3. Eat Pork.',
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;

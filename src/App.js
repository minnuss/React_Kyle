import React, { useState } from 'react'
import Counter from './useStateHook.js'

// REACT CONTEXT - its a variable
export const ThemeContext = React.createContext()

function App() {

  // context need to useState also
  const [theme, setTheme] = useState('red')

  function changeColor() {
    console.log('clicked')
    setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red')
  }

  return (
    <>
      {/* theme is a variable name from useState */}
      <ThemeContext.Provider value={{ backgroundColor: theme }}>
        <Counter />
      </ThemeContext.Provider>
      <br />
      <br />
      <button onClick={() => changeColor()}>Change Color</button>
    </>
  );
}

export default App;

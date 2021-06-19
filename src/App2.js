import React, { useState } from 'react';
import Counter from './useStateHook.js'

export const ColorBtn = React.createContext()

function App2() {

    const [color, setColor] = useState('orange')

    function colorChange() {
        console.log('click')
        setColor(prevColor => prevColor === 'orange' ? 'pink' : 'orange')
    }

    return (
        <>
            <ColorBtn.Provider value={{ backgroundColor: color }}>
                <Counter />
            </ColorBtn.Provider>
            <br />
            <br />
            <button onClick={() => colorChange()}>change color</button>

        </>
    )
}

export default App2
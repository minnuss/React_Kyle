import React, { useState } from 'react'
import Counter from './useStateHook.js'

export const ChangeColor = React.createContext()

function NewApp() {

    const [color, setColor] = useState('purple')

    function changeColor() {
        console.log('clicked')
        setColor(prevColor => prevColor === 'purple' ? 'green' : 'purple')
    }

    return (
        <>
            <ChangeColor.Provider value={{ backgroundColor: color }}>
                <Counter />
            </ChangeColor.Provider>
            <br />
            <br />
            <button onClick={() => changeColor()}>Change color</button>
        </>
    )
}

export default NewApp;


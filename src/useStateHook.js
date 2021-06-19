import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'
import { ChangeColor } from './NewApp'
import { ColorBtn } from './App2'
import './useStateHook.css'


export default function Counter() {

    const [state, setState] = useState(1)
    const buttonColor = useContext(ThemeContext)
    const buttonColor2 = useContext(ChangeColor)
    const btnColor = useContext(ColorBtn)

    function addNum(val) {
        setState(prevState => prevState + val)
    }

    return (
        <>
            <button style={btnColor} onClick={() => addNum(-1)} className="btn">-</button>
            <span>{state}</span>
            <button style={btnColor} onClick={() => addNum(+1)} className="btn">+</button>
        </>
    );
}
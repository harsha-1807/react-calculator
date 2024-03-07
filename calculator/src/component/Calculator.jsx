import React, { useState } from 'react'
import { ButtonComp } from './ButtonComp'

const Calculator = ()=> {
    const [input,setinput] = useState("")
    const [Result,setResult] = useState("")
    
    //function to handle all input from user
    const handleinput=(value)=>{
        setinput(prev=> prev+value)
    }
    //function to calculate values
    const calculateResult =()=>{
        try {
            setResult(eval(input))
            
        } catch (error) {
            setResult("ERROR")
        }
        
    }
    
    const deletelast = ()=>{
        setinput(input.slice(0,-1))
    }
    
    const clearinput = ()=>{
        setResult("")
        setinput("")
    }
    
    return (
    <div className='Calculator'>
    <div className='display'>
        <h6>Input</h6>
        <input type="text" placeholder='0' value={input} readOnly/>
        <h6>Result</h6>
        <input type="text" placeholder='0' value={Result} readOnly/>
    </div>
    <div className='buttons' >

        <button onClick={clearinput}>AC</button>
        <button onClick={deletelast}>DEL</button>
        <ButtonComp handleInput={handleinput} value={"+"}/>
        {/* <button onClick={()=>{handleinput("+")}}>+</button> */}
        <button onClick={()=>{handleinput("-")}}>-</button>

        <button onClick={()=>{handleinput("1")}}>1</button>
        <button onClick={()=>{handleinput("2")}}>2</button>
        <button onClick={()=>{handleinput("3")}}>3</button>
        <button onClick={()=>{handleinput("*")}}>X</button>
        <button onClick={()=>{handleinput("4")}}>4</button>
        <button onClick={()=>{handleinput("5")}}>5</button>
        <button onClick={()=>{handleinput("6")}}>6</button>
        <button onClick={()=>{handleinput("/")}}>/</button>
        <button onClick={()=>{handleinput("7")}}>7</button>
        <button onClick={()=>{handleinput("8")}}>8</button>
        <button onClick={()=>{handleinput("9")}}>9</button>
        <button onClick={()=>{handleinput(".")}}>.</button>
        <button onClick={()=>{handleinput("0")}} >0</button>
        <button onClick={calculateResult} style={{gridColumn:"span 3"}}>=</button>

        </div>
    </div>
  )
}

export default Calculator
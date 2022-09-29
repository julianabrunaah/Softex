import React from "react"
import { useState } from "react"
import './calculator.css'

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e){
        if(num===0){
            setNum(e.target.value)
        }else{
            setNum( num + e.target.value)
        }
    }

    function clear(e){
        setNum(0)
    }

    function porcent() {
        setNum(num / 100);
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function changeSign() {
        if (num > 0) {
          setNum(-num);
        } else {
          setNum(Math.abs(num));
        }
    }

    function calculate() {

        if (operator === '/') {
          setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operator === '*') {
          setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operator === '-') {
            console.log(oldnum)
            console.log(num)
            console.log(oldnum-num)
          setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operator === '+') {
          setNum(parseFloat(oldnum) + parseFloat(num));

        }
    } 

    return (

    <section>
      <div className="container">
      <h1 className="result">{num}</h1>
        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button onClick={clear}>C</button>
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button onClick={operatorHandler} value='+'>+</button>
        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button onClick={operatorHandler} value='-'>-</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={inputNum} value={0}>0</button>
        <button onClick={operatorHandler} value='*'>*</button>
        <button onClick={operatorHandler} value='/'>/</button>
        <button onClick={porcent}>%</button>
        <button onClick={calculate} className='btn'>=</button>
      </div>
    </section>

    )
}
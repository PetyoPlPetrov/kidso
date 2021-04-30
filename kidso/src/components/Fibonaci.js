
import {useCallback, useState} from 'react'
import { calculateFibonaci as calculate } from "../utils";

function Fibonaci({ calculateFib= calculate, children }){

    const [number, setNumber]= useState('');
    const [fibNumbers, setFibNumbers]= useState([]);

    const onCalculateFibonaci = useCallback(()=>{
  
     calculateFib(number).then(fibonaciNumbers=>{
        console.log(fibonaciNumbers);

        setFibNumbers(fibonaciNumbers)
    });


    },[calculateFib,number]);

    const onNumberChange = useCallback(e=>setNumber(Number(e.target.value)),[setNumber]);

    return <>   
        <input value={number} onChange={onNumberChange}></input>
        <button onClick={onCalculateFibonaci} >Calculate</button>
        {children(fibNumbers)}
    </>
}

export default Fibonaci
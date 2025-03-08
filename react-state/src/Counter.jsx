import { useState } from "react"

function init(){
    return Math.random();
}
export default function Counter(){
    let [count,setCount]= useState(init);
    console.log("function was re-render");
    //function banao
    function handleClick(){
        setCount((curCount)=>{
            return curCount+1;
        });
        setCount((curCount)=>{
            return curCount+1;
        });
        setCount((curCount)=>{
            return curCount+1;
        });


        console.log(count);
    }

    return(
        <>
        <h3>Count={count}</h3>
        <button onClick={handleClick}>click!</button>
        </>
    );
}
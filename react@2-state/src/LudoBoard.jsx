import { useState } from "react";

export default function LodoBoard(){
    let [moves,setMoves]= useState({blue:0,green:0,yellow:0,red:0});
    let [arr,setArr]= useState(["no moves"]);
    let onBlueClick=()=>{
        setMoves((prev)=>{
           return {...prev,blue:prev.blue+1};
    });

    // arr.push("blue move");
    setArr([...arr,"blue moves"]);
    };
    return(
        <div>
            <h1>Game Begin!</h1>
            <div>
                <p>{arr}</p>
            <p>Blue Move={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={onBlueClick}>{moves.blue}</button>
            <p>green Move={moves.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
            <p>yellow Move={moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>red Move={moves.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    );
}
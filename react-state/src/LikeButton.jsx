import { useState } from "react";

export default function LikeButton(){

    let [isLiked,setIsLinked]= useState(false);
    let[count, setCount]= useState(0);
    
    let toggleLinked=()=>{
        setIsLinked(!isLiked);
        setCount(count+1);
    }
    let styles={color:"red"};
    return (
        <>
        <p>here like option</p>
        <p>click={count}</p>
        <p onClick={toggleLinked} style={styles}>
            {isLiked?<i class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}
        </p>
        </>
    );
}
import { useState } from "react";
import { Button } from "./button";

export const Text = ({color, initialCount}:{color:string, initialCount:number}) => {
    const [count, setCount] = useState(initialCount);
    //hooks só podem ser chamados dentro de um componente ou outros hooks
    const decreaseCount = () => {
        if(count === 0)
        alert("otario") 
        else setCount(count - 1)
    }

    return (
        <div>
        <h1 style={{color}}>{count}</h1>
        <Button onClick={() => setCount(count + 1)}>increase count</Button>
        <Button onClick={decreaseCount}>decrease count</Button>
        <Button onClick={() => setCount(count * 2)}>double count</Button>
        <Button onClick={() => setCount(initialCount)}>reset</Button>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, quisquam.
        </p>
        </div>
    );
}
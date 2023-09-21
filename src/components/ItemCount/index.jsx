import React, { useState } from "react";
import './itemCount.css'

export const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1);
    const decrease = () => {
        setCount(count-1)
    }

    const increase = () => {
        setCount(count+1)
    }


    return (
        <>
            <div className="Counter">
                <button disabled={count<=0} onClick={decrease}> - </button>
                <span> {count} </span>
                <button disabled={count>=stock} onClick={increase}> + </button>
            </div>

            <div>
                <button disabled={stock<=0} onClick={() => onAdd(count)}> Agregar al carrito </button>
            </div>


        </>
    );
}

export default ItemCount;
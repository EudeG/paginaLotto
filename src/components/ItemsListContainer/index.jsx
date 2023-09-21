import React from "react";
import ItemCount from "../ItemCount/index";
export const ItemsListContainer = ({}) => {
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`);
    }

    return (
        <>
            <ItemCount stock={5} onAdd={onAdd}/>
        </>
    );
}

export default ItemsListContainer;
import React from 'react';
import Item from './Item/Item'

function ItemListContainer ({nombre}){
    return(
        <>
            <h1>Hola, me llamo {nombre}</h1>
            <h2>Esta es mi página.</h2>
            <Item/>
        </>
    );
}

export default ItemListContainer;
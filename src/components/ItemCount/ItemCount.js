import React from 'react';

const Contador = ({max, cont}) => {
    const [contador, setContador] = React.useState(cont); //1
    const [stock] = React.useState(max);                //10
    
    const onAdd = () => {
        if (contador < stock) {
            setContador (contador + 1)       
        }
    }

    const onRemove = () => {
        if (contador > 0  || contador == stock ) {
            setContador (contador - 1)                        
        }

    }    

    return (
        <>
            <p>Tenés {contador} ítem(s) de {stock}</p>
            <button onClick = {onAdd}>Sumar</button>
            <button onClick = {onRemove}>Restar</button>
        </>
    );
}

export default Contador
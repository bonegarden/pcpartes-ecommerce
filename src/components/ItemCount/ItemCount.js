import React from 'react';

const Contador = () => {
    const [contador, setContador] = React.useState(1);
    const [stock] = React.useState(10);

    const sumarItem = () => {
        if (contador < stock) {
            setContador (contador + 1)       
        }
    }

    const restarItem = () => {
        if (contador > 0 ) {
            setContador (contador-1)                        
        }

    }    

    return (
        <>
            <p>Tenés {contador} ítem(s) de {stock}</p>
            <button onClick = {sumarItem}>Sumar</button>
            <button onClick = {restarItem}>Restar</button>
        </>
    );
}

export default Contador
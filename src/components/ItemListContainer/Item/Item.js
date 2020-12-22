import React from 'react';
import ProductInfo from './ProductInfo'

let request = new Promise ((res)=>{
    setTimeout(() => {
        res(ProductInfo)
    }, 3000)
})


function Item () {
    return(               
        request.then((resultado)=>{
            console.log(resultado)
        })
    );
}

export default Item;
import React from 'react';

export default props => {
    return(
        <div>
            {props.product.map((product, index)=>{
                // return <p key={index}>{product.title}</p>
                return <p><a key={index} href={'/product/' + product._id}>{product.title}</a></p>
            })}
        </div>
    )
}
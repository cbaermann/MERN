// import React from 'react';

// export default props => {
//     return(
//         <div>
//             <h2>List of avalible products</h2>
//             {props.product.map((product, index)=>{
//                 // return <p key={index}>{product.title}</p>
//                 return <p><a key={index} href={'/product/' + product._id}>{product.title}</a></p>
//             })}
//         </div>
//     )
// }

import React from 'react';
import axios from 'axios';
import { Link }  from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.product.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
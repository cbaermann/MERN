import React, { useEffect, useState } from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default props => {
    const[product, setProduct] = useState({})
    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])

    const onClickHandler = e => {
        e.preventDefault();
        navigate("/product/");
    }

    return(
        <div>
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link><br/><br/>

            <button onClick={onClickHandler}>Back to Product Page</button>


        </div>
    )
}
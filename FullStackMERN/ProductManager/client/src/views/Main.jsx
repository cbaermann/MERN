import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/product/')
            .then(res=> {
                setProduct(res.data);
                setLoaded(true);
            });
    },[])

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product/', product)
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
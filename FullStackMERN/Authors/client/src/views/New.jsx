import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // useEffect( () => {

    // })

    const createAuthor = authors => {
        axios.post('http://localhost:8000/api/author/', authors)
            .then(res=> {
                setAuthor([...author, res.data]);
            })
    }

    return(
        <div>
            <h3>Add a new Author</h3>
            <AuthorForm onSubmitProp={createAuthor}
            initialFirstName="" initialLastName="" />
        </div>
    )
}
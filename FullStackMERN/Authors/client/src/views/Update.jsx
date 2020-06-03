import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PersonForm from '../components/AuthorForm';
import DeleteButton from '../components/DeleteButton';
import AuthorForm from '../components/AuthorForm';

export default props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            // .then(res => console.log(res))
            .then(navigate("/author/"));
    }
    return(
        <div>
            <h1>Update a Author</h1>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialFirstName={author.firstName}
                        initialLastName={author.lastName}
                    />
                    <DeleteButton authorId={author._id} successCallback={()=> navigate("/author/")} />
                </>
            )}
        </div>
    )
}
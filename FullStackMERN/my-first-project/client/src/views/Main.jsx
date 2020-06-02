import React, {useEffect, useState} from 'react';

import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';

export default () => {
    const [people, setPeople] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:8000/api/people')
            .then(res=>setPeople(res.data))
            .catch(err=>console.log("Error: ", err))
    })
    return (
        <>
            <PersonForm/>
            <PersonList people={people}/>
        </>
)

}
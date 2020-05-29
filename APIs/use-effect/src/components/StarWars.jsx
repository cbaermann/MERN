import React, {useState, useEffect } from 'react';

const StarWars = (props) =>{
    const [state, setState ] = useState(0);

    useEffect( () => {
        console.log("Hello")
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                return response.json();
            })
            .then(response => {
                setState({
                    people: response.results
                })
            })
    },[]);

    return (
        <div>
            {state.people ? state.people.map((item,index) =>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}
export default StarWars;
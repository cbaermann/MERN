import React from 'react';
import {Link, navigate} from '@reach/router';

const Hello = (props) => {
    return(
        <div>
            {/* <h3>The word is: {isNaN(props.word)}</h3> */}
    <h3>The word is: {props.word}</h3>
        </div>
    )
}

export default Hello;
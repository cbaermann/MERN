import React from 'react';
import { Link, navigate } from '@reach/router';

const NumberDisplay = (props) => {


    return(
        <div>
            <h3>The number is:  {Number(props.num)} </h3>

        </div>
    )
}

export default NumberDisplay;
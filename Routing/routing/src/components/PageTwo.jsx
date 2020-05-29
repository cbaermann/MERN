import React from 'react';
import { Link, navigate } from '@reach/router';

const PageTwo = props => {

    const onClickHandler = e =>{
        e.preventDefault();
        //navigates programmatically
        //(after form submits)
        navigate('/route-one');
    }

    return(
        <div>
            <h3>You are in Page Two</h3>
            <br/>
            <Link to="/route-one">Go to Page One</Link>
            <br/>
            <button onClick={onClickHandler}>Programatically navigate</button>
        </div>
    )
}

export default PageTwo
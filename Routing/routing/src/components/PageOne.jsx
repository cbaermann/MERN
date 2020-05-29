import React from 'react';
import { Link, navigate } from '@reach/router';

const PageOne = props => {

    const onClickHandler = e =>{
        e.preventDefault();
        //navigates programmatically
        //(after form submits)
        navigate('/route-two');
    }

    return(
        <div>
            <h3>You are in Page One</h3>
            <br/>
            <Link to="/route-two">Go to Page Two</Link>
            <br/>
            <button onClick={onClickHandler}>Programatically navigate</button>
        </div>
    )
}

export default PageOne
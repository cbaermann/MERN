import React, { useState } from 'react';

const UserForm = (props) => {
    const{inputs, setInputs} = props;
    const[inputsError, setInputsError] = useState("");
    const[emailError, setEmailError] = useState("");

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        if(e.target.value.length < 1){
            setInputsError("Must have a name")
        }
        else if(e.target.value.length < 2){
            setInputsError("Name must be more than 2 characters")
        }
    };

    const emailValidator = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
        if(e.target.value.length < 5){
            setEmailError("Must have at least 5 characters")
        }
    }


    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>   
                <input onChange={onChange} type="text" name="firstName"/>
                {
                    inputsError ? 
                <p style={{color:'red'}}>{ inputsError }</p> : 
                ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>   
                <input onChange={onChange} type="text" name="lastName"/>
                {
                    inputsError ? 
                <p style={{color:'red'}}>{ inputsError }</p> : 
                ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>   
                <input onChange={emailValidator} type="text" name="email"/>
                {
                    emailError ? 
                <p style={{color:'red'}}>{ emailError }</p> : 
                ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>   
                <input onChange={onChange} type="password" name="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>   
                <input onChange={onChange} type="password" name="confirmPassword"/>
            </div>
        </form>
    );
};

export default UserForm;
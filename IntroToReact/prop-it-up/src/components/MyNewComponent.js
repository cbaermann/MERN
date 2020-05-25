import React, { Component } from 'react';

class MyNewComponet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.incrementAge
        }
    }
    incrementAge = () => {
        this.setState({
            age : this.state.age +=1
        });
    }
    render(){
        return(
            <div>
                <fieldset>
                    <h1>Doe, Jane</h1>
                    <p>Age: {this.state.age = 45}</p>
                    <button onClick={this.incrementAge}>Birthday Button</button>
                    
                </fieldset>
                <fieldset>
                    <h1>Smith, John</h1>
                    <p>Age: {this.state.age = 88}</p>
                </fieldset>
            </div>
        );
    }
}

export default MyNewComponet;
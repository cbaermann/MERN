import React, { Component } from 'react';

class MyNewComponet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: 45,
            johnAge: 88
        }
    }
    incrementAge = () => {
        this.setState({
            age : this.state.age + 1
        });
    }
    incrementJohn = () => {
        this.setState({
            johnAge : this.state.johnAge +1
        })
    }
    render(){
        return(
            <div>
                <fieldset>
                    <h1>Doe, Jane</h1>
                    <p>Age: {this.state.age}</p>
                    <button onClick={this.incrementAge}>Birthday Button</button>
                    
                </fieldset>
                <fieldset>
                    <h1>Smith, John</h1>
                    <p>Age: {this.state.johnAge}</p>
                    <button onClick={this.incrementJohn}>Birthday Button</button>

                </fieldset>
            </div>
        );
    }
}

export default MyNewComponet;
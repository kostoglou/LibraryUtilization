import React, { Component } from 'react';

class Vote extends Component {
    state = { 
        votes:0
     } 

     handleClick = () =>{
        console.log(this.state.votes);
        this.setState({votes: this.state.votes +1});
     };

    render() { 
        
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>+1</button>
            </React.Fragment>
        );
    }
}
 
export default Vote;
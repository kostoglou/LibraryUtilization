import React, { Component } from 'react';

class Welcome extends Component {
    
    render() { 
        

        return (
            <React.Fragment>
                <div >
                    <input class="input" type="url" id="projectUrl" name="projectUrl"></input>
                    <button onClick={this.props.ongoclick}>GO</button>
                    

                </div>
            </React.Fragment>
        );
    }
}
 
export default Welcome;
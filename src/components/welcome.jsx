import React, { Component } from 'react';

class Welcome extends Component {
    
    render() { 
        

        return (
            <React.Fragment>
                <div >
                    <input className="input" type="url" id="projectUrl" name="projectUrl"></input>
                    <button className="gobutton" onClick={this.props.ongoclick}>GO</button>
                    

                </div>
            </React.Fragment>
        );
    }
}
 
export default Welcome;
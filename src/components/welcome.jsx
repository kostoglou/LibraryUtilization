import React, { Component } from 'react';

class Welcome extends Component {
    state = {
        clientX: 0,
        clienty: 0
      }

      handleCursor = (e) => {
        const cursor = document.getElementsByClassName('gobutton')[0];     
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        cursor.style.setProperty('--x', x + 'px');
        cursor.style.setProperty('--y', y + 'px');
    }

    render() { 
        return (
            <React.Fragment>
                <div >
                    <input className="input" type="url" id="projectUrl" name="projectUrl" ></input>
                    <br></br>
                    <button onMouseMove={ this.handleCursor }
                      className="gobutton" onClick={this.props.ongoclick}> <span>RESULTS</span> </button>
                    <div id='waittingAnalysis' class="lds-dual-ring" style={{display:"none"}}></div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default Welcome;
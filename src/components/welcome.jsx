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
                <div class="welcomeFlex">
                    <div class="item1">

                        <div class="Input">
                            <input type="text" id="input1" class="Input-text" placeholder="Enter your project"></input>
                            <label for="input" class="Input-label">Project URL</label>
                        </div>
                    </div>
                    <div class="item2">
                        <div class="item21">
                            <button onMouseMove={ this.handleCursor }
                                className="gobutton" onClick={this.props.ongoclick}> <span>Start Analysis</span> 
                            </button>
                            <button onMouseMove={ this.handleCursor }
                                className="gobutton" /*</div>onClick={this.props.onHistoryclick}*/> <span>Quick Analysis</span> 
                            </button>
                        </div>
                        <div class="item22">
                            <input type="text" id="input2" class="Input-text" placeholder="Enter number of commits"></input>
                            <label for="input2" class="Input-label">Commits</label>
                            <button onMouseMove={ this.handleCursor }
                                className="gobutton" onClick={this.props.onHistoryclick}> <span>History Analisis</span> 
                            </button>
                        </div>
                    </div>
                        
                        <div id='waittingAnalysis' class="lds-dual-ring" style={{display:"none"}}></div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default Welcome;
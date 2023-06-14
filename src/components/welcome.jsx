import React, { Component } from 'react';

class Welcome extends Component {
    state = {
        clientX: 0,
        clienty: 0
      }

      handleCursor = (e) => {
        const cursor1 = document.getElementsByClassName('gobutton')[0];
        const cursor2 = document.getElementsByClassName('gobutton')[1];
        const cursor3 = document.getElementsByClassName('historybutton')[0];
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        cursor1.style.setProperty('--x', x + 'px');
        cursor1.style.setProperty('--y', y + 'px');
        cursor2.style.setProperty('--x', x + 'px');
        cursor2.style.setProperty('--y', y + 'px');
        cursor3.style.setProperty('--x', x + 'px');
        cursor3.style.setProperty('--y', y + 'px');
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
                        
                        <button onMouseMove={ this.handleCursor }
                            className="gobutton" onClick={()=>this.props.ongoclick("startAnalysisWithMetricsForOneProjectVersion")}> <span>New Analysis</span> 
                        </button>
                        <div class="InputCom">
                            <input type="number"  id="input2" class="InputCom-text" placeholder="Commits"></input>
                            <label for="input2" class="InputCom-label">Commits</label>
                        </div>
                        <button onMouseMove={ this.handleCursor }
                            className="gobutton" onClick={()=>this.props.ongoclick("getAnalysisWithMetrics")}> <span>Last Analysis</span> 
                        </button>
                        <button onMouseMove={ this.handleCursor }
                            className="historybutton" onClick={this.props.onHistoryclick}> <span>Historic Analisis</span> 
                        </button>
                    </div>
                        
                    <div id='waittingAnalysis' class="lds-roller" style={{display:"none"}}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                </div>
            </React.Fragment>
        );
    }
}
 
export default Welcome;
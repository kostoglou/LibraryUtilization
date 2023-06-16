import React, { Component } from 'react';

class MoreInfo extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <div id="more-info">
                <body class="body">
                     <header class="header2"><h1 >About Metrics</h1></header>
                     <p class="moreInfoText">
                        <div class="textboxInfo">
                            <h3 class="metricsNamesInfo">Number of Used Libraries (NUL): </h3>a library-level metric. It refers to the total number of libraries called by a given project.</div>
                        <br></br>
                        <div class="textboxInfo"><h3 class="metricsNamesInfo">Percentage of Used Classes Directly (PUCD): </h3>a class-level metric. This metric calculates the percentage of classes called directly by the project.</div>
                        <br></br>
                        <div class="textboxInfo"> <h3 class="metricsNamesInfo">Percentage of Used Classes Indirectly (PUCI): </h3>class-level metric. PUCI now calculates the percentage of classes that are not called directly.</div>
                        <br></br>
                        <div class="textboxInfo"><h3 class="metricsNamesInfo">Library Direct Utilization Factor (LDUF): </h3>metric at the method level. It calculates the percentage of methods that are called directly, out of the classes that the project calls directly.</div>
                        <br></br>
                        <div class="textboxInfo"><h3 class="metricsNamesInfo">Library Indirect Utilization Factor (LIUF): </h3>A method-level metric. Calculates the percentage of library methods called in total, to all methods of library classes, not directly.</div> 
                        </p>
                     
                </body>
            </div>
         );
    }
}
 
export default MoreInfo;
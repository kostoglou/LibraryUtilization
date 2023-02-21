import './App.css';
import React, { Component } from 'react'
import Welcome from './components/welcome';
import MyTable from './components/mytable';
import DiagramSystemtoApi from './components/diagramSystemtoApi';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import {TiInfoLargeOutline} from 'react-icons/ti';




class App extends Component {

  state = {
    showTable: false,
    showWelcome: true,
    showDiagram1: false,

  }

  onbackclickAll = () => {
    if (this.state.showTable == true) {
      this.handleBackClick();
      document.getElementById("backButtonAllId").style.display = "none";
    }

    if(this.state.showDiagram1==true){
      this.handleBacktoTableClick();
      document.getElementById("backButtonAllId").style.display="flex";
    }
  }

  handleonMouseEnterInformation = () => {
    document.getElementById("infoText").style.display = "block";
    document.getElementById("buttonIcon").style.display = "none";

  }

  handleonMouseLeaveInformation = () => {
    document.getElementById("infoText").style.display = "none";
    document.getElementById("buttonIcon").style.display = "block";

  }

  handleGoClick = () => {
    this.setState({ showTable: true });
    this.setState({ showWelcome: false });
    document.getElementById("backButtonAllId").style.display = "flex";

    document.getElementById("waittingAnalysis").style.display = "block";
  };

  handleBackClick = () => {
    this.setState({ showWelcome: true });
    this.setState({ showTable: false });
    this.setState({ showDiagram1: false })
  };

  handleClickofTableofLibrary = () => {
    this.setState({ showDiagram1: true });
    this.setState({ showTable: false });
  }

  handleBacktoTableClick = () => {
    this.setState({ showTable: true });
    this.setState({ showDiagram1: false });
  }

  render() {


    const data = [
      { library: "lib1", metric1: "20%", metric2: "10%", metric3: "30%" },
      { library: "lib2", metric1: "20%", metric2: "10%", metric3: "30%" },
    ]

    const data2 = [
      { systemclass: "Class 1", firstmethod: "Method 1" },
      { systemclass: "Class 2", firstmethod: "Method 2" },
      { systemclass: "Class 3", firstmethod: "Method 1" },
    ]
    return (
      <body id="body">

        <header><h1 className="box" id='libraryUtilization'>Library Utilization</h1></header>
        <aside>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div class="sti_container" onMouseEnter={this.handleonMouseEnterInformation} onMouseLeave={this.handleonMouseLeaveInformation} >
          <button class="btn" >
            <span id="buttonIcon" class="btn-icon" style={{ display: "block" }}><TiInfoLargeOutline/></span>
            <p id="infoText" class="btn-text" style={{ display: "none" }} > <h2>Why Library Utilazation?</h2><h4>because...</h4>
                                                                            <h2>About the Metrics</h2><h4>The Metrics...</h4>
                                                                            <h2>How to use the app?</h2><h4>the way of use is...</h4></p>
          </button>
        </div>
        </aside>
        <button id="backButtonAllId" className="backbutton" onClick={this.onbackclickAll} style={{ display: "none" }} >previews <span><MdOutlineArrowBackIosNew /></span></button>
        <main>
          {this.state.showWelcome && <Welcome ongoclick={this.handleGoClick} />}
          {this.state.showTable && <MyTable onclickoftableoflibrary={this.handleClickofTableofLibrary}
            data={data} onbackclick={this.handleBackClick} />}
          {this.state.showDiagram1 && <DiagramSystemtoApi />}
        </main>
        <footer> </footer>
      </body>

    );
  }
}

export default App;
